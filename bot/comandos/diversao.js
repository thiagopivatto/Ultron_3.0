//REQUERINDO MODULOS
import {criarTexto, primeiraLetraMaiuscula, erroComandoMsg, consoleErro, timestampParaData} from '../lib/util.js'
import path from 'node:path'
import api from '../../api/api.js'
import * as socket from '../baileys/socket.js'
import { MessageTypes } from '../baileys/mensagem.js'
import {obterMensagensTexto} from '../lib/msgs.js'


export const diversao = async(c, mensagemBaileys, botInfo) => {
    const msgs_texto = obterMensagensTexto(botInfo)
    const ownerNumber = botInfo.numero_dono, botNumber = botInfo.hostNumber, {prefixo} = botInfo
    const {groupId, groupOwner, isGroupAdmins, isBotGroupAdmins, grupoInfo} = mensagemBaileys.grupo
    const {command, sender, textoRecebido, args, id, chatId, isGroupMsg, quotedMsg, quotedMsgObj, quotedMsgObjInfo, mentionedJidList} = mensagemBaileys
    let cmdSemPrefixo = command.replace(prefixo, "")

    try {
        switch(cmdSemPrefixo){
            case 'detector' :
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(!quotedMsg) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) , id)
                    let imgsDetector = ['verdade','vaipra','mentiroso','meengana','kao','incerteza','estresse','conversapraboi']
                    let indexAleatorio = Math.floor(Math.random() * imgsDetector.length)
                    await socket.responderArquivoLocal(c,MessageTypes.image, chatId, './bot/midia/detector/calibrando.png', msgs_texto.diversao.detector.espera, id)
                    await socket.responderArquivoLocal(c,MessageTypes.image, chatId, `./bot/midia/detector/${imgsDetector[indexAleatorio]}.png`, '', quotedMsgObj)
                } catch(err){
                    throw err
                }
                break

            case 'simi':
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let perguntaSimi = textoRecebido.slice(6).trim()
                    await api.IA.simiResponde(perguntaSimi).then(async ({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.diversao.simi.resposta, timestampParaData(Date.now()), resultado), id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
            
            case 'viadometro' :
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(!quotedMsg && mentionedJidList.length == 0) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    if(mentionedJidList.length > 1) return await socket.responderTexto(c, chatId, msgs_texto.diversao.viadometro.apenas_um, id)
                    let respostas = msgs_texto.diversao.viadometro.respostas
                    let indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                    if(mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0]
                    else idResposta = quotedMsgObj, alvo = quotedMsgObjInfo.sender
                    if(ownerNumber == alvo) indexAleatorio = 0
                    let respostaTexto = criarTexto(msgs_texto.diversao.viadometro.resposta,respostas[indexAleatorio])
                    await socket.responderTexto(c, chatId, respostaTexto, idResposta)
                } catch(err){
                    throw err
                }
                break
            
            case 'bafometro' :
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(!quotedMsg && mentionedJidList.length == 0) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    if (mentionedJidList.length > 1) return await socket.responderTexto(c, chatId, msgs_texto.diversao.bafometro.apenas_um, id)
                    let respostas = msgs_texto.diversao.bafometro.respostas
                    let indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                    if(mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0]
                    else idResposta = quotedMsgObj, alvo = quotedMsgObjInfo.sender
                    if(ownerNumber == alvo) indexAleatorio = 0
                    let respostaTexto = criarTexto(msgs_texto.diversao.bafometro.resposta, respostas[indexAleatorio])
                    await socket.responderTexto(c, chatId, respostaTexto, idResposta)
                } catch(err){
                    throw err
                }
                break

            case 'chance' :
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let num = Math.floor(Math.random() * 100), temaChance = textoRecebido.slice(8).trim()
                    if(quotedMsg){ 
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.diversao.chance.resposta, num, temaChance), quotedMsgObj)
                    } else {
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.diversao.chance.resposta, num, temaChance), id)
                    }
                } catch(err){
                    throw err
                }
                break

            case "caracoroa":
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let ladosMoeda = ["cara","coroa"]
                    let textoUsuario = textoRecebido.slice(11).toLowerCase().trim()
                    if(!ladosMoeda.includes(textoUsuario)) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    await socket.responderTexto(c, chatId, msgs_texto.diversao.caracoroa.espera, id)
                    let indexAleatorio = Math.floor(Math.random() * ladosMoeda.length)
                    let vitoriaUsuario = ladosMoeda[indexAleatorio] == textoUsuario
                    let textoResultado
                    if(vitoriaUsuario){
                        textoResultado = criarTexto(msgs_texto.diversao.caracoroa.resposta.vitoria, primeiraLetraMaiuscula(ladosMoeda[indexAleatorio]))
                    } else {
                        textoResultado = criarTexto(msgs_texto.diversao.caracoroa.resposta.derrota, primeiraLetraMaiuscula(ladosMoeda[indexAleatorio]))
                    }
                    await socket.responderArquivoUrl(c, MessageTypes.image, chatId, path.resolve(`bot/midia/caracoroa/${ladosMoeda[indexAleatorio]}.png`), textoResultado, id)
                } catch(err){
                    throw err
                }
                break

            case "ppt":
                try{
                    let ppt = ["pedra","papel","tesoura"], indexAleatorio = Math.floor(Math.random() * ppt.length)
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    if(!ppt.includes(args[1].toLowerCase())) return await socket.responderTexto(c, chatId, msgs_texto.diversao.ppt.opcao_erro, id)
                    let escolhaBot = ppt[indexAleatorio], iconeEscolhaBot = null, escolhaUsuario = args[1].toLowerCase(), iconeEscolhaUsuario = null, vitoriaUsuario = null
                    if(escolhaBot == "pedra"){
                        iconeEscolhaBot = "✊"
                        if(escolhaUsuario == "pedra") vitoriaUsuario = null, iconeEscolhaUsuario = "✊"
                        if(escolhaUsuario == "tesoura") vitoriaUsuario = false, iconeEscolhaUsuario = "✌️"
                        if(escolhaUsuario == "papel") vitoriaUsuario = true, iconeEscolhaUsuario = "✋"
                    } else if(escolhaBot == "papel"){
                        iconeEscolhaBot = "✋"
                        if(escolhaUsuario == "pedra") vitoriaUsuario = false, iconeEscolhaUsuario = "✊"
                        if(escolhaUsuario == "tesoura") vitoriaUsuario = true, iconeEscolhaUsuario = "✌️"
                        if(escolhaUsuario == "papel") vitoriaUsuario = null, iconeEscolhaUsuario = "✋"
                    } else  {
                        iconeEscolhaBot = "✌️"
                        if(escolhaUsuario == "pedra") vitoriaUsuario = true, iconeEscolhaUsuario = "✊"
                        if(escolhaUsuario == "tesoura") vitoriaUsuario = null, iconeEscolhaUsuario = "✌️"
                        if(escolhaUsuario == "papel") vitoriaUsuario = false, iconeEscolhaUsuario = "✋"
                    }
                    let textoResultado = ''
                    if(vitoriaUsuario == true) {
                        textoResultado = criarTexto(msgs_texto.diversao.ppt.resposta.vitoria, iconeEscolhaUsuario, iconeEscolhaBot)
                    }else if(vitoriaUsuario == false){
                        textoResultado = criarTexto(msgs_texto.diversao.ppt.resposta.derrota, iconeEscolhaUsuario, iconeEscolhaBot)
                    } else {
                        textoResultado = criarTexto(msgs_texto.diversao.ppt.resposta.empate, iconeEscolhaUsuario, iconeEscolhaBot)
                    }
                    await socket.responderTexto(c, chatId, textoResultado, id)
                } catch(err){
                    throw err
                }
                break

            case "massacote":
            case 'mascote':
                try{
                    const mascoteFotoURL = "https://i.imgur.com/mVwa7q4.png"
                    await socket.responderArquivoUrl(c, MessageTypes.image,chatId, mascoteFotoURL, 'Whatsapp Jr.', id)
                } catch(err){
                    throw err
                }
                break 

            case 'malacos':
                try{
                    const malacosFotoURL = "https://i.imgur.com/7bcn2TK.jpg"
                    await socket.responderArquivoUrl(c, MessageTypes.image, chatId, malacosFotoURL,'Somos o problema', id)
                } catch(err){
                    throw err
                }
                break

            case 'roletarussa':
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if (!isGroupAdmins) return await socket.responderTexto(c, chatId, msgs_texto.permissao.apenas_admin , id)
                    if (!isBotGroupAdmins) return await socket.responderTexto(c, chatId,msgs_texto.permissao.bot_admin, id)
                    let idParticipantesAtuais = grupoInfo.participantes
                    if(groupOwner == botNumber)  idParticipantesAtuais.splice(idParticipantesAtuais.indexOf(botNumber),1)
                    else {
                        idParticipantesAtuais.splice(idParticipantesAtuais.indexOf(groupOwner),1)
                        idParticipantesAtuais.splice(idParticipantesAtuais.indexOf(botNumber),1)
                    }
                    if(idParticipantesAtuais.length == 0) return await socket.responderTexto(c, chatId, msgs_texto.diversao.roletarussa.sem_membros, id)
                    let indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                    let participanteEscolhido = idParticipantesAtuais[indexAleatorio]
                    let respostaTexto = criarTexto(msgs_texto.diversao.roletarussa.resposta, participanteEscolhido.replace("@s.whatsapp.net", ''))
                    await socket.responderTexto(c, chatId, msgs_texto.diversao.roletarussa.espera , id)
                    await socket.enviarTextoComMencoes(c, chatId, respostaTexto, [participanteEscolhido])
                    await socket.removerParticipante(c, chatId, participanteEscolhido)
                } catch(err){
                    throw err
                }
                break
            
            case 'casal':
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    let idParticipantesAtuais = grupoInfo.participantes
                    if(idParticipantesAtuais.length < 2) return await socket.responderTexto(c, chatId, msgs_texto.diversao.casal.minimo, id)
                    let indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                    let pessoaEscolhida1 = idParticipantesAtuais[indexAleatorio]
                    idParticipantesAtuais.splice(indexAleatorio,1)
                    indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                    let pessoaEscolhida2 = idParticipantesAtuais[indexAleatorio]
                    let respostaTexto = criarTexto(msgs_texto.diversao.casal.resposta, pessoaEscolhida1.replace("@s.whatsapp.net", ''), pessoaEscolhida2.replace("@s.whatsapp.net", ''))
                    await socket.enviarTextoComMencoes(c, chatId, respostaTexto, [pessoaEscolhida1, pessoaEscolhida2])
                } catch(err){
                    throw err
                }
                break

            case 'gadometro':
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(!quotedMsg && mentionedJidList.length == 0) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) , id)
                    if(mentionedJidList.length > 1) return await socket.responderTexto(c, chatId, msgs_texto.diversao.gadometro.apenas_um , id)
                    let respostas = msgs_texto.diversao.gadometro.respostas 
                    let indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                    if (mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0]
                    else idResposta = quotedMsgObj, alvo = quotedMsgObjInfo.sender
                    if(ownerNumber == alvo) indexAleatorio = 0
                    let respostaTexto = criarTexto(msgs_texto.diversao.gadometro.resposta, respostas[indexAleatorio])
                    await socket.responderTexto(c, chatId, respostaTexto, idResposta)       
                } catch(err){
                    throw err
                }
                break

            case 'top5':
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let temaRanking = textoRecebido.slice(6).trim(), idParticipantesAtuais = grupoInfo.participantes
                    if(idParticipantesAtuais.length < 5) return await socket.responderTexto(c, chatId,msgs_texto.diversao.top5.erro_membros, id)
                    let respostaTexto = criarTexto(msgs_texto.diversao.top5.resposta_titulo, temaRanking), mencionarMembros = []
                    for (let i = 0 ; i < 5 ; i++){
                        let medalha = ""
                        switch(i+1){
                            case 1:
                                medalha = '🥇'
                            break
                            case 2:
                                medalha = '🥈'
                            break
                            case 3:
                                medalha = '🥉'
                            break
                            default:
                                medalha = ''
                        }
                        let indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                        let membroSelecionado = idParticipantesAtuais[indexAleatorio]
                        respostaTexto += criarTexto(msgs_texto.diversao.top5.resposta_itens, medalha, i+1, membroSelecionado.replace("@s.whatsapp.net", ''))
                        mencionarMembros.push(membroSelecionado)
                        idParticipantesAtuais.splice(idParticipantesAtuais.indexOf(membroSelecionado),1)                
                    }
                    await socket.enviarTextoComMencoes(c, chatId, respostaTexto, mencionarMembros)
                } catch(err){
                    throw err
                }
                break

            case 'par':
                try{
                    if (!isGroupMsg) return await socket.responderTexto(c, chatId, msgs_texto.permissao.grupo, id)
                    if(mentionedJidList.length !== 2) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) , id)
                    let respostas = msgs_texto.diversao.par.respostas
                    let indexAleatorio = Math.floor(Math.random() * respostas.length)
                    let respostaTexto = criarTexto(msgs_texto.diversao.par.resposta, mentionedJidList[0].replace("@s.whatsapp.net", ''), mentionedJidList[1].replace("@s.whatsapp.net", ''), respostas[indexAleatorio])
                    await socket.enviarTextoComMencoes(c, chatId, respostaTexto, mentionedJidList)
                } catch(err){
                    throw err
                }
                break

            case "fch":
                try{
                    await api.Gerais.obterCartasContraHu().then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.diversao.fch.resposta, resultado), id)
                    }).catch(async err=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
                
                
            // NOVOS COMANDOS

            case 'trisal':
                if (!isGroupMsg) return await client.reply(from, msgs_texto.permissao.grupo, id)
                var idParticipantesAtuais = await client.getGroupMembersId(groupId)
                if (idParticipantesAtuais.length < 3) return await client.reply(from, msgs_texto.diversao.trisal.minimo, id)
                var indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                var pessoaEscolhida1 = idParticipantesAtuais[indexAleatorio]
                idParticipantesAtuais.splice(indexAleatorio, 1)
                indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                var pessoaEscolhida2 = idParticipantesAtuais[indexAleatorio]
                idParticipantesAtuais.splice(indexAleatorio, 2)
                indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                var pessoaEscolhida3 = idParticipantesAtuais[indexAleatorio]
                idParticipantesAtuais.splice(indexAleatorio, 3)
                indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                var respostaTexto = criarTexto(msgs_texto.diversao.trisal.resposta, pessoaEscolhida1.replace(/@c.us/g, ''), pessoaEscolhida2.replace(/@c.us/g, ''), pessoaEscolhida3.replace(/@c.us/g, ''))
                await client.sendTextWithMentions(from, respostaTexto)
                break

            case 'top':
                if (!isGroupMsg) return await client.reply(from, msgs_texto.permissao.grupo, id)
                if (args.length === 1) return client.reply(from, erroComandoMsg(command), id)
                var qtdUsuarios = args[1], temaRanking = body.slice(7).trim(), idParticipantesAtuais = await client.getGroupMembersId(groupId)
                if (isNaN(qtdUsuarios)) return client.reply(from, msgs_texto.diversao.top.erro_qtd, id)
                if (qtdUsuarios > 50) return client.reply(from, msgs_texto.diversao.top.limite_qtd, id)
                if (qtdUsuarios > idParticipantesAtuais.length) return client.reply(from, msgs_texto.diversao.top.erro_qtd, id)
                var respostaTexto = criarTexto(msgs_texto.diversao.top.resposta_titulo, qtdUsuarios, temaRanking)
                for (let i = 0; i < qtdUsuarios; i++) {
                    var medalha = ""
                    switch (i + 1) {
                        case 1:
                            medalha = '🥇'
                            break
                        case 2:
                            medalha = '🥈'
                            break
                        case 3:
                            medalha = '🥉'
                            break
                        default:
                            medalha = ''
                    }
                    var indexAleatorio = Math.floor(Math.random() * idParticipantesAtuais.length)
                    var membroSelecionado = idParticipantesAtuais[indexAleatorio]
                    respostaTexto += criarTexto(msgs_texto.diversao.top.resposta_itens, medalha, i + 1, membroSelecionado.replace(/@c.us/g, ''))
                    idParticipantesAtuais.splice(idParticipantesAtuais.indexOf(membroSelecionado), 1)
                }
                await client.sendTextWithMentions(from, respostaTexto)
                break


            case 'jacometro':
                if (!isGroupMsg) return await client.reply(from, msgs_texto.permissao.grupo, id)
                if (!quotedMsg && mentionedJidList.length === 0) return await client.reply(from, erroComandoMsg(command), id)
                if (mentionedJidList.length > 1) return await client.reply(from, msgs_texto.diversao.jacometro.apenas_um, id)
                var respostas = msgs_texto.diversao.jacometro.respostas
                var indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                if (mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0].replace(/@c.us/g, '')
                else idResposta = quotedMsgObj.id, alvo = quotedMsgObj.author.replace(/@c.us/g, '')
                if (ownerNumber == alvo) indexAleatorio = 0
                var respostaTexto = criarTexto(msgs_texto.diversao.jacometro.resposta, respostas[indexAleatorio])
                await client.reply(from, respostaTexto, idResposta)
                break

            case 'bolometro':
                if (!isGroupMsg) return await client.reply(from, msgs_texto.permissao.grupo, id)
                if (!quotedMsg && mentionedJidList.length === 0) return await client.reply(from, erroComandoMsg(command), id)
                if (mentionedJidList.length > 1) return await client.reply(from, msgs_texto.diversao.bolametro.apenas_um, id)
                var respostas = msgs_texto.diversao.bolametro.respostas
                var indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                if (mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0].replace(/@c.us/g, '')
                else idResposta = quotedMsgObj.id, alvo = quotedMsgObj.author.replace(/@c.us/g, '')
                if (ownerNumber == alvo) indexAleatorio = 0
                var respostaTexto = criarTexto(msgs_texto.diversao.bolametro.resposta, respostas[indexAleatorio])
                await client.reply(from, respostaTexto, idResposta)
                break

            case 'fernandometro':
                if (!isGroupMsg) return await client.reply(from, msgs_texto.permissao.grupo, id)
                if (!quotedMsg && mentionedJidList.length === 0) return await client.reply(from, erroComandoMsg(command), id)
                if (mentionedJidList.length > 1) return await client.reply(from, msgs_texto.diversao.fernandometro.apenas_um, id)
                var respostas = msgs_texto.diversao.fernandometro.respostas
                var indexAleatorio = Math.floor(Math.random() * respostas.length), idResposta = null, alvo = null
                if (mentionedJidList.length == 1) idResposta = id, alvo = mentionedJidList[0].replace(/@c.us/g, '')
                else idResposta = quotedMsgObj.id, alvo = quotedMsgObj.author.replace(/@c.us/g, '')
                if (ownerNumber == alvo) indexAleatorio = 0
                var respostaTexto = criarTexto(msgs_texto.diversao.fernandometro.resposta, respostas[indexAleatorio])
                await client.reply(from, respostaTexto, idResposta)
                break

            case "vod":
                if (!isGroupMsg) return await client.reply(from, "Este comando só pode ser usado em grupos.", id);
                if (args.length < 3 || args.length > 4) {
                    return await client.reply(from, "Formato inválido. Use !vod [vdd/dsf] [nível]", id);
                }
                const tipoEscolha = args[1].toLowerCase();
                const nivel = parseInt(args[2]);
                const tipoEscolhaMapeado = tipoEscolha === 'vdd' ? 'truth' : tipoEscolha === 'dsf' ? 'dare' : '';
                if (!tipoEscolhaMapeado) {
                    return await client.reply(from, "Tipo de escolha inválido. Use vdd ou dsf.", id);
                }
                if (isNaN(nivel) || nivel < 1 || nivel > 5) {
                    return await client.reply(from, "Nível inválido. Use um número de 1 a 5.", id);
                }
                const frasesVOD = await axios.get("https://gist.githubusercontent.com/thiagopivatto/3ed7f417a37590b75745cc1c4cba450a/raw/a960f63a10323565a21c32d13a457edca67ebb75/vod.json");
                const frasesFiltradas = frasesVOD.data.filter(frase => frase.level === nivel.toString() && frase.type.toLowerCase() === tipoEscolhaMapeado);
                if (frasesFiltradas.length > 0) {
                    await api.traduzirFrases(frasesFiltradas);
                    const fraseSelecionada = frasesFiltradas[Math.floor(Math.random() * frasesFiltradas.length)];
                    const mensagemResposta = `Nível: ${nivel}\nTipo: ${tipoEscolha}\nFrase: ${fraseSelecionada.summary}`;
                    await client.reply(from, mensagemResposta, id);
                } else {
                    await client.reply(from, "Não foram encontradas frases com o nível e tipo especificados.", id);
                }
                break



            
        }
    } catch(err){
        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_comando_codigo, command), id)
        err.message = `${command} - ${err.message}`
        consoleErro(err, "DIVERSÃO")
    }
    
}