// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/visitas/visita.marko",
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

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Visitas</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/cor-principal.css\"><link rel=\"stylesheet\" href=\"/estatico/css/header.css\"><link rel=\"stylesheet\" href=\"/estatico/css/footer.css\"><link rel=\"stylesheet\" href=\"/estatico/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"color nav navbar-expand-md justify-content-between\"><img class=\"logo-header rounded p-3\" src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"><div class=\"nav justify-content-center align-self-center\"><a class=\"btn-principal nav-item btn m-1\" href=\"/home\">Voltar</a> </div> </nav></header><main class=\"container\"><h1 class=\"font text-center display-4 py-4\">Visitas</h1><div class=\"row align-items-center justify-content-center\"><div class=\"col-8 col-md-3 btn btn-custom m-1\"><li><a class=\"nav-link text-white font-weight-bold\" href=\"/home\">Home</a></li></div><div class=\"col-8 col-md-3 btn btn-custom m-1\"><li><a class=\"nav-link text-white font-weight-bold\" href=\"/visita-cadastro\">Nova visita</a></li></div><div class=\"col-8 col-md-3 btn btn-custom m-1\"><li><a class=\"nav-link text-white font-weight-bold\" href=\"/visita-consulta\">Consultar visitas</a></li></div></div></main><footer><div class=\"container-fluid color text-center p-3\"><img class=\"logo-footer rounded img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"mb-1\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p>Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/visitas/visita.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
