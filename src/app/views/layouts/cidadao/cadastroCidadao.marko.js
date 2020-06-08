// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/cidadao/cadastroCidadao.marko",
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

  out.w("<html><script type=\"text/javascript\">\r\n        function validar(){\r\n            var senha = cadastraCidadao.senhaCidadao.value;\r\n            var confirmaSenha = cadastraCidadao.confirmaSenhaCidadao.value;\r\n\r\n            if(senha == \"\" || senha.length <= 5){\r\n                alert('Preencha o campo \"Senha\" com no minímo 6 caracteres');\r\n                cadastraCidadao.senhaCidadao.focus();\r\n                return false;\r\n            }\r\n\r\n            if(confirmaSenha == \"\"){\r\n                alert('Preencha o campo \"Confirmar Senha\"');\r\n                cadastraCidadao.confirmaSenhaCidadao.focus();\r\n                return false;\r\n            }\r\n\r\n            if(senha != confirmaSenha) {\r\n                alert('Senhas diferentes!');\r\n                cadastraCidadao.confirmaSenhaCidadao.focus();\r\n                return false;\r\n            }\r\n        }\r\n    </script><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Cidadao</h1><form name=\"cadastraCidadao\" method=\"post\" action=\"/cidadao\"><input type=\"hidden\" id=\"id\" name=\"id\"><br><div><label for=\"nomeCidadao\">Nome:</label><input type=\"text\" id=\"nomeCidadao\" name=\"nomeCidadao\"></div><br><div><label for=\"cpfCidadao\">CPF:</label><input type=\"text\" id=\"cpfCidadao\" name=\"cpfCidadao\"></div><br><div><label for=\"telefoneCidadao\">Telefone:</label><input type=\"text\" id=\"telefoneCidadao\" name=\"telefoneCidadao\"></div><br><div><label for=\"emailCidadao\">E-mail:</label><input type=\"text\" id=\"emailCidadao\" name=\"emailCidadao\"></div><br><div><label for=\"senhaCidadao\">Senha:</label><input type=\"password\" id=\"senhaCidadao\" name=\"senhaCidadao\"></div><br><div><label for=\"confirmaSenhaCidadao\">Confirmar Senha:</label><input type=\"password\" id=\"confirmaSenhaCidadao\" name=\"confirmaSenhaCidadao\"></div><br><input type=\"submit\" value=\"Cadastrar\" onclick=\"return validar()\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/cidadao/cadastroCidadao.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
