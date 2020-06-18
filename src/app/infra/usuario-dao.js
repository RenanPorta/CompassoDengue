const conexao = require('../../config/conexao/conexaoDatabase');
const validarCpf = require ('validar-cpf');

class UsuarioDAO {
    adicionaCid(cidadao, res) {

        const cpfEhValido = validarCpf(cidadao.cpfCidadao);

        if(cpfEhValido){

            const sql = `INSERT INTO usuario SET ?`

            const novoCidadao = {nome: cidadao.nomeCidadao,
                                cpf: cidadao.cpfCidadao,
                                telefone: cidadao.telefoneCidadao,
                                email: cidadao.emailCidadao,
                                senha: cidadao.senhaCidadao,
                                nivelAcesso: "Cidadao" 
                                }

        conexao.query(sql, novoCidadao, (erro) => {

            if(erro){

                res.status(400).json(erro);
                console.log("Erro ao cadastrar cidadao: "+erro);
            } else {

                const exibeCidadao = {nome: cidadao.nomeCidadao,
                                    cpf: cidadao.cpfCidadao,
                                    telefone: cidadao.telefoneCidadao,
                                    email: cidadao.emailCidadao
                                    }

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

    listaCid(res){

        const sql = `SELECT * FROM usuario WHERE nivelAcesso='Cidadao'`

        conexao.query(sql, res, (erro, resultado) => {

            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/cidadao/listaCidadao.marko'),
                {
                    cidadaos: resultado
                })
            }
        })

    }

    buscaPorIdCid(id, res){

        const sql = `SELECT * FROM usuario WHERE id=${id}`
        
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

    deletaPorIdCid(id, res){

        const sql = `DELETE FROM usuario WHERE id=${id}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(200).end();
            }
        })
    }

    alteraCid(cidadao, res){

        const novoCidadao = {nome: cidadao.nomeCidadao,
                            telefone: cidadao.telefoneCidadao,
                            email: cidadao.emailCidadao
                            }
        const sql = `UPDATE usuario SET ? WHERE id=${cidadao.id}`

        conexao.query(sql, novoCidadao, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/cidadao-consulta');
            }
       });
    }

// ------------ FUNCIONARIO -------------------
    
    adicionaFunc(funcionario, res) {

        const cpfEhValido = validarCpf(funcionario.cpfFuncionario);

        if(cpfEhValido){

            const sql = `INSERT INTO usuario SET ?`

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
        });
        }else{
            const cpfInvalido = {
                                    "Erro": "Cpf invalido!"
                                }
            res.status(400).json(cpfInvalido);
        }
    }

    listaFunc(res){

        const sql = `SELECT * FROM usuario WHERE nivelAcesso='Administrador' OR nivelAcesso='Agente de Saúde'`

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

    buscaPorIdFunc(id, res){

        const sql = `SELECT * FROM usuario WHERE id=${id}`
        
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

    deletaPorIdFunc(id, res){

        const sql = `DELETE FROM usuario WHERE id=${id}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(200).end();
            }
        })
    }

    alteraFunc(funcionario, res){
        
        const novoFuncionario = {nome: funcionario.nomeFuncionario,
                            telefone: funcionario.telefoneFuncionario,
                            email: funcionario.emailFuncionario
                            }
        const sql = `UPDATE usuario SET ? WHERE id=${funcionario.id}`

        conexao.query(sql, novoFuncionario, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/funcionario-consulta');
            }
       });
    }

// ----------------------- FUNÇÃO PARA VERIFICAR SE O USUARIO ESTA CADASTRADO -------------------------
    
    buscaPorEmail(email) {

        return new Promise((resolve, reject) => {

            const sql = `SELECT * FROM usuario WHERE email=?`

            conexao.query(sql, email, (erro, resultado)=> {
                const usuario = resultado[0]
                if(erro){
                   return reject('Não foi possível encontrar o usuário!');
                }else{
                    return resolve(usuario);
                }
            })

        });
    }
    
}

module.exports = new UsuarioDAO;