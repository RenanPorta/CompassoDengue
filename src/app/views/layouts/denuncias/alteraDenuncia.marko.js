// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/denuncias/alteraDenuncia.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"> <title>Alterar Status de Denuncia</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"> </head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"\"></a> <div class=\"ml-auto\"><a class=\"btn btn-danger text-white\" href=\"/denuncia-consulta\">Voltar</a></div></nav></header><main class=\"container\"><h1 class=\"text-center display-4 py-4\">Altera Status da Denuncia</h1><form name=\"alteraCidadao\" method=\"post\" action=\"/denuncia-altera\"><input class=\"form-control\" type=\"hidden\" name=\"_method\" value=\"PUT\"><input class=\"form-control\" type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.id) +
    "\"><div class=\"mb-3\"><label for=\"nomeCidadao\">Nome</label><input type=\"text\" class=\"form-control\" id=\"nomeCidadao\" name=\"nomeCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.cidadao) +
    "\" readonly></div><div class=\"row\"><div class=\"col-md-6 mb-3\"><label for=\"cpfCidadao\">CPF</label><input type=\"text\" class=\"form-control\" id=\"cpfCidadao\" name=\"cpfCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.cpf) +
    "\" readonly></div><div class=\"col-md-6 mb-3\"><label for=\"telefoneCidadao\">Telefone</label><input type=\"text\" class=\"form-control\" id=\"telefoneCidadao\" name=\"telefoneCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.telefone) +
    "\" readonly></div></div><h5 class=\"mb-3 text-center\">Endereço do local da denuncia</h5><div class=\"row\"><div class=\"col-md-6 mb-3\"><label for=\"ruaDenuncia\">Rua</label><input type=\"text\" class=\"form-control\" id=\"ruaDenuncia\" name=\"ruaDenuncia\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.rua) +
    "\" readonly></div><div class=\"col-md-6 mb-3\"><label for=\"bairroDenuncia\">Bairro</label><input type=\"text\" class=\"form-control\" id=\"bairroDenuncia\" name=\"bairroDenuncia\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.bairro) +
    "\" readonly></div></div><div class=\"row\"><div class=\"col-md-4 col-lg-2\"><select class=\"custom-select form-group\" name=\"status\"><option>" +
    marko_escapeXml(data.denuncia.status) +
    "</option><option value=\"Pendente\">Pendente</option><option value=\"Em andanmento\">Em andanmento</option><option value=\"Resolvido\">Resolvido</option></select></div></div><div class=\"row\"><div class=\"col-md-4 col-lg-2\"><button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Salvar</button></div></div></form></main><footer class=\"pt-3\"><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"\"> <p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "54");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/denuncias/alteraDenuncia.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
