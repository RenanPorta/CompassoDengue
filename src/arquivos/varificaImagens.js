const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemVerifica) => {

    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo= path.extname(caminho);
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

    if(tipoEhValido){
        callbackImagemVerifica(false, caminho, nomeDoArquivo);
    }else{
        const erro = "Tipo é inválido";
        console.log('Erro! Tipo de imagem invalida ');
        callbackImagemVerifica(erro)
    }
}