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

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Alterar Status de Denúncia</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/cor-principal.css\"><link rel=\"stylesheet\" href=\"/estatico/css/header.css\"><link rel=\"stylesheet\" href=\"/estatico/css/footer.css\"><link rel=\"stylesheet\" href=\"/estatico/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"color nav navbar-expand-md justify-content-between\"><img class=\"logo-header rounded p-3\" src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"><div class=\"nav justify-content-center align-self-center\"><a class=\"btn-principal nav-item btn m-1\" href=\"/denuncia-consulta\">Voltar</a> </div> </nav></header><main class=\"container\"><h1 class=\"font text-center display-4 py-4\">Altera Status da Denúncia</h1><form name=\"alteraCidadao\" method=\"post\" action=\"/denuncia-altera\"><input class=\"form-control\" type=\"hidden\" name=\"_method\" value=\"PUT\"><input class=\"form-control\" type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.id) +
    "\"><div class=\"row\"><div class=\"col-md-6 form-group\"><label for=\"nomeCidadao\">Nome</label><input type=\"text\" class=\"form-control input-form\" id=\"nomeCidadao\" name=\"nomeCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.cidadao) +
    "\" readonly></div><div class=\"col-md-6 form-group \"><label for=\"cpfCidadao\">CPF</label><input type=\"text\" class=\"form-control input-form\" id=\"cpfCidadao\" name=\"cpfCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.cpf) +
    "\" readonly></div><div class=\"col-md-6 form-group \"><label for=\"telefoneCidadao\">Telefone</label><input type=\"text\" class=\"form-control input-form\" id=\"telefoneCidadao\" name=\"telefoneCidadao\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.telefone) +
    "\" readonly></div></div><h5 class=\"mb-3 text-center\">Endereço do local da denuncia</h5><div class=\"row\"><div class=\"col-md-6 form-group\"><label for=\"ruaDenuncia\">Rua</label><input type=\"text\" class=\"form-control input-form\" id=\"ruaDenuncia\" name=\"ruaDenuncia\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.rua) +
    "\" readonly></div><div class=\"col-md-6 form-group\"><label for=\"bairroDenuncia\">Bairro</label><input type=\"text\" class=\"form-control input-form\" id=\"bairroDenuncia\" name=\"bairroDenuncia\" value=\"" +
    marko_escapeXmlAttr(data.denuncia.bairro) +
    "\" readonly></div></div><div class=\"row\"><div class=\"col-md-4 col-lg-2\"><select class=\"custom-select form-group\" name=\"status\"><option>" +
    marko_escapeXml(data.denuncia.status) +
    "</option><option value=\"Pendente\">Pendente</option><option value=\"Em andamento\">Em andamento</option><option value=\"Resolvido\">Resolvido</option></select></div></div><div class=\"row justify-content-center\"><div class=\"col-sm-6 col-md-6 col-lg-4\"><button type=\"submit\" class=\"btn btn-custom btn-lg btn-block\" onsubmit=\"unmask()\">Salvar</button></div></div></form></main><footer><div class=\"container-fluid color text-center p-3\"><img class=\"logo-footer rounded img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"mb-1\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p>Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.min.js\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js\"></script><script>\r\n            function unmask() {\r\n                $('#cpfCidadao').unmask()\r\n                $('#telefoneCidadao').unmask()\r\n            }\r\n\r\n            $(function () {\r\n                $('#cpfCidadao').mask('000.000.000-00')\r\n                $('#telefoneCidadao').mask('(00) 00000-0000')\r\n            })\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "59");

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
