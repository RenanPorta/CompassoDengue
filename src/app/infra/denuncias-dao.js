const conexao = require('../../config/conexao/conexaoDatabase');
const uploadDeArquivos = require('../../arquivos/uploadDeImagens');

class DenunciasDAO {
    adiciona(denuncia, res) {
        const sql = `INSERT INTO denuncias SET ?`

        uploadDeArquivos(denuncia.imagem, denuncia.cidadao, (erro, novoCaminho) => {

            if(erro){
                res.status(400).json({ erro });
            }else{
                const novaDenuncia = {cidadao: denuncia.cidadao,
                                    cpf: denuncia.cpf,
                                    telefone: denuncia.telefone,
                                    rua: denuncia.rua,
                                    bairro: denuncia.bairro,
                                    imagem: novoCaminho,
                                    observacoes: denuncia.observacoes,
                                    status: denuncia.status }
                conexao.query(sql, novaDenuncia, (erro) => {
                    if(erro){
                        res.status(400).json(erro);
                        console.log("Erro ao enviar denuncia: "+erro);
                    } else {
                        res.status(201).json(novaDenuncia);
                        console.log(novaDenuncia);
                    }
                })
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