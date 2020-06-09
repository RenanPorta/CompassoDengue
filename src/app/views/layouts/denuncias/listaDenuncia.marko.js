// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/denuncias/listaDenuncia.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Listagem de Denuncias </h1><table id=\"denuncias\"><tr><td>ID</td><td>Nome Cidadão</td><td>CPF</td><td>Telefone</td><td>Rua</td><td>Bairro</td><td>Imagem</td><td>Observações</td><td>Status</td></tr>");

  var for__16 = 0;

  marko_forEach(data.denuncias, function(denuncia) {
    var keyscope__17 = "[" + ((for__16++) + "]");

    out.w("<tr id=\"denuncia_" +
      marko_escapeXmlAttr(denuncia.id) +
      "\"><td>" +
      marko_escapeXml(denuncia.id) +
      "</td><td>" +
      marko_escapeXml(denuncia.cidadao) +
      "</td><td>" +
      marko_escapeXml(denuncia.cpf) +
      "</td><td>" +
      marko_escapeXml(denuncia.telefone) +
      "</td><td>" +
      marko_escapeXml(denuncia.rua) +
      "</td><td>" +
      marko_escapeXml(denuncia.bairro) +
      "</td><td><a href=\"#\">" +
      marko_escapeXml(denuncia.imagem) +
      "</a></td><td>" +
      marko_escapeXml(denuncia.observacoes) +
      "</td><td>" +
      marko_escapeXml(denuncia.status) +
      "</td><td><a href=\"#\">Editar</a></td></tr>");
  });

  out.w("</table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "31");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/denuncias/listaDenuncia.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
