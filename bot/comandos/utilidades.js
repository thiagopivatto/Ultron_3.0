//REQUERINDO MÓDULOS
import {criarTexto, erroComandoMsg, consoleErro} from '../lib/util.js'
import api from '../../api/api.js'
import * as socket from '../baileys/socket.js'
import {MessageTypes} from '../baileys/mensagem.js'
import {downloadMediaMessage } from '@whiskeysockets/baileys'
import {obterMensagensTexto} from '../lib/msgs.js'
import { respostaHercaiImagem } from '../../api/ia.js'


export const utilidades = async(c, mensagemBaileys, botInfo) => {
    const msgs_texto = obterMensagensTexto(botInfo)
    const {prefixo} = botInfo
    const {textoRecebido, sender, command, isMedia, args, type, id, chatId, mimetype, quotedMsg, quotedMsgObj, quotedMsgObjInfo} = mensagemBaileys
    let cmdSemPrefixo = command.replace(prefixo, "")

    const criarRespostaCotacao = (data, ativo) => {
        let resposta = `📈 *Cotação Atual de ${ativo}* 📉\n\n`;
    
        if (data.b3) {
            const precoB3 = parseFloat(data.b3.price).toFixed(2).replace('.', ',');
            resposta += `🇧🇷 *B3* (${data.b3.symbol})\n`;
            resposta += `💵 *Preço:* R$ ${precoB3}\n`;
            resposta += `🗓️ *Última atualização:* ${data.b3.lastUpdated}\n`;
            resposta += `📉 *Variação:* ${data.b3.change} (${data.b3.changePercent})\n\n`;
        }
    
        if (data.nasdaq) {
            const precoNASDAQ = parseFloat(data.nasdaq.price).toFixed(2);
            resposta += `🇺🇸 *NASDAQ* (${data.nasdaq.symbol})\n`;
            resposta += `💵 *Preço:* $ ${precoNASDAQ}\n`;
            resposta += `🗓️ *Última atualização:* ${data.nasdaq.lastUpdated}\n`;
            resposta += `📉 *Variação:* ${data.nasdaq.change} (${data.nasdaq.changePercent})\n\n`;
        }
    
        if (data.nyse) {
            const precoNYSE = parseFloat(data.nyse.price).toFixed(2);
            resposta += `🇺🇸 *NYSE* (${data.nyse.symbol})\n`;
            resposta += `💵 *Preço:* $ ${precoNYSE}\n`;
            resposta += `🗓️ *Última atualização:* ${data.nyse.lastUpdated}\n`;
            resposta += `📉 *Variação:* ${data.nyse.change} (${data.nyse.changePercent})\n\n`;
        }
    
        if (data.cryptos) {
            const precoCrypto = parseFloat(data.cryptos.price).toFixed(9);
            resposta += `💰 *Criptomoeda* - ${data.cryptos.name} (${data.cryptos.symbol})\n`;
            resposta += `💵 *Preço:* $ ${precoCrypto}\n`;
            resposta += `🗓️ *Última atualização:* ${data.cryptos.lastUpdated}\n\n`;
        }
    
        return resposta;
    };    

    try{
        switch(cmdSemPrefixo){  
            case 'upimg':
                if (quotedMsgObjInfo?.type != MessageTypes.image && type != MessageTypes.image) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                let bufferImagem = await downloadMediaMessage(quotedMsg ? quotedMsgObj : id, 'buffer')
                await api.Imagens.imagemUpload(bufferImagem).then(async ({resultado})=>{
                    await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.upimg.resposta, resultado), id)
                }).catch(async(err)=>{
                    if(!err.erro) throw err
                    await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                })
                break

            case 'encurtar':
                if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                let usuarioTexto = textoRecebido.slice(10).trim()
                await api.Gerais.encurtarLink(usuarioTexto).then(async({resultado})=>{
                    await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.encurtar.resposta, resultado), id)
                }).catch(async(err)=>{
                    if(!err.erro) throw err
                    await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                })
                break    

            case "filmes":
                try{
                    await api.Gerais.top20TendenciasDia("filmes").then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.filmes.resposta, resultado), id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "series":
                try{
                    await api.Gerais.top20TendenciasDia("series").then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.series.resposta, resultado), id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "chat":
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let usuarioTexto = textoRecebido.slice(5).trim()
                    await api.IA.respostaHercaiTexto(usuarioTexto, sender).then(async ({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.chat.resposta, resultado), id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
            
            case "criarimg":
                try {
                    if (args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let usuarioTexto = textoRecebido.slice(10).trim()
                    await socket.responderTexto(c, chatId, msgs_texto.utilidades.criarimg.espera, id)
                    await respostaHercaiImagem(usuarioTexto).then(async ({ resultado }) => {
                        await socket.responderArquivoUrl(c, MessageTypes.image, chatId, resultado, '', id)
                    }).catch(async (err) => {
                        if (!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro), id)
                    })
                } catch (err) {
                    throw err
                }
                break

            case "rbg":
                try{
                    if(!isMedia && !quotedMsg) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) , id)
                    let dadosMensagem = {
                        tipo : (isMedia) ? type : quotedMsgObjInfo.type,
                        mimetype : (isMedia)? mimetype : quotedMsgObjInfo.mimetype,
                        message: (quotedMsg)? quotedMsgObj  : id,
                    }
                    if(dadosMensagem.tipo != MessageTypes.image) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.rbg.invalido , id)
                    await socket.responderTexto(c, chatId, msgs_texto.utilidades.rbg.espera, id)
                    let bufferImagem = await downloadMediaMessage(dadosMensagem.message, "buffer")
                    await api.Imagens.removerFundo(bufferImagem).then(async({resultado})=>{
                        await socket.responderArquivoBuffer(c, MessageTypes.image, chatId, resultado, '', id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
            
            case "tabela":
                try{
                    await api.Gerais.obterTabelaNick().then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.tabela.resposta, resultado), id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "letra":
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let usuarioTexto = textoRecebido.slice(7).trim()
                    await api.Gerais.obterLetraMusica(usuarioTexto).then(async({resultado})=>{
                        await socket.responderArquivoLocal(c, MessageTypes.image, chatId, resultado.imagem, criarTexto(msgs_texto.utilidades.letra.resposta, resultado.titulo, resultado.artista, resultado.letra), id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "ouvir":
                try{
                    if(!quotedMsg || quotedMsgObjInfo?.type != MessageTypes.audio) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    if(quotedMsgObjInfo.seconds > 90) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.ouvir.erro_limite, id)
                    let bufferAudio = await downloadMediaMessage(quotedMsgObj, "buffer")
                    await api.Audios.obterTranscricaoAudio(bufferAudio).then(async({resultado})=>{
                        let textoTranscricao = resultado.results.channels[0].alternatives[0].transcript
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.ouvir.sucesso, textoTranscricao), quotedMsgObj)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
                
            case "ddd":
                try{
                    let DDD = null
                    if(quotedMsg){
                        let DDI = quotedMsgObjInfo.sender.slice(0,2)
                        if(DDI != "55") return await socket.responderTexto(c, chatId, msgs_texto.utilidades.ddd.somente_br ,id)
                        DDD = quotedMsgObjInfo.sender.slice(2,4)
                    } else if(args.length > 1){
                        if(args[1].length != 2) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.ddd.nao_encontrado ,id)
                        DDD = args[1]
                    } else return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)

                    await api.Gerais.obterInfoDDD(DDD).then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.ddd.resposta, resultado.estado, resultado.regiao), id)
                    }).catch(async err=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "audio":
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let efeitosSuportados = ['estourar','x2', 'reverso', 'grave', 'agudo', 'volume'], tipoEfeito = textoRecebido.slice(7).trim()
                    if(!efeitosSuportados.includes(tipoEfeito)) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    if(!quotedMsg || quotedMsgObjInfo.type != MessageTypes.audio) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let bufferAudio = await downloadMediaMessage(quotedMsgObj, "buffer")
                    await api.Audios.obterAudioModificado(bufferAudio, tipoEfeito).then(async ({resultado : bufferAudioEditado})=>{
                        await socket.responderArquivoBuffer(c, MessageTypes.audio, chatId, bufferAudioEditado, '', id, "audio/mpeg")
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "qualmusica":
                try{
                    let tipoMensagem = quotedMsg ? quotedMsgObjInfo.type : type
                    if(tipoMensagem != MessageTypes.video && tipoMensagem != MessageTypes.audio) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let dadosMensagem = quotedMsg ? quotedMsgObj : id             
                    let bufferMensagemMidia = await downloadMediaMessage(dadosMensagem, "buffer")
                    await socket.responderTexto(c, chatId, msgs_texto.utilidades.qualmusica.espera, id)
                    await api.Audios.obterReconhecimentoMusica(bufferMensagemMidia, tipoMensagem).then(async({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.qualmusica.resposta, resultado.titulo, resultado.produtora, resultado.duracao, resultado.lancamento, resultado.album, resultado.artistas), id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "clima":
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo),id)
                    let usuarioTexto = textoRecebido.slice(7).trim()
                    await api.Gerais.obterClima(usuarioTexto).then(async({resultado})=>{
                        let respostaClimaTexto = criarTexto(msgs_texto.utilidades.clima.resposta, resultado.texto), respostaClimaFoto = resultado.foto_clima
                        await socket.responderTexto(c, chatId, respostaClimaTexto, id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "moeda":
                try{
                    if(args.length !== 3) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let usuarioMoedaInserida = args[1], usuarioValorInserido = args[2]
                    await api.Gerais.obterConversaoMoeda(usuarioMoedaInserida, usuarioValorInserido).then(async({resultado})=>{
                        let itens = ''
                        for(let dado of  resultado.conversao) itens += criarTexto(msgs_texto.utilidades.moeda.resposta_item, dado.conversao, dado.valor_convertido_formatado, dado.tipo, dado.atualizacao)
                        let respostaFinal = criarTexto(msgs_texto.utilidades.moeda.resposta_completa, resultado.valor_inserido, resultado.moeda_inserida, itens)
                        await socket.responderTexto(c, chatId, respostaFinal ,id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case "pesquisa":
                try{
                    if (args.length === 1) return socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) , id)
                    let usuarioTexto = textoRecebido.slice(10).trim() 
                    await api.Gerais.obterPesquisaWeb(usuarioTexto).then(async({resultados})=>{
                        let pesquisaResposta = criarTexto(msgs_texto.utilidades.pesquisa.resposta_titulo, usuarioTexto)
                        for(let resultado of resultados){
                            pesquisaResposta += "═════════════════\n"
                            pesquisaResposta += criarTexto(msgs_texto.utilidades.pesquisa.resposta_itens, resultado.titulo, resultado.link, resultado.descricao)
                        }
                        await socket.responderTexto(c, chatId, pesquisaResposta, id)
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case 'rastreio':
                try{
                    if (args.length === 1) return socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo), id)
                    let usuarioCodigoRastreio = textoRecebido.slice(10).trim()
                    if(usuarioCodigoRastreio.length != 13) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.rastreio.codigo_invalido, id)
                    await api.Gerais.obterRastreioCorreios(usuarioCodigoRastreio).then(async({resultado})=>{   
                        let rastreioResposta = msgs_texto.utilidades.rastreio.resposta_titulo
                        for(let dado of resultado){
                            let local = (dado.local != undefined) ?  `Local : ${dado.local}` : `Origem : ${dado.origem}\nDestino : ${dado.destino}`
                            rastreioResposta += criarTexto(msgs_texto.utilidades.rastreio.resposta_itens, dado.status, dado.data, dado.hora, local)
                            rastreioResposta += "-----------------------------------------\n"
                        }
                        await socket.responderTexto(c, chatId, rastreioResposta, id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
            
            case "anime":
                try{
                    let dadosMensagem = {
                        tipo: (quotedMsg)? quotedMsgObjInfo.type : type,
                        mimetype: (quotedMsg)? quotedMsgObjInfo.mimetype : mimetype,
                        mensagem: (quotedMsg)? quotedMsgObj : id
                    }
                    if(dadosMensagem.tipo != MessageTypes.image) return await socket.responderTexto(c, chatId,erroComandoMsg(command, botInfo), id)
                    await socket.responderTexto(c, chatId,msgs_texto.utilidades.anime.espera, id)
                    let bufferImagem = await downloadMediaMessage(dadosMensagem.mensagem, "buffer")
                    await api.Imagens.obterAnimeInfo(bufferImagem).then(async ({resultado})=>{
                        if(resultado.similaridade < 87){
                            await socket.responderTexto(c, chatId,msgs_texto.utilidades.anime.similaridade,id)
                        } else {
                            resultado.episodio = resultado.episodio || "---"
                            let respostaAnimeInfo = criarTexto(msgs_texto.utilidades.anime.resposta, resultado.titulo, resultado.episodio, resultado.tempoInicial, resultado.tempoFinal, resultado.similaridade, resultado.link_previa)                          
                            await socket.responderArquivoLocal(c, MessageTypes.video, chatId, resultado.link_previa, respostaAnimeInfo, id, "video/mp4")
                        }
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break
            
            case "traduz":
                try{
                    let usuarioTexto = "", idiomaTraducao = 'pt'
                    if(quotedMsg  && (quotedMsgObjInfo.type == MessageTypes.text || quotedMsgObjInfo.type == MessageTypes.extendedText)){
                        if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) ,id)
                        idiomaTraducao = args[1]
                        usuarioTexto = quotedMsgObjInfo.body || quotedMsgObjInfo.caption
                    } else if(!quotedMsg && (type == MessageTypes.text || type == MessageTypes.extendedText)){
                        if(args.length < 3) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) ,id)
                        idiomaTraducao = args[1]
                        usuarioTexto = args.slice(2).join(" ")
                    } else {
                        return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) ,id)
                    }
                    let idiomasSuportados = ["pt", 'en', 'ja', 'es', 'it', 'ru', 'ko', 'sv', 'de', 'fr', 'nl', 'pl', 'tr', 'zh', 'fi']
                    if(!idiomasSuportados.includes(idiomaTraducao)) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.traduz.nao_suportado, id)
                    await api.Gerais.obterTraducao(usuarioTexto, idiomaTraducao).then(async ({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.traduz.resposta, usuarioTexto, resultado), id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_comando_codigo, command), id)
                    err.message = `${command} - ${err.message}`
                    throw err
                }
                break  
            
            case 'voz':
                try{
                    let usuarioTexto = ''
                    if (args.length === 1) {
                        return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) ,id)
                    } else if(quotedMsg  && (quotedMsgObjInfo.type == MessageTypes.extendedText || quotedMsgObjInfo.type == MessageTypes.text)){
                        usuarioTexto = (args.length == 2) ? quotedMsgObjInfo.body || quotedMsgObjInfo.caption : textoRecebido.slice(8).trim()
                    } else {
                        usuarioTexto = textoRecebido.slice(8).trim()
                    }
                    if (!usuarioTexto) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.voz.texto_vazio , id)
                    if (usuarioTexto.length > 200) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.voz.texto_longo, id)
                    let idioma = textoRecebido.slice(5, 7).toLowerCase(), idiomasSuportados = ["pt", 'en', 'ja', 'es', 'it', 'ru', 'ko', 'sv', 'de', 'fr', 'nl', 'pl', 'tr', 'zh', 'fi']
                    if(!idiomasSuportados.includes(idioma)) return await socket.responderTexto(c, chatId, msgs_texto.utilidades.voz.nao_suportado, id)
                    await api.Audios.textoParaVoz(idioma, usuarioTexto).then(async({resultado})=>{
                        await socket.responderArquivoBuffer(c, MessageTypes.audio, chatId, resultado, '', id, 'audio/mpeg')
                    }).catch(async(err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case 'noticias':
                try{
                    await api.Gerais.obterNoticias().then(async({resultado})=>{
                        let respostaNoticias = msgs_texto.utilidades.noticia.resposta_titulo
                        for(let noticia of resultado){
                            respostaNoticias += criarTexto(msgs_texto.utilidades.noticia.resposta_itens, noticia.titulo, noticia.autor, noticia.publicadoHa, noticia.url)
                        }
                        await socket.responderTexto(c, chatId, respostaNoticias, id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

            case 'calc':
                try{
                    if(args.length === 1) return await socket.responderTexto(c, chatId, erroComandoMsg(command, botInfo) ,id)
                    let usuarioExpressaoMatematica = textoRecebido.slice(6).trim()
                    await api.Gerais.obterCalculo(usuarioExpressaoMatematica).then(async ({resultado})=>{
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.utilidades.calc.resposta, resultado), id)
                    }).catch(async (err)=>{
                        if(!err.erro) throw err
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_api, command, err.erro) , id)
                    })
                } catch(err){
                    throw err
                }
                break

                case 'cotacao':
                    try {
                        if (args.length < 2) {
                            return await socket.responderTexto(c, chatId, 'Uso incorreto! Utilize o comando da seguinte forma: cotacao <ativo>', id);
                        }
                        const ativo = args[1].toUpperCase(); // Obtém o ativo do segundo argumento
                        const resultado = await api.Gerais.obterCotacao(ativo);
                
                        if (resultado) {
                            const resposta = criarRespostaCotacao(resultado, ativo);
                            await socket.responderTexto(c, chatId, resposta, id);
                        } else {
                            await socket.responderTexto(c, chatId, 'Não foi possível obter a cotação no momento.', id);
                        }
                    } catch (err) {
                        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_comando_codigo, command), id);
                        consoleErro(err, "UTILIDADES");
                    }
                    break
                
                
                
        }
    } catch(err){
        await socket.responderTexto(c, chatId, criarTexto(msgs_texto.geral.erro_comando_codigo, command), id)
        err.message = `${command} - ${err.message}`
        consoleErro(err, "UTILIDADES")
    }
    

}