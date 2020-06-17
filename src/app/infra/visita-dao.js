const conexao = require('../../config/conexao/conexaoDatabase');

class VisitaDAO {
    adiciona(visita, res) {
        const sql = `INSERT INTO visita SET ?`
        const novaVisita = {
            codAtividade: visita.codAtividade,
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
            trabalhado: visita.trabalhado,
            codPendencia: visita.codPendencia,
            codTipoRecipientes: visita.codTipoRecipientes,
            codSituacaoRecipientes: visita.codSituacaoRecipientes,
            codRecipiente: visita.codRecipiente,
            contrMecanico: visita.contrMecanico,
            codTratQuimico: visita.codTratQuimico,
            amostra: visita.amostra,
            codLarvas: visita.codLarvas,
            progRetorno: visita.progRetorno
        }
        console.log(novaVisita);
        conexao.query(sql, novaVisita, (erro) => {
            if (erro) {
                res.status(400).json(erro);
                console.log("Erro ao cadastrar Visita: " + erro);
            } else {
                const exibeVisita = {
                    codAtividade: visita.codAtividade,
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
                    trabalhado: visita.trabalhado,
                    codPendencia: visita.codPendencia,
                    codTipoRecipientes: visita.codTipoRecipientes,
                    codSituacaoRecipientes: visita.codSituacaoRecipientes,
                    codRecipiente: visita.codRecipiente,
                    contrMecanico: visita.contrMecanico,
                    codTratQuimico: visita.codTratQuimico,
                    amostra: visita.amostra,
                    codLarvas: visita.codLarvas,
                    progRetorno: visita.progRetorno
                }
                // res.status(201).json(exibeVisita);
                res.marko(require('../views/layouts/visitas/visita.marko'));
            }
        })

    }
    lista(res){
                const sql = `SELECT visita.codVisita, agente.nomeAgente,visita.dataVisita , atividades.atividade, tipoVisita.tipoVisita, visita.municipio,
                visita.codMunicipio, visita.area, visita.setorCensitario, visita.quarteirao,
                visita.execucao, visita.numCadOrdem, visita.endereco, visita.numComplemento, 
                visita.Trabalhado, pendencia.pendencia, tipoRecipientes.tipoRecipiente,  recipientes.recipiente,
                visita.contrMecanico, tratamentoQuimico.tratamentoQuimico, visita.amostra, larvas.tiposLarvas, visita.progRetorno, 
                laboratorio.laboratorio, situacaoRecipientes.situacaoRecipiente
                FROM  visita
                JOIN atividades
                ON (visita.codAtividade = atividades.codAtividade)
                JOIN tipovisita
                ON (visita.codTipoVisita = tipoVisita.codTipoVisita)
                JOIN pendencia
                ON (visita.codPendencia = pendencia.codPendencia)
                JOIN tipoRecipientes
                ON (visita.codTipoRecipientes = tipoRecipientes.codTipoRecipientes)
                JOIN recipientes
                ON (visita.codRecipiente = recipientes.codRecipiente)
                JOIN tratamentoQuimico
                ON(visita.codTratQuimico = tratamentoQuimico.codTratQuimico)
                LEFT JOIN larvas
                ON(visita.codLarvas = larvas.codLarvas)
                LEFT JOIN laboratorio
                ON(visita.codLaboratorio = laboratorio.codLaboratorio)
                LEFT JOIN agente
                ON(visita.cpfAgente = agente.cpfAgente)
                JOIN situacaorecipientes
                ON(visita.codSituacaoRecipientes = situacaoRecipientes.codSituacaoRecipiente)
                WHERE visita.codVisita > 0
                ORDER BY visita.codVisita
                `

        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.marko(require('../views/layouts/visitas/listaVisita.marko'),
                {
                  visita: resultado
                    
                    
            
                })
             // res.status(200).json(resultado)
            }
        })

    }
}

module.exports = new VisitaDAO;