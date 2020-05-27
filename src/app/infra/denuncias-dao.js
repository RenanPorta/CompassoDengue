const conexao = require('../../config/conexao/conexaoDatabase');

class DenunciasDAO {
    adiciona(denuncia, res) {
        const sql = `INSERT INTO denuncias SET ?`

        conexao.query(sql, denuncia, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao enviar denuncia: "+erro);
            } else {
                res.status(201).json(resultados);
                console.log(resultados);
            }
        })
    }
    
    lista(res){
        const sql = `SELECT * FROM denuncias`

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })

    }
}

module.exports = new DenunciasDAO;