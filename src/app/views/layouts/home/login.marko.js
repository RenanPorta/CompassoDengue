// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/home/login.marko",
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

  out.w("<html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Entrar</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"\"></a><div class=\"ml-auto\"><button type=\"button\" class=\"btn btn-danger m-1\"><a class=\"text-white\" href=\"/home\">Voltar</a></button></div></nav></header><main><div class=\"container-xs\"><h1>Entrar</h1><form action=\"/login\" method=\"post\"><div class=\"form-group\"><label for=\"exampleInputEmail1\">Email address</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" name=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Password</label><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" name=\"exampleInputPassword1\"></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" name=\"exampleCheck1\"><label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form></div></main><footer><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/home/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
