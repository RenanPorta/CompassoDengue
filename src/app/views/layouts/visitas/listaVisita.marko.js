// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/visitas/listaVisita.marko",
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

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Consultar Visitas</h1><table class=\"table table-bordered table-hover table-responsive-lg\" id=\"visita\"><thead class=\"thead-light\"><tr class=\"text-center\"><th>Nº Visita</th><th>Agente</th><th>Data</th><th>Atividade</th><th>Tipo de visita</th></tr></thead>");

  var for__11 = 0;

  marko_forEach(data.visita, function(visita) {
    var keyscope__12 = "[" + ((for__11++) + "]");

    out.w("<tr class=\"text-center\" id=\"visita_" +
      marko_escapeXmlAttr(visita.codVisita) +
      "\"><td>" +
      marko_escapeXml(visita.codVisita) +
      "</td><td>" +
      marko_escapeXml(agente.agente) +
      "</td><td>" +
      marko_escapeXml(visita.data) +
      "</td><td>" +
      marko_escapeXml(atividades.atividade) +
      "</td><td>" +
      marko_escapeXml(tipoVisita.tipoVisita) +
      "</td><td><a href=\"/cidadao-altera/" +
      marko_escapeXmlAttr(cidadao.id) +
      "\">Editar</a></td></tr>");
  });

  out.w("</table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "21");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/visitas/listaVisita.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
