const app = require('./src/config/custom-express');
const conexao = require('./src/config/conexao/conexaoDatabase');
const Database = require('./src/config/database');

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log("Banco conectado");

        Database.init(conexao);
        
        app.listen(3000, function(){
            console.log("Servidor rodando na porta 3000");
    
        })
    }
})