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
                res.redirect('/login');
                console.log(exibeCidadao)
            }
        })
        }else{
            const erroCpf = {
                                erroCpf: "Cpf invalido!"
                            }
            res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'),
            {
                erroCpf: erroCpf
            });
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

    buscaPorId(id, res){
        const sql = `SELECT * FROM cidadao WHERE id=${id}`
        
        conexao.query(sql, (erro, resultado)=> {
            const cidadao = resultado[0]
            const novoCidadao = {
                        id: cidadao.id,
                        nome: cidadao.nome,
                        telefone: cidadao.telefone,
                        email: cidadao.email
            }
            if(erro){
                res.status(404).json(erro);
            }else{
                res.marko(require('../views/layouts/cidadao/alteraCidadao.marko'),
                {
                    cidadao: novoCidadao
                });
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

    altera(cidadao, res){
        const novoCidadao = {nome: cidadao.nomeCidadao,
                            telefone: cidadao.telefoneCidadao,
                            email: cidadao.emailCidadao
                            }
        const sql = `UPDATE cidadao SET ? WHERE id=${cidadao.id}`

        conexao.query(sql, novoCidadao, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/cidadao-consulta');
            }
       });
    }
    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {

            const sql = `SELECT * FROM cidadao WHERE email=?`

            conexao.query(sql, email, (erro, resultado)=> {
                const cidadao = resultado[0]
                if(erro){
                   return reject('Não foi possível encontrar o usuário!');
                }else{
                    return resolve(cidadao);
                }
            })

        });
    }
    
}

module.exports = new CidadaoDAO;