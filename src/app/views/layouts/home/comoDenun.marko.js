// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/home/comoDenun.marko",
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

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Como Denunciar?</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><div class=\"img-banner\"><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"></a><div class=\"ml-auto\"><a class=\"btn-principal\" href=\"/login\">Entrar</a><a class=\"btn-principal\" href=\"/cid-cadastro\">Cadastrar</a></div></nav><div class=\"container-fluid banner\"><h1>Como Denunciar</h1></div></div><nav class=\"navbar navbar-expand-sm\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navDenuncia\" aria-controls=\"navDenuncia\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill-rule=\"evenodd\" d=\"M4 7a1 1 0 100-2 1 1 0 000 2zm4.75-1.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z\"></path></svg></button><div class=\"collapse navbar-collapse\" id=\"navDenuncia\"><div class=\"container collapse navbar-collapse pt-2\" id=\"navbarNav\"><div class=\"nav justify-content-center\"><a class=\"caixa active\" href=\"/\">Home</a><a class=\"caixa\" href=\"/comoDenun\">Como Denunciar?</a><a class=\"caixa\" href=\"denuncia-cadastro\">Denunciar Agora</a></div></div></div></nav></header><main class=\"container\"><h1 class=\"font text-center display-4 py-4\">Para poder denunciar um local de risco, é necessário efetuar um cadastro no sistema, fornecendo as seguintes informações:</h1><ul class=\"list-group text-justify\"><li class=\"list-group-item list-group-item-action border border-primary mb-3\"><b>Nome completo</b> e <b>CPF</b> para a identificação e garantia da autenticidade das denúncias.</li><li class=\"list-group-item list-group-item-action border border-primary mb-3\"><b>Telefone</b> e <b>E-mail</b> para contato e/ou envio de informações sobre o caso denunciado.</li><li class=\"list-group-item list-group-item-action border border-primary mb-3\">Uma <b>senha</b> que servirá para garantir que apenas o dono da conta a acesse.</li><li class=\"list-group-item list-group-item-action border border-primary mb-3\">Após realizar o <b>cadastro</b>, é preciso <b>iniciar uma sessão</b> com sua conta no sistema, utilizando seu <b>E-mail</b> como login e inserindo a senha cadastrada anteriormente.</li><li class=\"list-group-item list-group-item-action border border-primary mb-3\">Isto feito, basta clicar em <b>“Denunciar Agora”</b> e já chegará à <b>página de denúncias</b></li><p class=\"font text-center display-4 py-3\">Página de Denúncia</p><li class=\"list-group-item border border-info mb-3 text-info\">Nesta tela, deverão ser preenchidos os seguintes campos: <ul><li class=\"list-group-item list-group-item-action border border-info my-3\">Informações do Denunciante: <b>Nome, CPF</b> e <b>Telefone</b>.</li><li class=\"list-group-item list-group-item-action border border-info mb-3\">O endereço do local denunciado, contendo: <b>Rua/Avenida, número</b> e <b>bairro.</b></li><li class=\"list-group-item list-group-item-action border border-info mb-3\">O <b>Denunciante</b> tem como opção fazer alguma observação, como por exemplo, a respeito da gravidade da situação, da dificuldade de acesso ao local, ou da grande circulação de pessoas na área.</li><li class=\"list-group-item list-group-item-action border border-info mb-3\">Também é opcional a <b>anexação de imagens</b> que forem úteis como primeira avaliação por parte dos agentes de saúde e responsáveis pelo trâmite da denúncia.</li></ul></li></ul></main><footer><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "69");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/home/comoDenun.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
