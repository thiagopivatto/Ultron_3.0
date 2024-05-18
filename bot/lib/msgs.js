export const obterMensagensTexto = (botInfo)=>{
    let {prefixo, nome_adm, nome_bot} = botInfo
    return {
        inicio:{
            inicializando: 'Inicializando o BOT na versão v{p1}...',
            arquivos_criados: "✓ Seus arquivos necessários foram criados, inicie o bot novamente.",
            dados_bot: "✓ Obteve dados do BOT",
            servidor_iniciado: '✓ Servidor iniciado!',
            grupos_carregados: '✓ Todos os grupos foram carregados e atualizados.',
        },
        geral: {
            dono_cadastrado: `✅ Seu número foi cadastrado como DONO, agora você pode utilizar os comandos de ${prefixo}admin`,
            espera : "[AGUARDE] Em andamento ⏳ espere por favor.",
            usuario_novo: "[ 🤖 Boas Vindas ao {p1} 🤖]\n\n"+
            `👋 Olá {p2}, vi que você é um usuário novo para abrir o menu de comandos digite *${prefixo}menu*`,
            min_membros: "O grupo precisa de no mínimo {p1} para o bot ser convidado.`",
            entrada_grupo: "Saudações *{p1}* , se tiverem alguma dúvida só digitar "+`*${prefixo}menu*`,
            sem_ligacoes: "[❗] Não posso receber ligações, você sera bloqueado. Se ligou por acidente fale com o dono do bot.",
            comando_invalido: "[❗] Parece que você não digitou corretamente o comando ou não sabe como usá-los, digite o comando "+`*${prefixo}menu*`+" para mais informações.",
            cmd_erro: "[❗] Ops, parece que você usou o comando *{p1}* incorretamente ou não sabe como utilizá-lo. Quer aprender a usar?\n\n Digite :\n  - Ex: *{p2} guia* para ver o guia.",
            erro_comando_codigo: "[❗] Houve um erro no comando *{p1}*, relate ao administrador ou tente novamente mais tarde.",
            erro_api : "[❗] Houve um erro no comando *{p1}*.\n\n"+
            "Motivo: *{p2}*\n",
            resposta_ban : "🤖✅ Entendido, +{p1} será banido.\n\n"+
            "Motivo : {p2}\n"+
            "Quem baniu : {p3}",
            fila_comando: "⏳ O bot está atendendo muitas pessoas ao mesmo tempo, tenha paciência!\n\n"+
            "Atualmente existem *{p1}* comandos na fila de espera.",
            desconectado:{
                comando: "A conexão com o WhatsApp foi encerrada pelo comando do Administrador.",
                falha_grave: "A conexão com o WhatsApp foi encerrada devido a uma falha grave no código.",
                deslogado: "A sua sessão com o WhatsApp foi deslogada, leia o código QR novamente.",
                reiniciar: "A sua conexão com o WhatsApp precisa ser reiniciada, tentando reconectar...",
                conexao: "A sua conexão com o WhatsApp foi encerrada, tentando reconectar... Motivo : {p1} - {p2}"
            }
        },
        info: {
            ajuda:{
                resposta_comum: "Olá, *{p1}*\n"+
                "Tipo de Usuário : *{p2}*\n",
                //"Comandos feitos : *{p3}*\n",
                resposta_limite_diario: "Olá, *{p1}*\n"+
                "Limite diário : *{p2}/{p3}*\n"+
                "Tipo de Usuário : *{p4}*\n"+
                "Comandos feitos : *{p5}*\n"
            },
            info:{
                resposta: "*Criador do Bot* : {p1}\n"+
                "*Nome do bot* : {p2}\n"+
                "*Online desde* : {p3}\n"+
                "*Comandos executados* : {p4}\n"+
                "*Contato do criador* : wa.me/{p5}\n"+
                "*Versão atual* : {p6}\n"+
                "*GitHub* : https://github.com/victorsouzaleal/lbot-whatsapp\n"
            },
            meusdados:{
                resposta_geral: "[🤖*SEUS DADOS DE USO*🤖]\n\n"+
                "Tipo de usuário : *{p1}*\n"+
                "Nome : *{p2}*\n"+
                "Total de comandos usados : *{p3}* comandos\n",
                resposta_limite_diario: "Comandos usados hoje : *{p1}/{p2}*\n"+
                "Limite diário : *{p3}*\n",
                resposta_grupo: "Mensagens neste grupo : *{p1}* mensagens\n",
            },
            reportar:{
                sucesso: `✅ Obrigado, seu problema foi reportado com sucesso e será analisado pelo dono.`,
                erro: '[❗] Não foi possível enviar a mensagem para o dono, pois ele ainda não está cadastrado.',
                resposta: "[ 🤖 REPORTAR ⚙️]\n\n"+
                "*Usuário* : {p1}\n"+
                "*Contato* : http://wa.me/{p2}\n"+
                "*Problema* : {p3}\n"
            }
        },
        figurinhas: {
            sticker:{
                erro_sgif : '[❗] O Whatsapp tem um limite de 1MB por sticker, dimunua seu video ou escolha algum outro.\n\n'+
                '*Obs*:Se o erro persistir o servidor de criação de stickers deve estar em manutenção.',
                erro_s: "[❗] Houve um problema no processamento de stickers, tente novamente mais tarde.\n\n"+
                "*Obs*:Se o erro persistir o servidor de criação de stickers deve estar em manutenção.",
                erro_conversao: "[❗] Houve um problema de conversão de mídia, ou esta mídia não pode ser convertida.",
                link_invalido : '[❗] O link que você enviou não é válido.',
                ssf_imagem: `[❗] Este comando é válido apenas para imagens.`,
                ssf_espera: `[AGUARDE] 📸 O fundo da imagem está sendo removido e o sticker será enviado em breve.`,
                video_invalido : '[❗] Envie um video/gif com no máximo 8 segundos.',
                erro_remover: '[❗] Houve um erro ao remover fundo, verifique se a imagem é compatível.',
                indisponivel: '[❗] Este comando está indisponível no momento, tente novamente mais tarde.'
            },
            tps:{
                erro_conversao: "[❗] Houve algum erro na conversao do "+`*${prefixo}tps*`+", verifique se não há emojis no seu texto.",
                texto_longo : "[❗] Texto é muito longo, no máximo 40 caracteres. ",
                espera: "⏳ Em andamento , estou transformando seu texto em sticker."
            },
            atps:{
                erro_conversao: "[❗] Houve algum erro na conversao do "+`*${prefixo}atps*`+", verifique se não há emojis no seu texto.",
                texto_longo : "[❗] Texto é muito longo, no máximo 40 caracteres. ",
                espera: "⏳ Em andamento , estou transformando seu texto em sticker animado."
            },
        },
        downloads: {
            play:{
                espera: "[AGUARDE] 🎧 Sua música está sendo baixada e processada.\n\n"+
                "Titulo: *{p1}*\n"+
                "Duração: *{p2}*",
                limite: "[❗] A música deve ter menos de *20 minutos*",
                nao_encontrado: "[❗] Video não encontrado, digite o nome do video com mais detalhes",
                erro_enviar: "[❗] Houve um erro ao enviar o áudio",
                erro_live: "[❗] Houve um erro de download, o bot não aceita download de lives.",
                erro_pesquisa: "[❗] Houve um erro na pesquisa de videos, verifique se o video existe, não tem restrição de idade ou precisa estar logado.",
                erro_download: "[❗] Houve um erro no download da música, tente novamente mais tarde."
            },
            yt:{
                espera: "[AGUARDE] 🎥 Seu video está sendo baixado e processado.\n\n"+
                "Titulo: *{p1}*\n"+
                "Duração: *{p2}*",
                nao_encontrado: "[❗] Video não encontrado, digite o nome do video com mais detalhes",
                limite: "[❗] O video deve ter menos de *20 minutos*",
                erro_link: "[❗] Houve um erro no servidor para obter link de download",
                erro_pesquisa: "[❗] Houve um erro na pesquisa de videos, verifique se o video existe, não tem restrição de idade ou precisa estar logado.",
                erro_live: "[❗] Houve um erro de download, o bot não aceita download de lives.",
                erro_download: "[❗] Houve um erro no download de mídias do Youtube, tente novamente mais tarde."
            },
            fb: {
                espera: "[AGUARDE] 🎬 Sua mídia está sendo baixada e processada.\n\n"+
                "Titulo: *{p1}*\n"+
                "Duração: *{p2}*",
                limite: "[❗] O video deve ter menos de *3 minutos*",
                erro_download: "[❗] Houve um erro no download de mídias do Facebook, verifique se o seu link está correto ou tente mais tarde.\n\n"+
                "*Obs*: Este comando só suporta apenas posts de video públicos do Facebook e que não seja de algum grupo.",
            },
            ig: {
                espera: "[AGUARDE] 🎬 Sua mídia está sendo baixada e processada.",
                nao_encontrado: "[❗] Mídia não encontrada, se o numero do video selecionado está correto e existe.",
                erro_download: "[❗] Houve um erro no download de mídia do Instagram, tente novamente mais tarde.\n\n"+
                "*Obs*: Verifique se o link está correto e nesse formato: https://www.instagram.com/p/abcde1234/.",
            },
            tk: {
                espera: "[AGUARDE] 🎬 Sua mídia está sendo baixada e processada.\n\n"+
                "Perfil: *@{p1}*\n"+
                "Descrição: *{p2}*\n",
                nao_encontrado: "[❗] Mídia não encontrada, verifique se o link está correto e que o video seja público.",
                erro_download: "[❗] Houve um erro no download de mídias do Tiktok, tente novamente mais tarde.\n\n"+
                "*Obs*: Verifique se o seu link está correto e que ele seja de um video do Tiktok."
            },
            tw:{
                espera: "[AGUARDE] 🎬 Sua mídia está sendo baixada e processada.",
                nao_encontrado: "[❗] Mídia não encontrada, verifique o link.",
                erro_pesquisa: "[❗] Houve um erro no servidor de pesquisa de mídias do Twitter.",
                erro_download: "[❗] Houve um erro no download de mídias do Twitter, tente novamente mais tarde."
            },
            img : {
                tema_longo : '[❗] Tema da imagem é muito longo',
                tema_vazio : '[❗] Tu é idiota, cadê o tema da imagem?',
                qtd_imagem : '[❗] Essa quantidade de imagens não é válida (Min: 1 imagem / Máx: 5 imagens)',
                erro_imagem: '[❗] Não foi possível obter essa imagem.',
                nao_encontrado: '[❗] Não foi possível encontrar imagem com esse tema, tente novamente.',
                erro_api: "[❗] Houve um erro na API de pesquisa de imagens, verifique se você não excedeu o limite ou se sua chave está configurada."
            }
        },
        utilidades:{
            chat:{
                resposta: "{p1}"
            },
            criarimg:{
                espera: '[AGUARDE] 📸 Sua imagem está sendo gerada pela IA, pode levar entre 20-40s.',
            },
            rbg:{
                invalido: "[❗] Este comando só funciona com IMAGENS.",
                espera: "[AGUARDE] 📸 O fundo da imagem está sendo removido.",
            },
            tabela:{
                resposta: "🤖 Tabela de Nicks :\n\n"+
                "{p1}"
            },
            rastreio:{
                codigo_invalido : '[❗] Código de rastreio deve ter 13 digitos.',
                nao_postado : '[❗] Parece que este objeto ainda *não foi postado* ou *não existe*',
                erro_servidor : '[❗] *Houve um erro na API dos Correios*',
                resposta_titulo: "📦📦*RASTREIO*📦📦\n\n",
                resposta_itens: "Status : {p1}\n"+
                "Data : {p2}\n"+
                "Hora : {p3}\n"+
                "{p4}\n"
            },
            audio: {
                erro_conversao: "[❗] Houve um erro na conversão de audio"
            },
            ouvir:{
                erro_limite: "[❗] Houve um erro na transcrição, o áudio ultrapassa *1m30s*",
                erro_transcricao: "[❗] Houve um erro na transcrição do áudio, tente novamente mais tarde.",
                sucesso: "🔤 Transcrição de áudio :\n\n"+
                "-- {p1}"
            },
            qualmusica:{
                espera: "⏳ Em andamento , estou procurando sua música.",
                nao_encontrado: "[❗] Não foi encontrada uma música compatível.",
                limite_excedido: "[❗] Você excedeu o limite do ACRCloud, crie uma nova chave no site.",
                erro_servidor: "[❗] Houve um erro no servidor do ACRCloud, tente novamente mais tarde",
                erro_chave: "Erro na conexão com a API ACRCloud ou sua chave ainda não está configurada para usar este comando.",
                erro_conversao: "[❗] Houve de conversão, este comando funciona apenas com *AUDIO/VIDEO*.",
                resposta: "💿 Reconhecimento de Música\n\n"+
                "Título: *{p1}*\n"+
                "Produtora: {p2}\n"+
                "Duração : *{p3}*\n"+
                "Lançamento: *{p4}*\n"+
                "Album: *{p5}*\n"+
                "Artistas: *{p6}*\n",
            },
            anime:{
                espera: "⏳ Estou processando a imagem e pesquisando o anime.",
                similaridade: "[❗] Nível de similaridade é muito baixo, certifique se enviar uma cena VÁLIDA de anime (Não funciona com imagens não oficiais, Wallpapers ou imagens recortadas e/ou baixa qualidade).",
                limite_solicitacao: "[❗] Muitas solicitações sendo feitas, tente novamente mais tarde.",
                sem_resultado: "[❗] Não foi possível achar resultados para esta imagem",
                resposta: "〘 Pesquisa de anime 〙\n\n"+
                "Título: *{p1}*\n"+
                "Episódio: {p2}\n"+
                "Tempo da cena: *{p3} - {p4}*\n"+
                "Similaridade: *{p5}%*\n"+
                "Prévia : {p6}",
                erro_servidor: "[❗] Houve um erro no servidor de pesquisa de animes.",
                erro_processamento: "[❗] Houve um erro no processamento da imagem"
            },
            animelanc:{
                erro_pesquisa: "[❗] Houve um erro na API de pesquisa de animes, tente novamente mais tarde.",
                resposta_titulo: "[🇯🇵 Lançamentos atuais de animes 🇯🇵]\n\n",
                resposta_itens: "Nome : *{p1}*\n"+
                "Episódio : *{p2}*\n"+
                "Link : {p3}\n\n"
            },
            voz : {
                texto_vazio : '[❗] Tu é idiota, cadê o texto do comando?',
                texto_longo: '[❗] Texto muito longo.',
                erro_audio: "[❗] Houve um erro na criação do áudio",
                nao_suportado: "[❗] Sem dados do idioma ou idioma não suportado. Atualmente suportamos :\n\n"+
                // pt", 'en', 'ja', 'es', 'it', 'ru', 'ko', 'sv', 'de', 'fr', 'nl', 'pl', 'tr', 'zh', 'fi
                `- 🇧🇷 Português - ${prefixo}voz pt\n`+
                `- 🇺🇸 Inglês - ${prefixo}voz en\n`+
                `- 🇯🇵 Japonês - ${prefixo}voz ja\n`+
                `- 🇮🇹 Italiano - ${prefixo}voz it\n`+
                `- 🇪🇸 Espanhol - ${prefixo}voz es\n`+
                `- 🇷🇺 Russo - ${prefixo}voz ru\n`+
                `- 🇰🇷 Coreano - ${prefixo}voz ko\n`+
                `- 🇸🇪 Sueco - ${prefixo}voz sv\n`+
                `- 🇩🇪 Alemão - ${prefixo}voz de\n`+
                `- 🇫🇷 Francês - ${prefixo}voz fr\n`+
                `- 🇨🇳 Chinês - ${prefixo}voz zh\n`+
                `- 🇫🇮 Finlandês - ${prefixo}voz fi\n`+
                `- 🇳🇱 Holandês - ${prefixo}voz nl\n`+
                `- 🇵🇱 Polonês - ${prefixo}voz pl\n`+
                `- 🇹🇷 Turco - ${prefixo}voz tr\n`
            },
            traduz: {
                erro_servidor: '[❗] Houve um erro de resposta do servidor de tradução.',
                nao_suportado: "[❗] Sem dados do idioma ou idioma não suportado. Atualmente suportamos :\n\n"+
                `- 🇧🇷 Português - ${prefixo}traduz pt\n`+
                `- 🇺🇸 Inglês - ${prefixo}traduz en\n`+
                `- 🇯🇵 Japonês - ${prefixo}traduz ja\n`+
                `- 🇮🇹 Italiano - ${prefixo}traduz it\n`+
                `- 🇪🇸 Espanhol - ${prefixo}traduz es\n`+
                `- 🇷🇺 Russo - ${prefixo}traduz ru\n`+
                `- 🇰🇷 Coreano - ${prefixo}traduz ko\n`+
                `- 🇸🇪 Sueco - ${prefixo}traduz sv\n`+
                `- 🇩🇪 Alemão - ${prefixo}traduz de\n`+
                `- 🇫🇷 Francês - ${prefixo}traduz fr\n`+
                `- 🇨🇳 Chinês - ${prefixo}traduz zh\n`+
                `- 🇫🇮 Finlandês - ${prefixo}traduz fi\n`+
                `- 🇳🇱 Holandês - ${prefixo}traduz nl\n`+
                `- 🇵🇱 Polonês - ${prefixo}traduz pl\n`+
                `- 🇹🇷 Turco - ${prefixo}traduz tr\n`,
                resposta: "🔠 *Resposta - Tradução* 🔠 :\n\n"+
                "*Texto*: {p1}\n\n"+
                "*Tradução* : {p2}"
            },
            noticia:{
                indisponivel: "[❗] Este comando está indisponível no momento.",
                erro_servidor: '[❗] Houve um erro na API de notícias, verifique se a chave API está configurada corretamente.',
                resposta_titulo: "〘🗞️ ULTIMAS NOTÍCIAS 〙\n\n",
                resposta_itens: "➥ 📰 *{p1}* \n"+
                "Publicado por *{p2}* há *{p3}*\n"+
                "*Link* : {p4}\n\n"
            },
            ddd:{
                somente_br: "[❗] Esse comando só é aceito com números brasileiros.",
                nao_encontrado: "[❗] Este DDD não foi encontrado, certifique-se que ele é válido.",
                erro_servidor: "[❗] Houve um erro para obter dados sobre este DDD, tente novamente mais tarde.",
                resposta: "📱 Estado : *{p1}* / Região : *{p2}*"
            },
            clima:{
                erro_resultado : "[❗] Local não encontrado ou houve um erro na API.\n\n"+
                "Dica: *Digite cidade e estado completos para maior chance de ser encontrado.*",
                erro_comando:"[❗] Local não encontrado ou houve um erro na API.",
                resposta: "☀️ CONSULTA DE CLIMA ☀️\n\n"+
                "{p1}"
            },
            encurtar:{
                resposta : "✂️ ENCURTADOR DE LINKS ✂️\n\n"+
                "*Link :* {p1}\n"
            },
            upimg:{
                resposta : "🖼️ UPLOAD DE IMAGEM 🖼️\n\n"+
                "*Link :* {p1}\n"
            },
            filmes:{
                resposta : "🎬 TÊNDENCIAS DE FILMES 🎬\n\n"+
                "{p1}\n"
            },
            series:{
                resposta : "📺 TÊNDENCIAS DE SÉRIES 📺\n\n"+
                "{p1}\n"
            },
            letra:{
                erro_servidor: "[❗] Houve um erro na pesquisa de letras, tente novamente mais tarde.",
                sem_resultados: "[❗] Não foram encontrados resultados para esta música.",
                resposta : "🎼 LETRA DE MÚSICA 🎼\n\n"+
                "Música : *{p1}*\n"+
                "Artista : *{p2}*\n\n"+
                "{p3}"
            },
            moeda:{
                nao_suportado: "[❗] Moeda não suportada, atualmente existe suporte para : real|dolar|euro",
                valor_invalido: "[❗] O valor não é um número válido",
                valor_limite: "[❗] Quantidade muito alta, você provavelmente não tem todo esse dinheiro.",
                erro_servidor: "[❗] Houve um erro na API de conversão de moedas",
                resposta_completa: "💵 Conversão - *{p1} {p2}*\n"+
                "{p3}",
                resposta_item:"----------------------------\n"+ 
                "*Conversão* : {p1}\n"+
                "*Valor convertido* : *{p2}* {p3}\n"+
                "*Última atualização* : {p4}\n\n"
            },
            pesquisa: {
                erro_servidor: "[❗] Houve um erro na API de pesquisa",
                sem_resultados: "[❗] Não foi encontrado resultados para esta pesquisa.",
                resposta_titulo: "🔎 Resultados da pesquisa de : *{p1}*🔎\n\n",
                resposta_itens: "🔎 {p1}\n"+
                "*Link* : {p2}\n\n"+
                "*Descrição* : {p3}\n\n"
            },
            calc:{
                carac_invalidos: "[❗] Seu cálculo tem caracteres inválidos.",
                divisao_zero: "🧮 Para de ficar tentando dividir por 0 , seu mongol.",
                erro_calculo: "[❗] Houve um erro no cálculo",
                resposta: "🧮 O resultado é *{p1}* "
            }
        },
        grupo: {
            regras:{
                sem_descrição: "[❗] O grupo ainda não tem uma descrição."
            },
            bemvindo:{
                ligado: "✅ O recurso de boas vindas foi ativado com sucesso",
                desligado: "✅ O recurso de boas vindas foi desativado com sucesso",
                mensagem: "👋 Olá, @{p1}\n"+
                "Seja bem vindo(a) ao grupo *{p2}*\n\n"+
                "{p3}"+
                "Digite "+`*${prefixo}menu*`+" para ver os comandos."
            },
            status:{
                resposta_titulo: "[ 🤖 STATUS DO GRUPO 🤖 ]\n\n",
                resposta_variavel: {
                    bemvindo:{
                        on: "- Recurso Boas Vindas : ✅\n",
                        off: "- Recurso Boas Vindas : ❌\n"
                    },
                    mutar:{
                        on: "- Recurso Mutar : ✅\n",
                        off: "- Recurso Mutar : ❌\n"
                    },
                    autosticker:{
                        on: "- Recurso Auto-Sticker : ✅\n",
                        off: "- Recurso Auto-Sticker : ❌\n"
                    },
                    antilink:{
                        on: "- Recurso Anti-Link : ✅\n",
                        off: "- Recurso Anti-Link : ❌\n"
                    },
                    antifake:{
                        on: "- Recurso Anti-Fake : ✅\n"+
                        "   - *Liberados* : {p1}\n",
                        off: "- Recurso Anti-Fake : ❌\n"
                    },
                    antiflood:{
                        on: "- Recurso Anti-Flood : ✅\n"+
                        "   - Máx: *{p1}* msgs / *{p2}* s \n",
                        off: "- Recurso Anti-Flood : ❌\n"
                    },
                    contador:{
                        on: "- Recurso Contador : ✅\n"+
                        "   - {p1}\n",
                        off: "- Recurso Contador : ❌\n"
                    },
                    bloqueiocmds:{
                        on: "- Bloqueio de comandos : ✅\n"+
                        "   - *{p1}*\n",
                        off: "- Bloqueio de comandos : ❌\n"
                    },
                    listanegra: "- Lista Negra : *{p1}*\n"
                }
            },
            fotogrupo: {
                sucesso: "🤖✅ A foto do GRUPO foi alterada com sucesso.",
                erro: "[❗] Não foi possivel alterar a foto do GRUPO."
            },
            blista: {
                sucesso: "✅ O número desse usuário foi adicionado á lista negra e será banido do grupo caso ainda esteja aqui.",
                numero_vazio: "[❗] O número do usuário está vazio.",
                bot_erro: "[❗] Calma, você não pode adicionar o BOT a lista negra.",
                admin_erro: "[❗] Calma, você não pode adicionar um ADMINISTRADOR a lista negra.",
                ja_listado: "[❗] Este usuário já está na lista negra.",
            },
            dlista: {
                sucesso: "✅ O número desse usuário foi removido da lista negra.",
                numero_vazio: "[❗] O número do usuário está vazio.",
                nao_listado: "[❗] Este usuário não está na lista negra.",
            },
            listanegra: {
                motivo: "Banido por estar na LISTA NEGRA",
                lista_vazia: "🤖 Não existe usuários na lista negra deste grupo.",
                resposta_titulo: "╔══✪〘❌ Lista Negra 〙✪══\n╠\n",
                resposta_itens: "╠➥ +{p1}\n"
            },
            antilink:{
                motivo: "Banido pelo ANTI-LINK",
                detectou: "🤖 Ei @{p1}, o ANTI-LINK está ativado e um possível link foi detectado na sua mensagem, ela foi apagada por segurança.",
                ligado: "✅ O recurso de ANTI-LINK foi ativado com sucesso",
                desligado: "✅ O recurso de ANTI-LINK foi desativado com sucesso"
            },
            autosticker:{
                ligado: "✅ O recurso de AUTO-STICKER foi ativado com sucesso",
                desligado: "✅ O recurso de AUTO-STICKER foi desativado com sucesso"
            },
            antifake:{
                motivo: "Banido pelo ANTI-FAKE",
                ligado: "✅ O recurso de ANTI-FAKE foi ativado com sucesso",
                desligado: "✅ O recurso de ANTI-FAKE foi desativado com sucesso"
            },
            mutar:{
                ligado: "✅ O recurso de MUTAR GRUPO foi ativado com sucesso",
                desligado: "✅ O recurso de MUTAR GRUPO foi desativado com sucesso"
            },
            antiflood:{
                max: "[❗] Escolha um valor entre 5-20 mensagens para o anti-flood.",
                intervalo: "[❗] Escolha um valor entre 10-60 segundos para o intervalo do anti-flood.",
                motivo: "Banido pelo ANTI-FLOOD",
                ligado: "✅ O recurso de ANTI-FLOOD foi ativado para *{p1}* mensagens a cada *{p2}* segundos.",
                desligado: "✅ O recurso de ANTI-FLOOD foi desativado com sucesso"
            },
            add:{
                add_erro: "[❗] O número +{p1} não pode ser adicionado. Provavelmente está com privacidade ativada, já está no grupo ou o grupo não aceita mais membros.",
                numero_invalido: "[❗] Houve um erro em adicionar o número {p1}, verifique se o número existe ou tente tirar o 9.",
                saiu_recente: "[❗] O número +{p1} não pode ser adicionado, ele saiu recentemente do grupo.",
                nao_contato : "[❗] O número +{p1} não pode ser adicionado, o BOT nunca teve contato com este usuário antes.",
                grupo_cheio: "[❗] O número +{p1} não pode ser adicionado, provavelmente o grupo está cheio.",
                membro_grupo: "[❗] O número +{p1} não pode ser adicionado, ele já está no grupo.",
                com_privacidade: "[❗] O número +{p1} não pode ser adicionado, ele está com privacidade ativada apenas para contatos."
            },
            banir:{
                banir_admin: "[❗] O bot não pode banir um administrador",
                motivo: "Banimento manual",
                banir_erro: "[❗] Não foi possível banir este membro, provavelmente ele já saiu do grupo."
            },
            banirtodos:{
                banir_sucesso: '🤖✅ Todos banidos com sucesso.'
            },
            promover:{
                erro_bot: "[❗] O BOT não pode ser promovido por ele mesmo.",
                sucesso_usuario: "➥ @{p1} virou *ADMINISTRADOR*.\n",
                erro_usuario: "➥ @{p1} já é um *ADMINISTRADOR*.\n",
                resposta: "[👤 PROMOVER MEMBROS 👤]\n\n"+
                "{p1}"
            },
            rebaixar:{
                erro_bot: "[❗] O BOT não pode ser rebaixado por ele mesmo.",
                sucesso_usuario: "➥ @{p1} virou *MEMBRO*.\n",
                erro_usuario: "➥ @{p1} já é um *MEMBRO*.\n",
                resposta: "[👤 REBAIXAR MEMBROS 👤]\n\n"+
                "{p1}"
            },
            contador:{
                ligado: "✅ O recurso de CONTADOR foi ligado com sucesso",
                desligado: "✅ O recurso de CONTADOR foi desligado com sucesso",
                recarregar_contagem: "✓ Todas as contagens foram recarregadas e novos membros foram adicionados/removidos.",
                grupo_nao_registrado: "O grupo {p1} ainda não está registrado"
            },
            atividade:{
                erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
                bot_erro: "[❗] Não é possível ver a atividade do bot.",
                fora_grupo: "[❗] Não é possível ver a atividade de quem não está no grupo.",
                resposta: "🤖 *Atividade do usuário* 🤖\n\n"+
                "📱 *Total de mensagens* : {p1}\n"+
                "═════════════════\n"+
                "🔤 Textos enviados : {p2}\n"+
                "📸 Imagens enviadas : {p3}\n"+
                "🎥 Videos enviados : {p4}\n"+
                "🖼️ Figurinhas enviadas : {p5}\n"+
                "🎧 Aúdios enviados : {p6}\n"+
                "🧩 Outros : {p7}\n"
            },
            minativos:{
                erro_qtd: "[❗] A quantidade mínima de mensagens não é um número válido.",
                limite_qtd: "[❗] A quantidade mínima de mensagens deve ser entre [1-50]",
                erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
                sem_inativo: "✅ Não existe membros inativos neste grupo.",
                resposta_titulo: "╔══✪〘🤖 Marcando todos que tem menos de {p1} mensagens〙\n\n"+
                "👤 *Membros inativos* : {p2}\n",
                resposta_itens: "╠➥ @{p1} - *{p2}* Msgs\n"
            },
            binativos:{
                erro_qtd: "[❗] A quantidade mínima de mensagens não é um número válido.",
                limite_qtd: "[❗] A quantidade mínima de mensagens deve ser entre 1 e 50",
                erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
                sucesso: "🤖✅ {p1} Membros com menos de {p2} mensagens foram banidos.",
                sem_inativo: "✅ Não existem membros inativos válidos para serem banidos."
            },
            topativos:{
                erro_qtd: "[❗] A quantidade de pessoas não é um número válido.",
                limite_qtd: "[❗] A quantidade de pessoas deve ser entre 1 e 50",
                erro_contador: "[❗] Este comando só funciona quando o contador está ativado.",
                resposta_titulo: "╔══✪〘🏆 TOP {p1} ATIVOS 🏆 〙\n╠\n",
                resposta_itens: "╠➥ {p1} {p2}° Lugar @{p3} - *{p4}* Msgs\n"
            },
            enquete:{
                min_opcao: "[❗] A enquete precisa de no mínimo 2 opçôes",
                aberta: "✅ A enquete foi aberta com sucesso",
            },
            bcmd:{
                resposta_titulo: "[🤖 *Bloquear comandos* 🤖]\n\n",
                resposta_variavel: {
                    ja_bloqueado: "- Comando *{p1}* já está bloqueado.\n",
                    bloqueado_sucesso: "- Comando *{p1}* bloqueado com sucesso.\n",
                    erro : "- Comando *{p1}* não pode ser bloqueado.\n",
                    nao_existe: "- Comando *{p1}* não existe.\n"
                },
                resposta_cmd_bloqueado : "[❗] O comando *{p1}* está temporariamente bloqueado neste grupo pelo administrador."
            },
            dcmd:{
                resposta_titulo: "[🤖 *Desbloquear Comandos* 🤖]\n\n",
                resposta_variavel: {
                    desbloqueado_sucesso: "- Comando *{p1}* foi desbloqueado.\n",
                    ja_desbloqueado: "- Comando *{p1}* já esta desbloqueado ou nunca foi bloqueado.\n"
                }
            },
            link:{
                resposta: "〘 Grupo : *{p1}* 〙\n\n"+
                "- Link : {p2}"
            },
            adms:{
                resposta_titulo: "〘 🤖 Marquei os *{p1}* admins 〙\n\n",
                mensagem: "Mensagem: *{p1}* \n\n",
                resposta_itens: "➸ @{p1}\n",
            },
            mt:{
                resposta: "〘 🤖 Marquei os *{p1}* membros/admins 〙\n",
                resposta_motivo: "〘 🤖 Marquei os *{p1}* membros/admins 〙\n\n"+
                "Mensagem: *{p2}*\n"
            },
            mm:{
                resposta: "〘 🤖 Marquei os *{p1}* membros 〙\n",
                resposta_motivo: "〘 🤖 Marquei os *{p1}* membros 〙\n\n"+
                "Mensagem: *{p2}*\n",
                sem_membros: "[❗] Não existem membros comuns para serem marcados.\n",
            },
            dono:{
                resposta: "🤖 O Dono do grupo é : @{p1}",
                sem_dono: "🤖 O Dono do grupo teve o número banido ou cancelado."
            },
            apagar:{
                minha_msg: "[❗] Erro : O bot não pode apagar mensagem de outros membros.",
                nao_recente: "[❗] A mensagem que você quer apagar não é recente"
            },
            rlink:{
                erro: "[❗] Houve um erro na redefinição de link",
                sucesso : "✅ Link foi redefinido com sucesso"
            }
        },
        diversao: {
            simi:{
                resposta : `{p2}`,
                erro : `[❗] Houve um erro no SIMI e não foi possível obter a resposta.`
            },
            viadometro: {
                respostas: [' 0%\n\n - ESSE É MACHO ',
                '██                 20% \n\n - HMMMMM ',
                '████             40%\n\n - JÁ MAMOU O PRIMO',
                '██████         60%\n\n - EITA MAMOU O BONDE',
                '████████     80%\n\n - JÁ SENTOU EM ALGUEM',
                '██████████ 100%\n\n - BIXONA ALERTA VERMELHO CUIDADO COM SEUS ORGÃOS SEXUAIS'],
                apenas_um: "[❗] Erro: Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *VIADÔMETRO* - {p1}"
            },
            gadometro:{
                respostas : [' 0%\n\n - ESSE NÃO É GADO ',
                '🐃 20% \n\n - GADO APRENDIZ, TÁ NO CAMINHO ',
                '🐃🐃 40%\n\n - GADO INTERMEDIÁRIO, JÁ INVADE PV DE UMAS E PENSA EM PAGAR PACK DE PEZINHO',
                '🐃🐃🐃 60%\n\n - CUIDADO : GADO EXPERIENTE, INVADE PV E FALA LINDA EM TODAS FOTOS',
                '🐃🐃🐃🐃 80%\n\n - ALERTA : GADO MASTER, SÓ APARECE COM MULHER ON',
                '🐃🐃🐃🐃🐃 100%\n\n - PERIGO : GADO MEGA BLASTER ULTRA PAGA BOLETO DE MULHER QUE TEM NAMORADO'],
                apenas_um: "[❗] Erro: Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *GADÔMETRO* - {p1}"
            },
            bafometro:{
                respostas : [' 0%\n\n - ESTÁ SÓBRIO ',
                '🍺  20% \n\n - TOMOU UM GORÓZINHO ',
                '🍺🍺  40%\n\n - JÁ TÁ FICANDO MEIO CHAPADO E FALANDO BOSTA',
                '🍺🍺🍺  60%\n\n - TÁ MAMADO E COMEÇANDO A FAZER MERDA',
                '🍺🍺🍺🍺  80%\n\n - TÁ LOUCÃO NEM CONSEGUE DIFERENCIAR MULHER E HOMEM',
                '🍺🍺🍺🍺🍺  100%\n\n - ALERTA: ESTÁ FORA DE SI , BEIJANDO MENDIGO E CACHORRO DE RUA'],
                apenas_um: "[❗] Erro: Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *BAFÔMETRO* - {p1}"
            },
            jacometro:{
                respostas : [' 0%\n\n - NÃO É JACÓ ',
                '🤪  20% \n\n - É UM POUCO JACÓ ',
                '🤪🤪  40%\n\n - É QUASE UM JACÓ, TA NO CAMINHO',
                '🤪🤪🤪  60%\n\n - JACÓ BRABO, UMA LENDA QUE ESTÁ EVOLUINDO',
                '🤪🤪🤪🤪  80%\n\n - SUPER JACÓ OUVIDOR POWER METAL',
                '🤪🤪🤪🤪🤪  100%\n\n - O JACÓ MASTER, REI DA PARAÍBA E DONO DO UNIVERSO'],
                apenas_um: "[❗] Erro! Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *JACOMETRO* - {p1}"
            },
            bolametro:{
                respostas : [' 0%\n\n - PUTSA LA MISARIA',
                '\n⚽  10% \n\n - NOUSSA VÉIO',
                '\n⚽⚽  20%\n\n - ESSE TÁ SABENDO LEGAL',
                '\n⚽⚽⚽  30%\n\n - HAHAHAHAHAH SÓ 30%. EU VO EMBORA',
                '\n⚽⚽⚽⚽  40%\n\n - Ô BOLINHA, EU NUM VO FAZE',
                '\n⚽⚽⚽⚽⚽ 50%\n\n - HOJE EU PUXO 30 ANOS NO PRESIDENTE BERNARDES',
                '\n⚽⚽⚽⚽⚽⚽ 60%\n\n - TICARACATICA',
                '\n⚽⚽⚽⚽⚽⚽⚽ 70%\n\n - HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA QUEM BOTOU O DA LUA DO MEU LADO VÉIO',
                '\n⚽⚽⚽⚽⚽⚽⚽⚽ 80%\n\n - EU NUM VENHO AMANHÃ, SE FOR PRA SER MOTIVO DE CHACOTA, EU NUM VENHO',
                '\n⚽⚽⚽⚽⚽⚽⚽⚽⚽ 90%\n\n - AI AI AI AI..... ESTÁ ME DANDO UMA VONTADE DE METER DE LEVE',
                '\n⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽ 100%\n\n - HAHAHAHAHAHAHAHAHA PARABÉNS ZÉ!!! VAI SER PAI DE NOVO, BOA MILHAÇA!'],
                apenas_um: "[❗] Erro! Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *BOLAMETRO* - {p1}"
            },
            fernandometro:{
                respostas : [' 0%\n\n - Não é Fernandes',
                '\n🎸  20%\n\n - Curte Floyd Rose🤩',
                '\n🎸🎸  40%\n\n - Hmm.. deve ta usando trembolona',
                '\n🎸🎸🎸 60%\n\n - Sabe mais de 50 palavras em Tupiguarani',
                '\n🎸🎸🎸🎸 80%\n\n - Desaprova a Alicia no DF e odeia E-mails😡',
                '\n🎸🎸🎸🎸🎸 100%\n\n - aiN DaN vASco NaO mE rESpoNdE😭👌'],
                apenas_um: "[❗] Erro! Apenas um membro por vez deve ser mencionado.",
                resposta: "🧩 *FERNANDÔMETRO* - {p1}"
            },
            chance:{
                resposta: "🧩 *CHANCE* - Você tem *{p1}%* de chance {p2}"
            },
            detector: {
                espera: "⏳ Calibrando a máquina da verdade"
            },
            caracoroa:{
                espera: "🕹️ Lançando a moeda 🪙",
                resposta: {
                    vitoria: "🕹️ *VITÓRIA!* 🕹️\n\n"+
                    "O resultado caiu *{p1}*\n",
                    derrota: "🕹️ *DERROTA!* 🕹️\n\n"+
                    "O resultado caiu *{p1}*\n"
                }
            },
            ppt:{
                opcao_erro: "[❗] Você deve escolher entre *pedra*, *papel*  ou *tesoura*",
                resposta : {
                    vitoria: "🕹️ *VITÓRIA!* 🕹️\n\n"+
                    "Você escolheu {p1} e o bot escolheu {p2}\n",
                    derrota: "🕹️ *DERROTA!* 🕹️\n\n"+
                    "Você escolheu {p1} e o bot escolheu {p2}\n",
                    empate: "🕹️ *EMPATE!* 🕹️\n\n"+
                    "Você escolheu {p1} e o bot escolheu {p2}\n"
                }
            },
            roletarussa:{
                sem_membros: "[❗] Não existe membros válidos para participarem da roleta.",
                espera: "🎲 Sorteando uma vítima 🎲",
                motivo: "Selecionado pela roleta",
                resposta: "🔫 Você foi o escolhido @{p1}, até a próxima."
            },
            casal:{
                minimo: "[❗] Este comando precisa de no mínimo 2 membros no grupo.",
                resposta: "👩‍❤️‍👨 Está rolando um clima entre @{p1} e @{p2}"
            },
            top5:{
                erro_membros: "[❗] O grupo deve ter no mínimo 5 membros para usar este comando.",
                resposta_titulo: "╔══✪〘🏆 TOP 5 {p1} 🏆 〙\n╠\n",
                resposta_itens: "╠➥ {p1} {p2}° Lugar @{p3}\n"
            },
            top: {
                erro_qtd: "[❗] A quantidade de pessoas não é um número válido.",
                limite_qtd: "[❗] A quantidade de pessoas deve ser menor que 50",
                resposta_titulo: "╔══✪〘🏆 TOP {p1} {p2} 🏆 〙\n╠\n",
                resposta_itens: "╠➥ {p1} {p2}° Lugar @{p3}\n"
            },
            fch:{
                resposta: "🧩〘*FRASES CONTRA A HUMANIDADE*〙\n\n - {p1}",
                erro_servidor: "[❗] Houve um erro para obter as frases do servidor."
            },
            par:{
                respostas: [' *0%*\n - NÃO COMBINAM ',
                '❤️ *20%* \n - HMMM TALVEZ ',
                '❤️❤️ *40%*\n - PODE ROLAR ALGO SÉRIO', 
                '❤️❤️❤️ *60%*\n - UIA ESSES DOIS TEM FUTURO',
                '❤️❤️❤️❤️ *80%*\n - ESSES DOIS TEM QUÍMICA, TALVEZ UM CASAMENTO EM BREVE', 
                '❤️❤️❤️❤️❤️ *100%*\n - CASAL PERFEITO: PREPAREM-SE PARA VIVER ATÉ A VELHICE JUNTOS',
                ],
                resposta: "👩‍❤️‍👨 PAR - @{p1} & @{p2}\n\n{p3}"
            },
            trisal: {
                minimo: "[❗] Este comando precisa de no mínimo 3 membros no grupo.",
                resposta: "👩‍❤️‍👨 HMMM TRIÂNGULO AMOROSO FORMADO, A PEGAÇÃO TA ROLANDO ENTRE: \n@{p1}\n@{p2}\n@{p3}"
            },
            vod: {
                sem_membros: "[❗] Escolha alguém pra participar do jogo.",
                erro_servidor: "Erro em contatar a API",
                escolha: "[❗] Escolha um nível de verdade ou desafio entre 1 e 5.",
                escolhaVOD: "[❗] Escolha verdade ou desafio",
                resposta: "VERDADE OU DESAFIO\n\n"+
                "Nível:{p1}\n"+
                "{p2}"
            },
            // Respostas para Suno-AI, criador de músicas automáticas
            musica: {
                erro_servidor: "[❗] Houve um erro para obter a música do servidor.",
                resposta: "🎵 *{p1}* - {p2}\n"+
                "🎧 *{p3}*"
            }
        },
        admin: {
            entrar_grupo:{
                chave_invalida: "[❗] Sua chave é inválida, peça ao dono do BOT uma chave válida.",
                link_invalido: "[❗] Isso não é um link válido 👊🤬",
                entrar_erro : "[❗] Houve um erro para entrar nesse grupo, verifique se o link está correto.",
                maximo_grupos: "[❗] O bot já está com o número máximo de grupos.",
                pendente: "🤖 Não foi possivel entrar neste momento, o grupo provavelmente está com modo para administrador aceitar solicitação.",
                entrar_sucesso: "🤖✅ Entendido, entrarei em breve no grupo."
            },
            infocompleta:{
                resposta_superior:"*Administrador do Bot* : {p1}\n"+
                "*Nome do bot* : {p2}\n"+
                "*Online desde* : {p3}\n"+
                "*Versão* : {p4}\n"+
                "*GitHub* :https://github.com/thiagopivatto\n"+
                "-------------------\n",
                resposta_variavel:{
                    limite_diario: {
                        on: "*Limite diário* : ✅\n"+
                        "- Reseta em : *{p1}*\n"+
                        "-------------------\n",
                        off: "*Limite diário* : ❌\n"+
                        "-------------------\n"
                    },
                    autosticker: {
                        on: "*Auto-Sticker privado* : ✅\n"+
                        "-------------------\n",
                        off: "*Auto-Sticker privado* : ❌\n"+
                        "-------------------\n",
                    },
                    pvliberado: {
                        on: "*PV Liberado* : ✅\n"+
                        "-------------------\n",
                        off: "*PV Liberado* : ❌\n"+
                        "-------------------\n",
                    },
                    taxa_comandos:{
                        on: "*Taxa comandos/minuto* : ✅\n "+
                        "- *{p1}* Cmds/minuto por usuário\n"+
                        "- Bloqueio : *{p2}* s\n"+
                        "-------------------\n",
                        off: "*Taxa comandos/minuto* : ❌\n"+
                        "-------------------\n"
                    },
                    bloqueiocmds:{
                        on: "*Bloqueio de comandos* : ✅ *{p1}*\n"+
                        "-------------------\n",
                        off: "*Bloqueio de comandos* : ❌\n"+
                        "-------------------\n"
                    }
                },
                resposta_inferior:"*Pessoas bloqueadas* : *{p1}* pessoas\n"+
                "*Comandos executados* : *{p2}*\n"+
                "*Contato do Administrador* : wa.me/{p3}\n"
            },
            listablock:{
                resposta_titulo: "🤖 Esse é o total de pessoas bloqueadas \nTotal : {p1}\n",
                lista_vazia: "[❗] O bot não tem pessoas bloqueadas.",
                resposta_itens: "➸ +{p1}\n",
            },
            bloquear:{
                erro_dono: "[❗] O Usuário +{p1} é dono do BOT, não foi possivel bloquear.",
                ja_bloqueado: "[❗] O Usuário +{p1} já está *bloqueado*.",
                erro: "[❗] Não foi possível bloquear o usuário +{p1}, verifique se o número está correto e se o bot já teve contato com este usuário.",
                sucesso: "✅ O Usuário +{p1} foi *bloqueado* com sucesso"
            },
            desbloquear:{
                ja_desbloqueado: "[❗] O Usuário +{p1} já está *desbloqueado*.",
                sucesso: "✅ O Usuário +{p1} foi *desbloqueado* com sucesso"
            },
            fotobot: {
                sucesso: "🤖✅ A foto do BOT foi alterada com sucesso.",
                erro: "[❗] Não foi possivel alterar a foto do BOT."
            },
            desligar:{
                sucesso: "🤖✅ Entendido, o BOT será desligado"
            },
            bctodos:{
                anuncio: `[🤖 ${nome_bot}® - Mensagem para todos]\n\n`+
                "{p1}",
                espera: "⏳ Em andamento , estou enviando sua mensagem para {p1} contatos/grupos.\n\n"+
                "Tempo estimado : *{p2}* segundos",
                bc_sucesso: "🤖✅ Anúncio feito com sucesso."
            },
            usuarios: {
                nao_encontrado: "[❗] Não existem usuários com esse tipo ou você digitou um tipo inválido, confira os tipos disponíveis em "+`*${prefixo}tipos*`,
                resposta_titulo: "🤖 USUÁRIOS - {p1} ({p2})\n\n"+"{p3}",
                resposta_item: "-> {p1} +{p2} - {p3} cmds\n"
            },
            limpartipo:{
                erro: "[❗] O tipo de usuário que você inseriu é inválido, verifique os tipos disponíveis em "+`*${prefixo}tipos*`,
                sucesso: "✅Todos os usuários do tipo *{p1}* foram convertidos para *COMUM*"
            },
            mudarlimite: {
                invalido: "[❗] O número para definir o limite de comandos é inválido",
                tipo_invalido: "[❗] O tipo de usuário que você inseriu é inválido, verifique os tipos disponíveis em "+`*${prefixo}tipos*`,
                erro_limite_diario: "[❗] Este comando só pode ser usado com o "+`*${prefixo}limitediario*`+" ativado.",
                sucesso: "✅ O limite diário dos usuários do tipo *{p1}* foi definido para *{p2}* comandos/dia "
            },
            alterartipo: {
                tipo_dono: "[❗] Não é possivel alterar cargo do dono",
                tipo_invalido: "[❗] O tipo de usuário que você inseriu é inválido, verifique os tipos disponíveis em "+`*${prefixo}tipos*`,
                nao_registrado: "[❗] Este usuário ainda não está registrado",
                sucesso: "✅ O tipo desse usuário foi definido para {p1}"
            },
            bcmdglobal:{
                resposta_titulo: "[🤖 *Bloquear comandos - Global* 🤖]\n\n",
                resposta_variavel: {
                    ja_bloqueado: "- Comando *{p1}* já está bloqueado.\n",
                    bloqueado_sucesso: "- Comando *{p1}* bloqueado com sucesso.\n",
                    erro: "- Comando *{p1}* não pode ser bloqueado.\n",
                    nao_existe: "- Comando *{p1}* não existe.\n"
                },
                resposta_cmd_bloqueado : "[❗] O comando *{p1}* está indisponível no momento por ordem do administrador, tente novamente mais tarde."
            },
            dcmdglobal:{
                resposta_titulo: "[🤖 *Desbloquear Comandos - Global* 🤖]\n\n",
                resposta_variavel: {
                    desbloqueado_sucesso: "- Comando *{p1}* foi desbloqueado.\n",
                    ja_desbloqueado: "- Comando *{p1}* já esta desbloqueado ou nunca foi bloqueado.\n"
                }
            },
            autostickerpv:{
                desativado: "✅ O AUTO-STICKER em mensagens privadas foi desativado com sucesso",
                ativado: "✅ O AUTO-STICKER em mensagens privadas foi ativado com sucesso",
            },
            pvliberado:{
                desativado: "✅ Os comandos em MENSAGENS PRIVADAS foram desativados com sucesso.",
                ativado: "✅ Os comandos em MENSAGENS PRIVADAS foram ativados com sucesso."
            },
            limitediario:{
                qtd_invalida: "[❗] A quantidade de comandos por dia está inválida",
                ativado: "✅ O Limite diário de comandos foi ativado com sucesso",
                desativado: "✅ O Limite diário de comandos foi desativado com sucesso",
                resposta_excedeu_limite: "[❗] {p1} -> Você ultrapassou seu limite diário de comandos por dia.\n\n"+
                "Entre em contato com o dono para ver sua situação : https://wa.me/{p2}"
            },
            limitecomandos:{
                qtd_invalida: "[❗] A quantidade máxima de mensagens por minuto está inválida",
                tempo_invalido: "[❗] O tempo de bloqueio de mensagens está inválido",
                ativado: "✅ O Limitador de comandos por minuto foi ativado com sucesso",
                desativado: "✅ O Limitador de comandos por minuto foi desativado com sucesso",
                resposta_usuario_limitado: "[❗] Você está impossibilitado de mandar comandos por *{p1}* segundos, pega leve cara."
            },
            nomebot:{
                sucesso: "✅ O nome do bot foi alterado com sucesso.",
            },
            nomeadm:{
                sucesso: "✅ O nome do administrador foi alterado com sucesso.",
            },
            nomesticker:{
                sucesso: "✅ O nome do pacote de figurinhas foi alterado com sucesso.",
            },
            prefixo:{
                sucesso: "✅ O prefixo dos comandos foi alterado com sucesso.",
                nao_suportado: "[❗] Não suportado como prefixo, são suportados somente : ! # . *"
            },
            r: {
                sucesso: "✅ Os comandos diários desse usuário foram resetados",
                nao_registrado: "[❗] Este usuário ainda não está registrado",
                erro_limite_diario: "[❗] Este comando só pode ser usado com o "+`*${prefixo}limitediario*`+" ativado."
            },
            rtodos:{
                sucesso: "✅ Os comandos diários de todos os usuários foram resetados",
                erro_limite_diario: "[❗] Este comando só pode ser usado com o "+`*${prefixo}limitediario*`+" ativado."
            },
            verdados:{
                nao_registrado: "[❗] Este usuário ainda não está registrado",
                resposta_superior: "[🤖*VER DADOS DE USO*🤖]\n\n"+
                "Nome : *{p1}*\n"+
                "Tipo de usuário : *{p2}*\n"+
                "Número : *{p3}*\n",
                resposta_variavel: {
                    limite_diario: {
                        on:"Comandos usados hoje : *{p1}/{p2}*\n"+
                        "Limite diário : *{p3}*\n",
                        off: ""
                    }
                },
                resposta_inferior: "Total de comandos usados : *{p1}* comandos\n"
            },
            tipos: {
                resposta: "🤖 TIPOS DE USUÁRIOS :\n\n"+
                "{p1}",
                item_tipo: "{p1} - *{p2}* cmds/dia\n"
            },
            bcgrupos:{
                anuncio: `[🤖${nome_bot}® - Mensagem para os grupos]\n\n`+
                "{p1}",
                espera: "⏳ Em andamento , estou enviando sua mensagem para {p1} grupos.\n\n"+
                "Tempo estimado : *{p2}* segundos",
                bc_sucesso: "🤖✅ Anúncio feito com sucesso."
            },
            bccontatos:{
                anuncio: `[🤖${nome_bot}® - Mensagem para os contatos]\n\n`+
                "{p1}",
                espera: "⏳ Em andamento , estou enviando sua mensagem para {p1} contatos.\n\n"+
                "Tempo estimado : *{p2}* segundos",
                bc_sucesso: "🤖✅ Anúncio feito com sucesso."
            },
            grupos: {
                resposta_titulo: "🤖 GRUPOS ATUAIS ({p1})\n",
                resposta_itens: "----------------------------\n"+
                "*N° Grupo* : {p1}\n"+
                "*Nome* : {p2}\n"+
                "*Participantes* : {p3}\n"+
                "*Admins* : {p4}\n"+
                "*Bot é admin?* {p5}\n"+
                `*Link*: {p6}\n`
            },
            linkgrupo: {
                resposta: `🤖✅ O link para este grupo atualmente é : {p1}`,
                nao_admin: '[❗] Não foi possível obter o link desse grupo, o bot não é administrador deste grupo.',
                nao_encontrado: `[❗] Não foi possível obter o link desse grupo, o grupo não foi encontrado ou o número é inválido. Cheque o comando correto em *${prefixo}grupos*`,
            },
            sair:{
                resposta_grupo: "🤖✅ FLW VLW.",
                resposta_admin: "🤖✅ O bot saiu com sucesso do grupo escolhido.",
                nao_encontrado: `[❗] Não foi possível sair deste grupo, o grupo não foi encontrado ou o número é inválido. Cheque o comando correto em *${prefixo}grupos*`,
            },
            sairtodos:{
                resposta: "🤖✅ Saí de todos os grupos com sucesso, total de grupos : {p1}"
            },
            limpar:{
                limpar_sucesso : "🤖✅ Todos os chats foram limpos.",
            },
            estado:{
                sucesso: "🤖✅ Seu estado foi alterado com sucesso."
            },
            ping: {
                resposta: "🖥️ INFORMAÇÃO GERAL 🖥️\n\n"+
                "*OS*: {p1}\n"+
                "*CPU*: {p2}\n"+
                "*RAM*: {p3}GB/{p4}GB\n"+
                "*Resposta*: {p5}s\n"+
                "*Usuários cadastrados*: {p6}\n"+
                "*Grupos cadastrados*: {p7}\n"+
                "*Online desde*: {p8}"
            }
        },
        permissao: {
            grupo: '[❗] Este comando só pode ser usado em grupos',
            bot_admin: '[❗] Permita que o BOT tenha permissões administrativas.',
            banir_admin : '[❗] O Bot não tem permissão para banir um administrador',
            apenas_admin : '[❗] Apenas administradores podem usar este comando.',
            apenas_dono_bot: '[❗] Apenas o dono do BOT pode usar este comando',
            apenas_dono_grupo: '[❗] Apenas o dono do GRUPO pode usar este comando.',
        },
        tipos: {
            dono: "💻 Dono",
            comum : "👤 Comum",
            premium: "🌟 Premium",
            vip: "🎖️ VIP"
        },
        api: {
            newsapi: "Houve um erro na API de Notícias, confira se o limite gratuito da chave excedeu ou se ela está configurada."
        }
    }
}

