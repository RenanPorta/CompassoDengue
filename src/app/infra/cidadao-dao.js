const conexao = require('../../config/conexao/conexaoDatabase');
const validarCpf = require ('validar-cpf');

class CidadaoDAO {
    adiciona(cidadao, res) {
        const cpfEhValido = validarCpf(cidadao.cpf);
        if(cpfEhValido){
            const sql = `INSERT INTO cidadao SET ?`

        const novoCidadao = {nome: cidadao.nome,
                            cpf: cidadao.cpf,
                            telefone: cidadao.telefone,
                            email: cidadao.email,
                            senha: cidadao.senha }
        conexao.query(sql, novoCidadao, (erro) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao cadastrar cidadao: "+erro);
            } else {
                const exibeCidadao = {nome: cidadao.nome,
                                cpf: cidadao.cpf,
                                telefone: cidadao.telefone,
                                email: cidadao.email}
                res.status(201).json(exibeCidadao);
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
                res.status(200).json(resultado)
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
    deletaPorCPF(cpf, res){
        const sql = `DELETE FROM cidadao WHERE cpf=${cpf}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(200).send(`Cidadão com CPF: ${cpf} foi excluido com sucesso!`);
            }
        })
    }
}

module.exports = new CidadaoDAO;