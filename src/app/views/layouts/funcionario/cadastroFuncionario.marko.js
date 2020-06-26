// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/funcionario/cadastroFuncionario.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/normalize.css\"><title>Cadastro de Funcionario</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light identidade-visual\"><a class=\"navbar-brand logo\" href=\"#\"><img src=\"/estatico/img/logo.png\" alt=\"Logo da prefeitura de Mogi Mirim\"></a><div class=\"ml-auto\"><a class=\"btn btn-danger text-white\" href=\"/home\">Voltar</a></div></nav></header><main class=\"container\"><h1 class=\"text-center display-4 py-4\">Cadastro de Funcionario</h1><form class=\"needs-validation\" name=\"cadastraFuncionario\" method=\"post\" action=\"/funcionario\" novalidate>");

  if (data.erroCpf) {
    out.w("<div><div><h5 class=\"erroSenhaEmail\">CPF invalido!</h5></div></div>");
  }

  if (data.erro) {
    out.w("<div><div><h5 class=\"erroSenhaEmail\">" +
      marko_escapeXml(data.erro.erro) +
      "</h5></div></div>");
  }

  out.w("<input class=\"form-control\" type=\"hidden\" id=\"id\" name=\"id\"><div class=\"form-row\"><div class=\"col-md-12 mb-3\"><label for=\"nomeFuncionario\">Nome</label><input type=\"text\" class=\"form-control\" id=\"nomeFuncionario\" name=\"nomeFuncionario\" placeholder=\"Insira o nome\" value=\"\" required><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um nome.</div></div></div><div class=\"form-row\"><div class=\"col-md-6 mb-3\"><label for=\"cpfFuncionario\">CPF</label><input type=\"text\" class=\"form-control\" id=\"cpfFuncionario\" name=\"cpfFuncionario\" placeholder=\"999.999.999-99\" value=\"\" pattern=\".{14}\" required> </div><div class=\"col-md-6 mb-3\"><label for=\"telefoneFuncionario\">Telefone</label><input type=\"text\" class=\"form-control\" id=\"telefoneFuncionario\" name=\"telefoneFuncionario\" placeholder=\"(99)99999-9999\" value=\"\" pattern=\".{15}\" required><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um Telefone Válido.</div></div></div><div class=\"form-row\"><div class=\"col-md-12 mb-3\"><label for=\"emailFuncionario\">E-mail</label><input type=\"email\" class=\"form-control\" id=\"emailFuncionario\" name=\"emailFuncionario\" placeholder=\"Insira o E-mail\" value=\"\" required><div class=\"valid-feedback\">Validado.</div><div class=\"invalid-feedback\">Insira um E-mail válido.</div></div></div><div class=\"row\"><div class=\"form-group col-md-6 mb-3\"><label for=\"senhaFuncionario\">Senha</label><input class=\"form-control\" type=\"password\" minlength=\"6\" id=\"senhaFuncionario\" name=\"senhaFuncionario\"></div><div class=\"form-group col-md-6 mb-3\"><label for=\"confirmaSenhaFuncionario\">Confirmar Senha</label><input class=\"form-control\" type=\"password\" minlength=\"6\" id=\"confirmaSenhaFuncionario\" name=\"confirmaSenhaFuncionario\"></div><div class=\"form-group col-md-4 mb3\"><label for=\"nivelAcesso\">Cargo</label><select id=\"nivelAcesso\" name=\"nivelAcesso\" class=\"form-control\"><option readonly>Selecione...</option><option value=\"Administrador\">Administrador</option><option value=\"Agente de Saúde\">Agente de Saúde</option></select></div></div><div class=\"row\"><div class=\"col-md-4 col-lg-2\"><button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" onclick=\"return validar()\" onsubmit=\"unmask()\">Cadastrar</button></div></div></form></main><footer><div class=\"jumbotron mb-0 identidade-visual\"><img class=\"logo-footer mx-auto d-block img-fluid\" src=\"/estatico/img/logo-2.png\" alt=\"Logo 2 da prefeitura de Mogi Mirim\"><p class=\"copyright text-center mb-0\">Copyright © 2020 | Todos os direitos reservados. Prefeitura de Mogi Mirim.</p><p class=\"copyright text-center\">Rua Doutor José Alves, 129 - Centro - 13800-900 - Mogi Mirim - SP - Brasil. Tel.19 3814.1000</p></div></footer><script src=\"/estatico/js/validacao-campos.js\"></script><script src=\"https://code.jquery.com/jquery-3.5.1.min.js\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js\"></script><script type=\"text/javascript\">\r\n\r\n            function unmask() {\r\n                $('#cpfFuncionario').unmask()\r\n                $('#telefoneFuncionario').unmask()\r\n            }\r\n\r\n            $(function () {\r\n                $('#cpfFuncionario').mask('000.000.000-00')\r\n                $('#telefoneFuncionario').mask('(00) 00000-0000')\r\n            })\r\n\r\n            function validar() {\r\n                var senha = cadastraFuncionario.senhaFuncionario.value;\r\n                var confirmaSenha = cadastraFuncionario.confirmaSenhaFuncionario.value;\r\n\r\n                if (senha == \"\" || senha.length <= 5) {\r\n                    alert('Preencha o campo \"Senha\" com no minímo 6 caracteres');\r\n                    cadastraFuncionario.senhaFuncionario.focus();\r\n                    return false;\r\n                }\r\n\r\n                if (confirmaSenha == \"\") {\r\n                    alert('Preencha o campo \"Confirmar Senha\"');\r\n                    cadastraFuncionario.confirmaSenhaFuncionario.focus();\r\n                    return false;\r\n                }\r\n\r\n                if (senha != confirmaSenha) {\r\n                    alert('Senhas diferentes!');\r\n                    cadastraFuncionario.confirmaSenhaFuncionario.focus();\r\n                    return false;\r\n                }\r\n            }        \r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "72");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/funcionario/cadastroFuncionario.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
