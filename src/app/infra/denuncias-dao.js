const conexao = require('../../config/conexao/conexaoDatabase');
const uploadDeArquivos = require('../../arquivos/uploadDeImagens');

class DenunciasDAO {
    adiciona(denuncia, res) {
        console.log(denuncia);
        const sql = `INSERT INTO denuncias SET ?`

        if(denuncia.imagemDenuncia != ''){
            uploadDeArquivos(denuncia.imagemDenuncia, denuncia.cpfCidadao, (erro, novoCaminho) => {

                if(erro){
                    res.status(400).json({ erro });
                }else{
                    const novaDenuncia = {cidadao: denuncia.nomeCidadao,
                                        cpf: denuncia.cpfCidadao,
                                        telefone: denuncia.telefoneCidadao,
                                        rua: denuncia.ruaDenuncia,
                                        bairro: denuncia.bairroDenuncia,
                                        imagem: novoCaminho,
                                        observacoes: denuncia.observacoesDenuncia,
                                        status: "Pendente" }
                    console.log(novaDenuncia);
                    conexao.query(sql, novaDenuncia, (erro) => {
                        if(erro){
                            res.status(400).json(erro);
                            console.log("Erro ao enviar denuncia: "+erro);
                        } else {
                            res.status(201).json(novaDenuncia);
                            console.log(novaDenuncia);
                        }
                    });
                }
            });
        }else{
            const novaDenuncia = {cidadao: denuncia.nomeCidadao,
                cpf: denuncia.cpfCidadao,
                telefone: denuncia.telefoneCidadao,
                rua: denuncia.ruaDenuncia,
                bairro: denuncia.bairroDenuncia,
                imagem: denuncia.imagemDenuncia,
                observacoes: denuncia.observacoesDenuncia,
                status: "Pendente" }
            conexao.query(sql, novaDenuncia, (erro) => {
                if(erro){
                    res.status(400).json(erro);
                    console.log("Erro ao enviar denuncia: "+erro);
                } else {
                    res.status(201).json(novaDenuncia);
                    console.log(novaDenuncia);
                }
            });  
        }
    }
    
    lista(res){
        const sql = `SELECT * FROM denuncias`

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/denuncias/listaDenuncia.marko'),
                {
                    denuncias: resultado
                });
                
                //res.status(200).json(resultado)
            }
        })

    }
}

module.exports = new DenunciasDAO;