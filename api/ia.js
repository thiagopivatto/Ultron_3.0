import axios from 'axios'
import { Hercai } from "hercai"
import qs from 'node:querystring'
import {obterTraducao} from './gerais.js'
import pkg from 'suno-ai'

const { SunoAI } = pkg
const API_URL = 'https://hercai.onrender.com/v3/hercai'
const API_URL_IMG = 'https://hercai.onrender.com/v3/text2image'
const API_KEY = 'sQdVwxPKqit4qGpJKJcxgbloUCxqbhwCweh2p9bhPo='
const COOKIE = '_cfuvid=wJK_yDpqI9IGwCEWHl_BnnOub5Q9gmRsxwSfzJ57HtU-1716054773102-0.0.1.1-604800000; __client=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsaWVudF8yZ2VPdERUSUZqVDlGTlprdWpKMFk5T2xybTQiLCJyb3RhdGluZ190b2tlbiI6IjY4bzg0eDAxdHFpNjVsb2lxMTRqeHE1cGZ0Ym10Zzc4dGR2YjVidDQifQ.KlNuwxKg5m-QXd5-CWNcO5QMncipfD4nuCO6Xx9bkjivZEI6zpVNcYkMIQBDSsqnN4DTEL9n2aaQzZodeg_Zg-IhMPbQ6pkuyKGMvex117TTG5wqgBj-lDwBljzYEuLc2ks2kHmZDJ7G-02mBQzm1cMC0BSdbGp2DUJxP7ZD48bZPHPLLK0J0rlJSANxVWHp1GMpUrP2XNrWv050TzCS9NaKigk1nlQRrDcssLo6U3tJOGJB2W_V6udYtiPQd8VgVAMtYLq6UD-e6qoryGVgyERhu2o1XHRPkE1wFKkwemUNGQb2fxmyIZQHoKV-ngN8YKdjadAHJbHGAmyWBDvnig; __client_uat=1716054793; __cf_bm=LOlCxSGH3a_V8Mi4AniXYgff4bDtN.SbWE0oltvzTX0-1716058491-1.0.1.1-n3UYbccUjgis57zaX.eKn8aacRoT9p9tnUWVBOuryLzBZxjpVJTjspnzAa49aN3xJDN_1xPEnR4OyztGE0De9g'

export const respostaHercaiTexto = async (textoUsuario, usuario) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resposta = { sucesso: false }
            const response = await axios.get(`${API_URL}?question=${encodeURI(textoUsuario)}`, {
                headers: {
                    "content-type": "application/json",
                    "Authorization": API_KEY
                }
            })

            if (response.data) {
                resposta = { sucesso: true, resultado: response.data.reply }
                resolve(resposta)
            } else {
                resposta = { sucesso: false, erro: 'Resposta inválida da API' }
                reject(resposta)
            }
        } catch (err) {
            if (err.response && err.response.status == 429) {
                resposta = { sucesso: false, erro: 'Limite de pedidos foi excedido, tente novamente mais tarde' }
            } else {
                resposta = { sucesso: false, erro: 'Houve um erro no servidor, tente novamente mais tarde.' }
            }
            console.log(`API respostaHercaiTexto - ${err.message}`)
            reject(resposta)
        }
    })
}

export const respostaHercaiImagem = async (textoUsuario) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resposta = { sucesso: false }
            let { resultado } = await obterTraducao(textoUsuario, 'en')
            const response = await axios.get(`${API_URL_IMG}?prompt=${encodeURI(resultado)}`, {
                headers: {
                    "content-type": "application/json",
                    "Authorization": API_KEY
                }
            })

            if (response.data) {
                resposta = { sucesso: true, resultado: response.data.url }
                resolve(resposta)
            } else {
                resposta = { sucesso: false, erro: 'Resposta inválida da API' }
                reject(resposta)
            }
        } catch (err) {
            if (err.response && err.response.status == 429) {
                resposta = { sucesso: false, erro: 'Limite de pedidos foi excedido, tente novamente mais tarde' }
            } else {
                resposta = { sucesso: false, erro: 'Houve um erro no servidor, tente novamente mais tarde.' }
            }
            console.log(`API respostaHercaiImagem - ${err.message}`)
            reject(resposta)
        }
    })
}

export const simiResponde = async(textoUsuario)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let resposta = {sucesso: false}
            let config = {
                url: "https://api.simsimi.vn/v2/simtalk",
                method: "post",
                headers : {'Content-Type': 'application/x-www-form-urlencoded'},
                data : qs.stringify({text: textoUsuario, lc: 'pt'})
            }

            await axios(config).then((simiresposta)=>{
                resposta = {sucesso: true, resultado: simiresposta.data.message}
                resolve(resposta)
            }).catch((err)=>{
                if(err.response?.data?.message){
                    resposta = {sucesso: true, resultado: err.response.data.message}
                    resolve(resposta)
                } else {
                    resposta = {sucesso: false, erro: "Houve um erro no servidor do SimSimi."}
                    reject(resposta)
                }
            })
        } catch(err){
            console.log(`API simiResponde- ${err.message}`)
            reject({sucesso: false, erro: "Houve um erro no servidor do SimSimi."})
        }
    })
}


export const criarMusica = async (descricaoPrompt, makeInstrumental = false) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Iniciando SunoAI...")
            console.log(`Cookie utilizado: ${COOKIE}`)
            const suno = new SunoAI(COOKIE)
            console.log("Instância SunoAI criada.")

            await suno.init()
            console.log("SunoAI iniciado com sucesso.")

            const payload = {
                gpt_description_prompt: descricaoPrompt,
                mv: 'chirp-v3-0',
                prompt: '',
                make_instrumental: makeInstrumental
            }

            console.log("Gerando música com payload:", payload)
            const songInfo = await suno.generateSongs(payload)
            console.log("Música gerada com sucesso:", songInfo)

            const outputDir = './output'
            await suno.saveSongs(songInfo, outputDir)
            console.log("Música salva com sucesso.")

            const filePath = path.join(outputDir, `${songInfo[0].id}.mp3`)
            resolve({ sucesso: true, filePath })
        } catch (err) {
            console.log(`API criarMusica - ${err.message}`)
            reject({ sucesso: false, erro: 'Houve um erro na geração da música.' })
        }
    })
}
