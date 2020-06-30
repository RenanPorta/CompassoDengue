// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/home/indexCidadao.marko",
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

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Compasso Dengue</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/cor-principal.css\"><link rel=\"stylesheet\" href=\"/estatico/css/header.css\"><link rel=\"stylesheet\" href=\"/estatico/css/footer.css\"><link rel=\"stylesheet\" href=\"/estatico/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><div class=\"img-banner\"><nav class=\"color nav navbar-expand-sm justify-content-between\"><img class=\"logo-header rounded p-3\" src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"><div class=\"nav justify-content-center align-self-center\"><a class=\"btn-principal nav-item btn m-1\" href=\"/sair\">Sair</a> </div> </nav><div class=\"container-fluid banner\"><h1>Todos contra a dengue</h1></div></div><div><nav class=\"menu\"><ul><li class=\"lista-menu\"> <a class=\"caixa active\" href=\"/\">Home</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/comoDenun\">Como Denunciar?</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"denuncia-cadastro\">Denunciar Agora</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/denuncia-consulta\">Lista Denuncias</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/cidadao-consulta\">Meus Dados</a></li></ul></nav></div></header><main class=\"container\"><h1 class=\"font text-center display-4 py-4\">Dengue: sintomas, causas, tratamento e prevenção</h1><p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cum quasi accusamus corrupti est adipisci ipsa necessitatibus, ipsam architecto magni porro laudantium dolorum, doloribus quae! Consectetur cum optio libero voluptatibus?</p><img src=\"/estatico/img/castelo.jpg\" class=\"img-1 img-fluid float-left mr-3\"><p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia quos odit eligendi excepturi voluptas dignissimos! Provident excepturi eius nemo id, suscipit sint quisquam voluptatem vero explicabo in, sequi vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt a perspiciatis quis laborum, ullam sunt explicabo maiores minima consectetur quos eum provident voluptas veritatis rerum omnis velit officiis laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum, aut impedit nostrum inventore placeat numquam facere dolor ratione quibusdam veniam praesentium, nobis expedita! Voluptatibus facere veniam deleniti fugiat nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia quos odit eligendi excepturi voluptas dignissimos! Provident excepturi eius nemo id, suscipit sint quisquam voluptatem vero explicabo in, sequi vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt a perspiciatis quis laborum, ullam sunt explicabo maiores minima consectetur quos eum provident voluptas veritatis rerum omnis velit officiis laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum, aut impedit nostrum inventore placeat numquam facere dolor ratione quibusdam veniam praesentium, nobis expedita! Voluptatibus facere veniam deleniti fugiat nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia quos odit eligendi excepturi voluptas dignissimos! Provident excepturi eius nemo id, suscipit sint quisquam voluptatem vero explicabo in, sequi vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt a perspiciatis quis laborum, ullam sunt explicabo maiores minima consectetur quos eum provident voluptas veritatis rerum omnis velit officiis laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum, aut impedit nostrum inventore placeat numquam facere dolor ratione quibusdam veniam praesentium, nobis expedita! Voluptatibus facere veniam deleniti fugiat nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia quos odit eligendi excepturi voluptas dignissimos! Provident excepturi eius nemo id, suscipit sint quisquam voluptatem vero explicabo in, sequi vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt a perspiciatis quis laborum, ullam sunt explicabo maiores minima consectetur quos eum provident voluptas veritatis rerum omnis velit officiis laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum, aut impedit nostrum inventore placeat numquam facere dolor ratione quibusdam veniam praesentium, nobis expedita! Voluptatibus facere veniam deleniti fugiat nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officia quos odit eligendi excepturi voluptas dignissimos! Provident excepturi eius nemo id, suscipit sint quisquam voluptatem vero explicabo in, sequi vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nesciunt a perspiciatis quis laborum, ullam sunt explicabo maiores minima consectetur quos eum provident voluptas veritatis rerum omnis velit officiis laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum, aut impedit nostrum inventore placeat numquam facere dolor ratione quibusdam veniam praesentium, nobis expedita! Voluptatibus facere veniam deleniti fugiat nobis.</p><img src=\"/estatico/img/castelo.jpg\" class=\"img-2 img-fluid mb-3\"></main><footer><div class=\"container-fluid color text-center p-3\"><img class=\"logo-footer rounded img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"mb-1\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p>Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "48");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/home/indexCidadao.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
