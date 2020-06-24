const conexao = require('../../config/conexao/conexaoDatabase');

module.exports = (userEmail, callbackVerificado) => {

    
    const sqlUsuario = `SELECT * FROM usuario WHERE ?`

    conexao.query(sqlUsuario, userEmail, (erro, resultadoUsuario) => {

        const usuario = resultadoUsuario[0];
        if(erro){
            console.log(erro);
        }else if(usuario.nivelAcesso === 'Administrador'){
            const administrador = true;
            const agenteSaude = false;
            callbackVerificado(administrador, agenteSaude);   
        }else if(usuario.nivelAcesso === 'Agente de Saúde'){
            const administrador = false;
            const agenteSaude = true;
            callbackVerificado(administrador, agenteSaude); 
        }else{
            const administrador = false;
            const agenteSaude = false;
            callbackVerificado(administrador, agenteSaude); 
        }

    });
}
