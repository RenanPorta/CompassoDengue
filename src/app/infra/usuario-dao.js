const conexao = require('../../config/conexao/conexaoDatabase');
const validarCpf = require('validar-cpf');
const buscaCpfCadastrado = require('../verificacoes/buscaCpfCadastrado');
const buscaEmailCadastrado = require('../verificacoes/buscaEmailCadastrado');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UsuarioDAO {
    adicionaCid(cidadao, res) {

        const cpfSemMacara = cidadao.cpfCidadao.replace(/[^0-9]+/g,'');
        const telefoneSemMascara = cidadao.telefoneCidadao.replace(/[^0-9]+/g,'');

        bcrypt.hash(cidadao.senhaCidadao, saltRounds, function(err, hash) {
            if(err){
                console.log(err)
                res.status(400).json(err);
            }else{
                const novoCidadao = {nome: cidadao.nomeCidadao,
                    cpf: cpfSemMacara,
                    telefone: telefoneSemMascara,
                    email: cidadao.emailCidadao,
                    senha: hash,
                    nivelAcesso: "Cidadao" 
                    }
                buscaCpfCadastrado(novoCidadao.cpf, (cpfExiste) => {
                    if(cpfExiste){
                        const message = {
                            erro: "CPF já cadastrado!"
                            }
                        res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'),
                        {
                            erro: message
                        });
                    }else{
                        buscaEmailCadastrado(novoCidadao.email, (emailExiste) => {
                            if(emailExiste){
                                const message = {
                                    erro: "E-mail já cadastrado!"
                                }
                                res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'),
                                {
                                    erro: message
                                });
                            }else{
                                const cpfEhValido = validarCpf(novoCidadao.cpf);
            
                                if(cpfEhValido){
            
                                    const sql = `INSERT INTO usuario SET ?`
            
                                    conexao.query(sql, novoCidadao, (erro) => {
            
                                    if(erro){
                                        res.status(400).json(erro);
                                        console.log("Erro ao cadastrar cidadao: "+erro);
                                    } else {
                                        res.redirect('/home');
                                    }
                                })
                                }else{
                                const message = {
                                            erro: "Cpf invalido!"
                                        }
                                res.marko(require('../views/layouts/cidadao/cadastroCidadao.marko'),
                                {
                                    erro: message
                                });
                                }
                            }
                        })
                        
                    }
                });
            }
        });   
    }

    listaCid(res){

        const sql = `SELECT * FROM usuario WHERE nivelAcesso='Cidadao' and senha<>'INATIVO'`

        conexao.query(sql, (erro, resultado) => {

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

    
    listaCidadaoLogado(userId ,res){

        const sql = `SELECT * FROM usuario WHERE ? and senha<>'INATIVO'`

        conexao.query(sql, userId, (erro, resultado) => {

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
                res.redirect("/sair");
            }
        })
    }

    alteraCid(cidadao, res){

        const telefoneSemMascara = cidadao.telefoneCidadao.replace(/[^0-9]+/g,'');

        const novoCidadao = {nome: cidadao.nomeCidadao,
                            telefone: telefoneSemMascara,
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

        const cpfSemMacara = funcionario.cpfFuncionario.replace(/[^0-9]+/g,'');
        const telefoneSemMascara = funcionario.telefoneFuncionario.replace(/[^0-9]+/g,'');

        bcrypt.hash(funcionario.senhaFuncionario, saltRounds, function(err, hash) {
            if(err){
                console.log(err);
                res.status(400).json(err);
            }else{
                
                const novoFuncionario = {nome: funcionario.nomeFuncionario,
                    cpf: cpfSemMacara,
                    telefone: telefoneSemMascara,
                    email: funcionario.emailFuncionario,
                    senha: hash,
                    nivelAcesso: funcionario.nivelAcesso
                    }
                
                buscaCpfCadastrado(novoFuncionario.cpf, (cpfExiste) => {
                    if(cpfExiste){
                        const message = {
                            erro: "CPF já cadastrado!"
                            }
                        res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'),
                        {
                            erro: message
                        });
                    }else{
                        buscaEmailCadastrado(novoFuncionario.email, (emailExiste) => {
                            if(emailExiste){
                                const message = {
                                    erro: "E-mail já cadastrado!"
                                    }
                                res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'),
                                {
                                    erro: message
                                });
                            }else{
                                const cpfEhValido = validarCpf(novoFuncionario.cpf);
        
                                if(cpfEhValido){
        
                                const sql = `INSERT INTO usuario SET ?`
        
                                conexao.query(sql, novoFuncionario, (erro) => {
        
                                    if(erro){
                                        res.status(400).json(erro);
                                        console.log("Erro ao cadastrar Funcionario: "+erro);
                                    } else {
                                        res.redirect('/funcionario-consulta');
                                    }
                                });
                                }else{
                                    const message = {
                                        erro: "Cpf invalido!"
                                        }
                                    res.marko(require('../views/layouts/funcionario/cadastroFuncionario.marko'),
                                    {
                                        erro: message
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    }

    listaFunc(res){

        const sql = `SELECT * FROM usuario WHERE nivelAcesso='Administrador' OR nivelAcesso='Agente de Saúde' and senha<>'INATIVO'`

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

    alteraFunc(funcionario, res){

        const telefoneSemMascara = funcionario.telefoneFuncionario.replace(/[^0-9]+/g,'');

        const novoFuncionario = {nome: funcionario.nomeFuncionario,
                            telefone: telefoneSemMascara,
                            email: funcionario.emailFuncionario
                            }
    
        const sql = `UPDATE usuario SET ? WHERE id=${funcionario.id}`

        conexao.query(sql, novoFuncionario, (erro) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/funcionario-consulta');
            }
       });
    }

    inativaPorIdFunc(id, res){

        const sql = `UPDATE usuario SET senha='INATIVO' WHERE id=${id}`

        conexao.query(sql, (erro) => {
            if(erro){
                res.status(400).json(erro);
            }else{
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