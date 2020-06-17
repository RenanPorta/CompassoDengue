const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo= path.extname(caminho);
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

    if(tipoEhValido){
        const novoCaminho = `./src/app/public/imagens/${nomeDoArquivo}${tipo}`;
        const novoNomeDoArquivo = `${nomeDoArquivo}${tipo}`;
            fs.createReadStream(caminho)
                .pipe(fs.createWriteStream(novoCaminho))
                .on('finish', () => callbackImagemCriada(false, novoCaminho, novoNomeDoArquivo));
    }else{
        const erro = "Tipo é inválido";
        console.log('Erro! Tipo de imagem invalida ');
        callbackImagemCriada(erro)
    }
}