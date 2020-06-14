const conexao = require('../../config/conexao/conexaoDatabase');

class VisitaDAO {
    adiciona(visita, res) {
        const sql = `INSERT INTO visita SET ?`
        const novaVisita = {codAtividade: visita.codAtividade,
                            codTipoVisita: visita.codTipoVisita,
                            codMunicipio: visita.codMunicipio,
                            municipio: visita.municipio,
                            area: visita.area,
                            setorCensitario: visita.setorCensitario,
                            quarteirao: visita.quarteirao,
                            execucao: visita.execucao,
                            dataVisita: visita.dataVisita,
                            numCadOrdem: visita.numCadOrdem,
                            endereco: visita.endereco,
                            numComplemento: visita.numComplemento,
                            codSituacaoImovel: visita.codSituacaoImovel,
                            codTipoRecipientes: visita.codTipoRecipientes,
                            codSituacaoRecipientes: visita.codSituacaoRecipientes,
                            contrMecanico: visita.contrMecanico,
                            codTratQuimico: visita.codTratQuimico,
                            amostra: visita.amostra,
                            codLarvas: visita.codLarvas,
                            progRetorno: visita.progRetorno,
                            codLaboratorio: visita.codLaboratorio,
                            cpfAgente: visita.cpfAgente                            
                            }
        console.log(novaVisita);
        conexao.query(sql, novaVisita, (erro) => {
            if(erro){
                res.status(400).json(erro);
                console.log("Erro ao cadastrar Visita: "+erro);
            } else {
                const exibeVisita = {codAtividade: visita.codAtividade,
                    codTipoVisita: visita.codTipoVisita,
                    codMunicipio: visita.codMunicipio,
                    municipio: visita.municipio,
                    area: visita.area,
                    setorCensitario: visita.setorCensitario,
                    quarteirao: visita.quarteirao,
                    execucao: visita.execucao,
                    dataVisita: visita.dataVisita,
                    numCadOrdem: visita.numCadOrdem,
                    endereco: visita.endereco,
                    numComplemento: visita.numComplemento,
                    codSituacaoImovel: visita.codSituacaoImovel,
                    codTipoRecipientes: visita.codTipoRecipientes,
                    codSituacaoRecipientes: visita.codSituacaoRecipientes,
                    contrMecanico: visita.contrMecanico,
                    codTratQuimico: visita.codTratQuimico,
                    amostra: visita.amostra,
                    codLarvas: visita.codLarvas,
                    progRetorno: visita.progRetorno,
                    codLaboratorio: visita.codLaboratorio,
                    cpfAgente: visita.cpfAgente                                      
                    }
                res.status(201).json(exibeVisita);
                console.log(exibeVisita)
            }
        })
        
    }
}
    
module.exports = new VisitaDAO;