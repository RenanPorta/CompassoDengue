let tabelafuncionario = document.querySelector('#funcionarios');
tabelafuncionario.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let funcionarioId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/funcionario/${funcionarioId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#funcionario_${funcionarioId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});