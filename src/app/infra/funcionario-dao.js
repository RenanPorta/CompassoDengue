const conexao = require('../../config/conexao/conexaoDatabase');
const validarCpf = require ('validar-cpf');

class FuncionarioDAO {
    adiciona(funcionario, res) {
        const cpfEhValido = validarCpf(funcionario.cpfFuncionario);
        if(cpfEhValido){
            const sql = `INSERT INTO funcionario SET ?`
        const novoFuncionario = {nome: funcionario.nomeFuncionario,
                            cpf: funcionario.cpfFuncionario,
                            telefone: funcionario.telefoneFuncionario,
                            email: funcionario.emailFuncionario,
                            senha: funcionario.senhaFuncionario,
                            nivelAcesso: funcionario.nivelAcesso
                            }
        conexao.query(sql, novoFuncionario, (erro) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao cadastrar Funcionario: "+erro);
            } else {
                const exibeFuncionario = {nome: funcionario.nomeFuncionario,
                                        cpf: funcionario.cpfFuncionario,
                                        telefone: funcionario.telefoneFuncionario,
                                        email: funcionario.emailFuncionario,
                                        nivelAcesso: funcionario.nivelAcesso
                                        }
                res.redirect('/funcionario-consulta');
                console.log(exibeFuncionario)
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
        const sql = `SELECT * FROM funcionario`

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/funcionario/listaFuncionario.marko'),
                {
                    funcionarios: resultado
                })
            }
        })

    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM funcionario WHERE id=${id}`
        
        conexao.query(sql, (erro, resultado)=> {
            const funcionario = resultado[0]
            const novoFuncionario = {
                        id: funcionario.id,
                        nome: funcionario.nome,
                        telefone: funcionario.telefone,
                        email: funcionario.email,
                        nivelAcesso: funcionario.nivelAcesso
                        }
            if(erro){
                res.status(404).json(erro);
            }else{
                res.marko(require('../views/layouts/funcionario/alteraFuncionario.marko'),
                {
                    funcionario: novoFuncionario
                });
            }
        })
    }

    deletaPorId(id, res){
        const sql = `DELETE FROM funcionario WHERE id=${id}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(200).end();
            }
        })
    }

    altera(funcionario, res){
        const novoFuncionario = {nome: funcionario.nomeFuncionario,
                            telefone: funcionario.telefoneFuncionario,
                            email: funcionario.emailFuncionario
                            }
        const sql = `UPDATE funcionario SET ? WHERE id=${funcionario.id}`

        conexao.query(sql, novoFuncionario, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/funcionario-consulta');
            }
       });
    }
}

module.exports = new FuncionarioDAO;