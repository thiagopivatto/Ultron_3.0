## REQUERIMENTOS :
- Um número de celular conectado ao WhatsApp para ler o QR Code e conectar o bot.
- Em sistemas **Windows/Linux** :<br>
        - Ter o [NODE VERSÃO LTS](https://nodejs.org/en/) instalado
- No **Termux** :<br>
        - Ter o [TERMUX](https://play.google.com/store/apps/details?id=com.termux&hl=pt_BR&gl=US) instalado no celular

<br>

## 1 - Instalação :

### Windows/Linux :

Faça o download da última versão lançada no seguinte link: https://github.com/victorsouzaleal/lbot-whatsapp/releases/latest , extraia o zip e entre na pasta do bot para os passos seguintes.

Abra o prompt de comando (terminal) **DENTRO DA PASTA DO PROJETO** e execute os comandos abaixo :

```bash
npm i -g yarn
```

Após terminar de instalar o yarn digite o comando abaixo para instalar as dependências do projeto :

```bash
yarn install
```

<br>

### Termux :
Para ver o guia de instalação no TERMUX :  [Clique AQUI](docs/TERMUX.md)

<br>

## 2 - Uso :

**Dentro da pasta do projeto** após ter realizado todos os passos anteriores, execute este comando. 

```bash
yarn start
```

Se for a sua primeira vez executando escaneie o QR Code com o seu celular.

<br>

## 3 - Funcionamento :
Após todos os passos anteriores feitos, seu bot já deve estar iniciando normalmente, use os comandos abaixo para visualizar os comandos disponíveis.
<br><br>
**!menu** - Dá acesso ao MENU PRINCIPAL.
<br>
**!admin** - Dá acesso ao MENU de ADMINISTRADOR/DONO DO BOT.
<br><br>
Todos os comandos agora tem um guia ao digitar **!comando guia**
<br><br>

### Pronto! Seu bot já está ONLINE, mas ainda não acabou continue lendo o próximo passo para configuração!!

<br>

## 4 - Configuração do bot e arquivo .env :

### Ao abrir o arquivo .env na raiz do projeto após iniciar o bot pela primeira vez ele vai se parecer com isso : </br>
        # CONFIGURAÇÃO DE API KEYS PARA COMANDOS

        # ACRCLOUD - Coloque abaixo suas chaves do ACRCloud (Reconhecimento de Músicas)
        acr_host=?????
        acr_access_key=?????
        acr_access_secret=?????

        # DEEPGRAM - Coloque abaixo sua chave do DEEPGRAM (Transcrição de aúdio para texto)
        dg_secret_key=??????

        # NEWSAPI- Coloque abaixo sua chave API do site newsapi.org (NOTICIAIS ATUAIS)
        API_NEWS_ORG=???

        # ALPHAVANTAGE - Coloque abaixo sua chave do AlphaVantage (Cotação de Ativos (B3, NASDAQ, NYSE e Criptomoedas)
        ALPHAVANTAGE_API_KEY=?????


#### Como configurar o ADMINISTRADOR :
Para usar as funções de **ADMINISTRADOR** digite **!admin** pela primeira vez ao iniciar ao BOT e ai seu número será cadastrado como dono.<br><br>
Pronto, agora você tem acesso aos comandos de **ADMIN**. Use **!nomebot**, **!nomeadm**, **!nomesticker** para personalizar o nome do seu bot em menus e em stickers, e veja todos os comandos de administrador com o **!admin**.

<br>

#### Como obter as chaves API para usar em comandos específicos :
Para usar comandos específicos como **!qualmusica** e **!ouvir** é necessário antes configurar as chaves de API no .env, abaixo tem um guia completo com imagens para obter as chaves.<br><br>
**Informações detalhadas sobre como obter as chaves do NewsAPI(Notícias), ACRCloud(Reconhecimento de Músicas) e DEEPGRAM (Áudio para texto)** :  [Clique AQUI](docs/CHAVESAPI.md)

<br>

## 5 - Recursos/Comandos :

### Figurinhas

| Criador de Sticker |                Recursos        |
| :-----------: | :--------------------------------: |
|       ✅       | Foto para Sticker |
|       ✅       | Video/GIF para Sticker |
|       ✅       | Sticker Circular (IMAGENS) |
|       ✅       | Texto para Sticker |
|       ✅       | Sticker sem fundo |
|       ✅       | Sticker para foto |
|       ✅       | Renomear Stickers |
|       ✅       | Auto Sticker |

### Downloads 

| Downloads      |                Recursos            |
| :------------: | :---------------------------------------------: |
|       ✅        |   Download de aúdio/videos (Youtube)    |
|       ✅        |   Download de videos (Facebook)            |
|       ✅        |   Download de imagens/videos (Instagram)  |
|       ✅        |   Download de imagens/videos (Twitter)            |
|       ✅        |   Download de videos (Tiktok)            |
|       ✅        |   Pesquisa/Download de Imagens                  |

### Utilidades Gerais

| Utilitários |                     Recursos            |
| :------------: | :---------------------------------------------: |
|       ✅        |   Chat-GPT |
|       ✅        |   Criação de imagens IA |
|       ✅        |   Têndencias de Filmes/Séries |
|       ✅        |   Encurtar Links |
|       ✅        |   Upload de imagens |
|       ✅        |   Efeitos de Aúdio |
|       ✅        |   Texto para voz   |
|       ✅        |   Áudio para texto |
|       ✅        |   Letra de Música  |
|       ✅        |   Reconhecimento de músicas |
|       ✅        |   Detector de DDD |
|       ✅        |   Consulta de Clima/Previsão do Tempo |
|       ✅        |   Conversão de Moedas |
|       ✅        |   Calculadora básica  |
|       ✅        |   Pesquisa Web        |
|       ✅        |   Detector Anime      |
|       ✅        |   Rastreamento Correios |
|       ✅        |   Noticias Atuais |
|       ✅        |   Tradutor |

<br>