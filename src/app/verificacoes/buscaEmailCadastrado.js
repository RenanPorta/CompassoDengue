const conexao = require('../../config/conexao/conexaoDatabase');

module.exports = (email, callbackVerificado) => {

    const sqlEmail = `SELECT * FROM usuario WHERE email=?`

    conexao.query(sqlEmail, email, (erro, resultadoUsuarioEmail) => {
        const usuarioEmail = resultadoUsuarioEmail[0];
        if(erro){
            console.log(erro);
        }else if(usuarioEmail){
            const emailExiste = true;
            callbackVerificado(emailExiste);   
        }else{
            const emailExiste = false;
            callbackVerificado(emailExiste);  
        }
    });
}
