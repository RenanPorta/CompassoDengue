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

  out.w("<html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Altera Cidadão</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"\"></a><div class=\"ml-auto\"><a class=\"btn btn-danger text-white\" href=\"/home\">Voltar</a></div></nav></header><main class=\"container\"><h1 class=\"text-center py-4\">Altera Cidadão</h1><form name=\"alteraCidadao\" method=\"post\" action=\"/cidadao-altera\"><input class=\"form-control\" type=\"hidden\" name=\"_method\" value=\"PUT\"><input class=\"form-control\" type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.id) +
    "\"><div class=\"form-group\"><label for=\"nomeCidadao\">Nome</label><input class=\"form-control\" type=\"text\" id=\"nomeCidadao\" name=\"nomeCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.nome) +
    "\"></div><div class=\"form-group\"><label for=\"telefoneCidadao\">Telefone</label><input class=\"form-control\" type=\"text\" id=\"telefoneCidadao\" name=\"telefoneCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.telefone) +
    "\" maxlength=\"11\"></div><div class=\"form-group\"><label for=\"emailCidadao\">E-mail</label><input class=\"form-control\" type=\"email\" id=\"emailCidadao\" name=\"emailCidadao\" value=\"" +
    marko_escapeXmlAttr(data.cidadao.email) +
    "\"></div><button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Salvar</button></form></main><footer class=\"pt-3\"><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

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
