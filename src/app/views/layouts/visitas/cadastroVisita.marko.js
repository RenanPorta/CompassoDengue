// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/visitas/cadastroVisita.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>VISITA</h1><h3>Atividades</h3><form name=\"cadastraVisita\" method=\"post\" action=\"/visita\"><div><input type=\"checkbox\" name=\"codAtividade\" value=\"1\">PONTO ESTRATÉGICO<br><input type=\"checkbox\" name=\"codAtividade\" value=\"2\">PESO DE ARMADILHAS<br><input type=\"checkbox\" name=\"codAtividade\" value=\"3\">DELIMITAÇÃO DE FOCO<br><input type=\"checkbox\" name=\"codAtividade\" value=\"4\">BLOQUEIO – CONTR. CRIAD.<br><input type=\"checkbox\" name=\"codAtividade\" value=\"5\">BLOQUEIO – NEBULIZAÇÃO<br><input type=\"checkbox\" name=\"codAtividade\" value=\"6\">ARRASTÃO<br><input type=\"checkbox\" name=\"codAtividade\" value=\"IMOVEIS_ESPECIAS\">IMÓVEIS ESPECIAS<br><input type=\"checkbox\" name=\"codAtividade\" value=\"8\">CRIAD. ESPECIFICOS<br><input type=\"checkbox\" name=\"codAtividade\" value=\"9\" checked>CASA A CASA – ROTINA<br><input type=\"checkbox\" name=\"codAtividade\" value=\"10\">CASA A CASA – INTENSIFICAÇÃO<br><input type=\"checkbox\" name=\"codAtividade\" value=\"11\">OUTROS<br><input type=\"checkbox\" name=\"codAtividade\" value=\"12\">ADL<br></div><h3>Tipo de Visita</h3><div><input type=\"checkbox\" name=\"codTipoVisita\" value=\"1\" checked>ROTINA <input type=\"checkbox\" name=\"codTipoVisita\" value=\"2\">PENDÊNCIA <input type=\"checkbox\" name=\"codTipoVisita\" value=\"3\">DEMANDA</div><br><div><label for=\"codMunicipio\">Código Município</label><input type=\"text\" id=\"codMunicipio\" name=\"codMunicipio\"></div><div><label for=\"municipio\">Município</label><input type=\"text\" id=\"municipio\" name=\"municipio\"></div><div><label for=\"area\">Àrea</label><input type=\"text\" id=\"area\" name=\"area\"><label for=\"setorCensitario\">Setor Censitário</label><input type=\"text\" id=\"setorCensitario\" name=\"setorCensitario\"></div><div><label for=\"quarteirao\">Quarteirão</label><input type=\"text\" id=\"quarteirao\" name=\"quarteirao\"><label for=\"execucao\">Execução</label><input type=\"text\" id=\"execucao\" name=\"execucao\"><label for=\"dataVisita\">Data</label><input type=\"date\" id=\"dataVisita\" name=\"dataVisita\"></div><br> <div><label for=\"numCadOrdem\">CAD ou Nº Ordem</label><input type=\"text\" id=\"numCadOrdem\" name=\"numCadOrdem\"><label for=\"endereco\">Endereço</label><textarea id=\"endereco\" name=\"endereco\"></textarea><label for=\"numComplemento\">Numero / Complemento</label><input type=\"text\" id=\"numComplemento\" name=\"numComplemento\"></div><br><div><h3>Situação do Imóvel</h3><input type=\"checkbox\" name=\"trabalhado\" value=\"Sim\">Trabalhado<br> <input type=\"checkbox\" name=\"trabalhado\" value=\"Nao\">Pendência <select name=\"codPendencia\"><option value=\"\"> </option><option value=\"F\">Fechado</option><option value=\"D\">Desocupado</option><option value=\"T\">Temporada</option><option value=\"P\">Parcial</option><option value=\"R\">Recusa</option></select></div><br><div><h3>Recipientes</h3><p>Tipo <select name=\"codTipoRecipientes\"><option value=\"\"> </option><option value=\"A\">Depósito Elevado</option><option value=\"B\">Depósito Não Elevado</option><option value=\"C\">Móveis</option><option value=\"D\">Fixos</option><option value=\"E\">Pneus</option><option value=\"F\">Passíveis Remoção I Alteração</option><option value=\"G\">Naturais</option></select><select name=\"codRecipiente\"><option value=\"\"> </option><option value=\"1\">Ligado À Rede</option><option value=\"2\">Não Ligado A Rede</option><option value=\"3\">Ligado A Rede</option><option value=\"4\">Não Ligado A Rede</option><option value=\"5\">Vaso De Planta Na Água</option><option value=\"6\">Vasos De Planta (Diversos)</option><option value=\"7\">Prato / Pingadeira</option><option value=\"8\">Consumo Animal</option><option value=\"9\">Deposito P/ Construção</option><option value=\"10\">Depósito P/ Horticultura</option><option value=\"11\">Piscina Desmontável</option><option value=\"12\">Lata. Frasco. Plástico Utilizáveis</option><option value=\"13\">Garrafas Retornáveis</option><option value=\"14\">Balde / Regador</option><option value=\"15\">Bandeja Geladeira/Ar Cond.</option><option value=\"16\">Material De Construção</option><option value=\"17\">Outros</option><option value=\"18\">Ralo Interno</option><option value=\"19\">Talo Externo</option><option value=\"20\">Laje</option><option value=\"21\">Calha</option><option value=\"22\">Vaso Sanitário / Cx.Descarga</option><option value=\"23\">Piscina</option><option value=\"24\">Depósito P/ Construção</option><option value=\"25\">Depósito P/ Horticultura</option><option value=\"26\">Consumo Animal</option><option value=\"27\">Outros</option><option value=\"28\">Pneu</option><option value=\"29\">Outros Correlatos</option><option value=\"30\">Lata, Frasco, Plástico</option><option value=\"31\">Garrafa Descartável</option><option value=\"32\">Lona, Encerado, Plástico</option><option value=\"33\">Entulho De Construção</option><option value=\"34\">Peças / Sucatas</option><option value=\"35\">Masseira</option><option value=\"36\">Barco</option><option value=\"37\">Outros</option><option value=\"38\">Oco De Árvore E Bambu</option><option value=\"39\">Bromélias</option><option value=\"40\">Outros </option></select><select name=\"codSituacaoRecipientes\"><option value=\"\"> </option><option value=\"1\">Existente</option><option value=\"2\">Com àgua</option><option value=\"3\">Com larva</option></select><label for=\"quantidade\">Quantidade</label><input type=\"number\" id=\"quantidade\" name=\"quantidade\"></p></div><br><div><h3>Controle Mecânico</h3><input type=\"checkbox\" name=\"contrMecanico\" value=\"Sim\">Sim <input type=\"checkbox\" name=\"contrMecanico\" value=\"Nao\">Não<br></div><br><div><h3>Tratamento Químico</h3><input type=\"checkbox\" name=\"codTratQuimico\" value=\"1\">Prod. Alter. <input type=\"checkbox\" name=\"codTratQuimico\" value=\"2\">Focal <input type=\"checkbox\" name=\"codTratQuimico\" value=\"3\">Perifocal <input type=\"checkbox\" name=\"codTratQuimico\" value=\"4\">Nebulização<br></div><br><div><h3>Amostra</h3><input type=\"checkbox\" name=\"amostra\" value=\"Sim\">Sim <input type=\"checkbox\" name=\"amostra\" value=\"Nao\">Não<br><p>Larvas <input type=\"checkbox\" name=\"codLarvas\" value=\"1\">Exame <input type=\"checkbox\" name=\"codLarvas\" value=\"2\">Ae Aegypti <input type=\"checkbox\" name=\"codLarvas\" value=\"3\">Ae Albopictus<br></p></div><br><div><h3>Programar Retorno</h3><input type=\"checkbox\" name=\"progRetorno\" value=\"Sim\">Sim <input type=\"checkbox\" name=\"progRetorno\" value=\"Nao\">Não<br></div><br><div><h3>Laboratório</h3><label for=\"responsavel\">Responsável</label><input type=\"text\" id=\"responsavel\"><label for=\"dataLab\">Data</label><input type=\"date\" id=\"dataLab\"></div><br><div><h3>Agente</h3><label for=\"cpfAgente\">Agente</label><input type=\"text\" id=\"cpfAgente\"></div><br><input type=\"submit\" value=\"Cadastrar\" onclick=\"Cadastrado com Sucesso!\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "182");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/visitas/cadastroVisita.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
