const conexao = require('../../config/conexao/conexaoDatabase');
const uploadDeArquivos = require('../../arquivos/uploadDeImagens');
var crypto = require("crypto");

class DenunciasDAO {

    buscaDadosCidadaoLogado(userId ,res){

        const sql = `SELECT * FROM usuario WHERE ?`

        conexao.query(sql, userId, (erro, resultado) => {
            const usuario = resultado[0];
            const exibeUsuario = {
                            nome: usuario.nome,
                            cpf: usuario.cpf,
                            telefone: usuario.telefone
            }
            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/denuncias/cadastroDenuncia.marko'),
                {
                    usuario: exibeUsuario
                })
            }
        })

    }

    adiciona(denuncia, imagem, res) {

        var id = crypto.randomBytes(15).toString('hex');

        const cpfSemMacara = denuncia.cpfCidadao.replace(/[^0-9]+/g,'');
        const telefoneSemMascara = denuncia.telefoneCidadao.replace(/[^0-9]+/g,'');
            
        const sql = `INSERT INTO denuncias SET ?`

                uploadDeArquivos(imagem.caminho, id, (erro, novoCaminho, novoNomeDoArquivo) => {
    
                    if(erro){
                        res.status(400).json({ erro });
                    }else{
                        const novaDenuncia = {cidadao: denuncia.nomeCidadao,
                                            cpf: cpfSemMacara,
                                            telefone: telefoneSemMascara,
                                            rua: denuncia.ruaDenuncia,
                                            bairro: denuncia.bairroDenuncia,
                                            imagem: novoCaminho,
                                            nomeImagem: novoNomeDoArquivo,
                                            observacoes: denuncia.observacoesDenuncia,
                                            status: "Pendente" 
                                        }
                        conexao.query(sql, novaDenuncia, (erro) => {
                            if(erro){
                                res.status(400).json(erro);
                                console.log("Erro ao enviar denuncia: "+erro);
                            } else {
                                res.redirect('/denuncia-consulta');
                            }
                        });
                    }
                });
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
            }
        })

    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM denuncias WHERE id=${id}`
        
        conexao.query(sql, (erro, resultado)=> {
            const denuncia = resultado[0]
            const novaDenuncia = {
                        id: denuncia.id,
                        cidadao: denuncia.cidadao,
                        cpf: denuncia.cpf,
                        telefone: denuncia.telefone,
                        rua: denuncia.rua,
                        bairro: denuncia.bairro,
                        nomeImagem: denuncia.nomeImagem,
                        observacoes: denuncia.observacoes,
                        status: denuncia.status
            }
            if(erro){
                res.status(404).json(erro);
            }else{
                res.marko(require('../views/layouts/denuncias/visualizaDenuncia.marko'),
                {
                    denuncia: novaDenuncia
                });
            }
        })
    }
    buscaPorIdAlterar(id, res){
        const sql = `SELECT * FROM denuncias WHERE id=${id}`
        
        conexao.query(sql, (erro, resultado)=> {
            const denuncia = resultado[0]
            const novaDenuncia = {
                        id: denuncia.id,
                        cidadao: denuncia.cidadao,
                        cpf: denuncia.cpf,
                        telefone: denuncia.telefone,
                        rua: denuncia.rua,
                        bairro: denuncia.bairro,
                        nomeImagem: denuncia.nomeImagem,
                        observacoes: denuncia.observacoes,
                        status: denuncia.status
            }
            if(erro){
                res.status(404).json(erro);
            }else{
                res.marko(require('../views/layouts/denuncias/alteraDenuncia.marko'),
                {
                    denuncia: novaDenuncia
                });
            }
        })
    }
    altera(denuncia, res){
        const novaDenuncia = {
                            status: denuncia.status
                            }
        const sql = `UPDATE denuncias SET ? WHERE id=${denuncia.id}`

        conexao.query(sql, novaDenuncia, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else {
                res.redirect('/denuncia-consulta');
            }
       });
    }
    
}

module.exports = new DenunciasDAO;