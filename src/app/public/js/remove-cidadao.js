let tabelaCidadao = document.querySelector('#cidadaos');
tabelaCidadao.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let cidadaoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/cidadao/${cidadaoId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#cidadao_${cidadaoId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});