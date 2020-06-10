// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/cidadao/alteraCidadao.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Altera Cidadao</h1><form name=\"alteraCidadao\" method=\"post\" action=\"/cidadao-altera\"><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.id) +
    "\"><br><div><label for=\"nomeCidadao\">Nome:</label><input type=\"text\" id=\"nomeCidadao\" name=\"nomeCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.nome) +
    "\"></div><br><div><label for=\"telefoneCidadao\">Telefone:</label><input type=\"text\" id=\"telefoneCidadao\" name=\"telefoneCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.telefone) +
    "\"></div><br><div><label for=\"emailCidadao\">E-mail:</label><input type=\"text\" id=\"emailCidadao\" name=\"emailCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.email) +
    "\"></div><br><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/cidadao/alteraCidadao.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
