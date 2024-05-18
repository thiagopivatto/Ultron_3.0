import {obterNomeAleatorio} from '../bot/lib/util.js'
import {toSticker, updateExif} from 'wa-leal-stickers'
import ffmpeg from 'fluent-ffmpeg'
import path from 'node:path'
import fs from 'fs-extra'
import sharp from 'sharp';


export const criarSticker = async (bufferMidia, opcoes) => {
    return new Promise(async (resolve, reject) => {
        try {
            let resposta = { sucesso: false };
            const { pack, autor, fps, tipo, manterProporcao } = opcoes;

            let bufferImagem = bufferMidia;

            if (manterProporcao) {
                const imagem = sharp(bufferMidia);
                const metadata = await imagem.metadata();

                // Ajusta a imagem para caber dentro de um 512x512, mantendo a proporção
                bufferImagem = await imagem.resize({
                    width: metadata.width > metadata.height ? 512 : null,
                    height: metadata.height >= metadata.width ? 512 : null,
                    fit: 'inside'
                }).toBuffer();
            }

            await toSticker(bufferImagem, { pack, author: autor, fps, type: tipo }).then((bufferSticker) => {
                resposta = { sucesso: true, resultado: bufferSticker };
                resolve(resposta);
            }).catch(() => {
                resposta = { sucesso: false, erro: 'Houve um erro na criação de sticker.' };
                reject(resposta);
            });
        } catch (err) {
            console.log(`API criarSticker - ${err.message}`);
            reject({ sucesso: false, erro: "Houve um erro na criação de sticker." });
        }
    });
}

export const renomearSticker = (bufferSticker, pack, autor)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let resposta = {sucesso: false}
            await updateExif(bufferSticker, pack, autor).then((bufferSticker)=>{
                resposta = {sucesso: true, resultado: bufferSticker}
                resolve(resposta)
            }).catch(() =>{
                resposta = {sucesso: false, erro: 'Houve um erro ao renomear o sticker.'}
                reject(resposta)
            })
        } catch(err){
            console.log(`API renomearSticker - ${err.message}`)
            reject({sucesso: false, erro: "Houve um erro ao renomear o sticker."})
        }
    })
}

export const stickerParaImagem = (stickerBuffer)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let resposta = {sucesso: false}
            let entradaWebp = path.resolve(`temp/${obterNomeAleatorio(".webp")}`)
            let saidaPng = path.resolve(`temp/${obterNomeAleatorio(".png")}`)
            fs.writeFileSync(entradaWebp, stickerBuffer)
            ffmpeg(entradaWebp)
            .save(saidaPng)
            .on('end', ()=>{
                let bufferImagem = fs.readFileSync(saidaPng)
                fs.unlinkSync(entradaWebp)
                fs.unlinkSync(saidaPng)
                resposta = {sucesso: true, resultado: bufferImagem}
                resolve(resposta)
            })
            .on('error', ()=>{
                resposta = {sucesso: false, erro: 'Houve um erro ao converter o sticker para imagem'}
                reject(resposta)
            })
        } catch(err){
            console.log(`API stickerParaImagem - ${err.message}`)
            reject({sucesso: false, erro: "Houve um erro ao converter o sticker para imagem"})
        }
    })
}