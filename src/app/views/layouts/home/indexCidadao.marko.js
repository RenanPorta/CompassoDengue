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

  out.w("<header><div class=\"img-banner\"><nav class=\"color nav navbar-expand-sm justify-content-between\"><img class=\"logo-header rounded p-3\" src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"><div class=\"nav justify-content-center align-self-center\"><a class=\"btn-principal nav-item btn m-1\" href=\"/sair\">Sair</a></div></nav><div class=\"container-fluid banner\"><h1>Todos contra a dengue</h1></div></div><div><nav class=\"nav navbar-expand-sm container\"><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill-rule=\"evenodd\" d=\"M4 7a1 1 0 100-2 1 1 0 000 2zm4.75-1.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z\"></path></svg></button><div class=\"container collapse navbar-collapse\" id=\"navbar\"><ul class=\"text-center\"><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/home\">Home</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/comoDenun\">Como Denunciar?</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"denuncia-cadastro\">Denunciar Agora</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/denuncia-consulta\">Lista Denuncias</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/denuncia-minha\">Minhas Denuncias</a></li><li class=\"lista-menu\"> <a class=\"caixa\" href=\"/cidadao-consulta\">Meus Dados</a></li></ul></div></nav></div></header><main class=\"container text-justify\"><h1 class=\"font text-center display-4 py-4\">Dengue: sintomas, causas, tratamento e prevenção</h1><img src=\"/estatico/img/contraMosquito.png\" class=\"img-fluid float-left mr-3\" style=\"max-width: 35%\" alt=\"Todos contra a dengue\"><p>Dengue é uma doença febril grave causada por um arbovírus. Arbovírus são vírus transmitidos por picadas de insetos, especialmente os mosquitos. O transmissor (vetor) da dengue é o mosquito <strong>Aedes aegypti</strong>, que precisa de água parada para se proliferar. O período do ano com maior transmissão são os meses mais chuvosos de cada região, mas é importante manter a higiene e evitar água parada todos os dias, porque os ovos do mosquito podem sobreviver por um ano até encontrar as melhores condições para se desenvolver. A dengue é transmitida pela picada do mosquito Aedes aegypti. Após picar uma pessoa infectada com um dos quatro sorotipos do vírus, a fêmea pode transmitir o vírus para outras pessoas. Há registro de transmissão por transfusão sanguínea. Não há transmissão da mulher grávida para o feto, mas a infecção por dengue pode levar a mãe a abortar ou ter um parto prematuro, além da gestante estar mais exposta para desenvolver o quadro grave da doença, que pode levar à morte. Por isso, <strong>é importante combater o mosquito da dengue, fazendo limpeza adequada e não deixando água parada em pneus, vasos de plantas, garrafas, pneus ou outros recipientes que possam servir de reprodução do mosquito Aedes Aegypti</strong>.</p><h3 class=\"text-center pb-3\">Sintomas comuns causados pela dengue:</h3><ul class=\"list-group pb-3\"><li class=\"list-group-item list-group-item-action\">Dores musculares intensas</li><li class=\"list-group-item list-group-item-action\">Dor ao movimentar os olhos</li><li class=\"list-group-item list-group-item-action\">Mal estar</li><li class=\"list-group-item list-group-item-action\">Falta de apetite</li><li class=\"list-group-item list-group-item-action\">Manchas vermelhas pelo corpo</li><li class=\"list-group-item list-group-item-action\">Dor de cabeça</li><li class=\"list-group-item list-group-item-action\">Febre alta > 38.5 °C</li></ul><p>Na fase febril inicial da dengue, pode ser difícil diferenciá-la. A forma grave da doença inclui dor abdominal intensa e contínua, vômitos persistentes e sangramento de mucosas. Ao apresentar os sintomas, é importante procurar um serviço de saúde para diagnóstico e tratamento adequados, todos oferecidos de forma integral e gratuita por meio do Sistema Único de Saúde (SUS). Todas as faixas etárias são igualmente suscetíveis, porém as pessoas mais velhas têm maior risco de desenvolver dengue grave e outras complicações que podem levar à morte. O risco de gravidade e morte aumenta quando a pessoa tem alguma doença crônica, como diabetes e hipertensão, mesmo tratada. A dengue, na maioria dos casos, tem cura espontânea depois de 10 dias. A principal complicação é o choque hemorrágico, que é quando se perde cerca de 1 litro de sangue, o que faz com que o coração perca capacidade de bombear o sangue necessário para todo o corpo, levando a problemas graves em vários órgãos e colocando a vida da pessoa em risco.</p><div class=\"text-center\"><img src=\"/estatico/img/dengue-post-1.jpg\" class=\"img-fluid pb-3\" style=\"max-width: 80%\" alt=\"Banner dengue\"></div></main><footer><div class=\"container-fluid color text-center p-3\"><img class=\"logo-footer rounded img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"mb-1\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p>Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "66");

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
