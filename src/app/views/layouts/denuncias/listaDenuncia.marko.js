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

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Listagem de Denúncia</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/cor-principal.css\"><link rel=\"stylesheet\" href=\"/estatico/css/header.css\"><link rel=\"stylesheet\" href=\"/estatico/css/footer.css\"><link rel=\"stylesheet\" href=\"/estatico/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"color nav navbar-expand-md justify-content-between\"><img class=\"logo-header rounded p-3\" src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"><div class=\"nav justify-content-center align-self-center\"><a class=\"btn-principal nav-item btn m-1\" href=\"/home\">Voltar</a> </div> </nav></header><main class=\"container\">");

  if (data.semDenuncia) {
    out.w("<div><h1 class=\"font text-center display-4 py-4\">Nenhum cadastro de denúncia foi encontrado!</h1></div>");
  }

  if (data.comDenuncia) {
    out.w("<div><h1 class=\"font text-center display-4 py-4\">Listagem de Denúncia</h1><table class=\"table table-bordered table-hover table-responsive\" id=\"denuncias\"><thead class=\"thead-light\"><tr class=\"text-center\"><th>ID</th><th>Nome Cidadão</th><th>CPF</th><th>Telefone</th><th>Rua</th><th>Bairro</th><th>Imagem</th><th>Observações</th><th>Status</th>");

    if (data.administrador) {
      out.w("<div><th>Alterar Status</th></div>");
    }

    if (data.agenteSaude) {
      out.w("<div><th>Alterar Status</th></div>");
    }

    out.w("</tr></thead><tbody>");

    var for__40 = 0;

    marko_forEach(data.denuncias, function(denuncia) {
      var keyscope__41 = "[" + ((for__40++) + "]");

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
        "</td><td><a href=\"/denuncia-visualiza/" +
        marko_escapeXmlAttr(denuncia.id) +
        "\">Visualizar Imagem</a></td><td>" +
        marko_escapeXml(denuncia.observacoes) +
        "</td><td>" +
        marko_escapeXml(denuncia.status) +
        "</td>");

      if (data.administrador) {
        out.w("<div><td><a href=\"/denuncia-altera/" +
          marko_escapeXmlAttr(denuncia.id) +
          "\">Alterar Status</a></td></div>");
      }

      if (data.agenteSaude) {
        out.w("<div><td><a href=\"/denuncia-altera/" +
          marko_escapeXmlAttr(denuncia.id) +
          "\">Alterar Status</a></td></div>");
      }

      out.w("</tr>");
    });

    out.w("</tbody></table></div>");
  }

  out.w("</main><footer><div class=\"container-fluid color text-center p-3\"><img class=\"logo-footer rounded img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"mb-1\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p>Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "64");

  out.w("</body></html>");
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
