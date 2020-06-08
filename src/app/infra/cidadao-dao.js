const conexao = require('../../config/conexao/conexaoDatabase');
const validarCpf = require ('validar-cpf');

class CidadaoDAO {
    adiciona(cidadao, res) {
        const cpfEhValido = validarCpf(cidadao.cpfCidadao);
        if(cpfEhValido){
            const sql = `INSERT INTO cidadao SET ?`
        const novoCidadao = {nome: cidadao.nomeCidadao,
                            cpf: cidadao.cpfCidadao,
                            telefone: cidadao.telefoneCidadao,
                            email: cidadao.emailCidadao,
                            senha: cidadao.senhaCidadao }
        conexao.query(sql, novoCidadao, (erro) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao cadastrar cidadao: "+erro);
            } else {
                const exibeCidadao = {nome: cidadao.nomeCidadao,
                                    cpf: cidadao.cpfCidadao,
                                    telefone: cidadao.telefoneCidadao,
                                    email: cidadao.emailCidadao}
                res.redirect('/cidadao-consulta');
                //res.status(201).json(exibeCidadao);
                console.log(exibeCidadao)
            }
        })
        }else{
            const cpfInvalido = {
                                    "Erro": "Cpf invalido!"
                                }
            res.status(400).json(cpfInvalido);
        }
    }
    lista(res){
        const sql = `SELECT * FROM cidadao`

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/cidadao/listaCidadao.marko'),
                {
                    cidadaos: resultado
                })
                //res.status(200).json(resultado)
            }
        })

    }

    buscaPorCPF(cpf, res){
        const sql = `SELECT * FROM cidadao WHERE cpf=${cpf}`
        
        conexao.query(sql, (erro, resultado)=> {
            const cidadao = resultado[0]
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(cidadao);
            }
        })
    }
    deletaPorId(id, res){
        const sql = `DELETE FROM cidadao WHERE id=${id}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(200).end();
            }
        })
    }
}

module.exports = new CidadaoDAO;