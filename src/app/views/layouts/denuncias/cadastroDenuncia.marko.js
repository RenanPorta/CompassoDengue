// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app-dengue$1.0.0/src/app/views/layouts/denuncias/cadastroDenuncia.marko",
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

  out.w("<html><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script><script>\r\n        function previewImagem(){\r\n            var imagem = document.querySelector('input[name=imagemDenuncia]').files[0];\r\n            var preview = document.querySelector('img')\r\n\r\n            var reader = new FileReader();\r\n\r\n            reader.onloadend = function(){\r\n                preview.src = reader.result;\r\n            }\r\n\r\n            if(imagem){\r\n                reader.readAsDataURL(imagem);\r\n            }else{\r\n                preview.src = \"\";\r\n            }\r\n        }\r\n    </script><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Denuncia</h1><form method=\"post\" action=\"/denuncia\"><input type=\"hidden\" id=\"id\" name=\"id\"><br><div><label for=\"nomeCidadao\">Nome:</label><input type=\"text\" id=\"nomeCidadao\" name=\"nomeCidadao\"></div><br><div><label for=\"cpfCidadao\">CPF:</label><input type=\"text\" id=\"cpfCidadao\" name=\"cpfCidadao\"></div><br><div><label for=\"telefoneCidadao\">Telefone:</label><input type=\"text\" id=\"telefoneCidadao\" name=\"telefoneCidadao\"></div><br><h3>Endereço do local da denuncia</h3><div><label for=\"ruaDenuncia\">Rua:</label><input type=\"text\" id=\"ruaDenuncia\" name=\"ruaDenuncia\"></div><br><div><label for=\"bairroDenuncia\">Bairro:</label><input type=\"text\" id=\"bairroDenuncia\" name=\"bairroDenuncia\"></div><br><h5>Selecionar apenas imagens .jpeg .jpg ou .png</h5><div><input type=\"file\" name=\"imagemDenuncia\" id=\"imagemDenuncia\" onchange=\"previewImagem()\"><br><img style=\"width: 300px; height: 300px;\"><br><br></div><br><div><label for=\"observacoesDenuncia\">Observações</label><textarea id=\"observacoesDenuncia\" name=\"observacoesDenuncia\"></textarea></div><br><input type=\"submit\" value=\"Cadastrar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "42");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app-dengue$1.0.0/src/app/views/layouts/denuncias/cadastroDenuncia.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
