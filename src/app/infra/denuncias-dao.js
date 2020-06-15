const conexao = require('../../config/conexao/conexaoDatabase');
const uploadDeArquivos = require('../../arquivos/uploadDeImagens');
const validarCpf = require ('validar-cpf');

class DenunciasDAO {
    adiciona(denuncia, res) {
        //console.log(denuncia);
        const cpfEhValido = validarCpf(denuncia.cpfCidadao);
        if(cpfEhValido){
            const sql = `INSERT INTO denuncias SET ?`

            if(denuncia.imagemDenuncia != ''){
                uploadDeArquivos(denuncia.imagemDenuncia, denuncia.cpfCidadao, (erro, novoCaminho, novoNomeDoArquivo) => {
    
                    if(erro){
                        res.status(400).json({ erro });
                    }else{
                        const novaDenuncia = {cidadao: denuncia.nomeCidadao,
                                            cpf: denuncia.cpfCidadao,
                                            telefone: denuncia.telefoneCidadao,
                                            rua: denuncia.ruaDenuncia,
                                            bairro: denuncia.bairroDenuncia,
                                            imagem: novoCaminho,
                                            nomeImagem: novoNomeDoArquivo,
                                            observacoes: denuncia.observacoesDenuncia,
                                            status: "Pendente" }
                        console.log(novaDenuncia);
                        conexao.query(sql, novaDenuncia, (erro) => {
                            if(erro){
                                res.status(400).json(erro);
                                console.log("Erro ao enviar denuncia: "+erro);
                            } else {
                                res.redirect('/denuncia-consulta');
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
                        res.redirect('/denuncia-consulta');
                        console.log(novaDenuncia);
                    }
                });  
            }
        }else{
            const cpfInvalido = {
                "Erro": "Cpf invalido!"
            }
            res.status(400).json(cpfInvalido);
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
            console.log(novaDenuncia);
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
            console.log(novaDenuncia);
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