let botaoAdd = document.getElementById('botao');
let input = document.getElementById('input-tarefa');
let tarefas = document.getElementById('tarefas');

botaoAdd.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        let tarefa = document.createElement('p');
        tarefa.classList.add('tarefa');
        tarefa.innerText = '- ' + input.value;
        tarefas.appendChild(tarefa);
        input.value = '';

        tarefa.addEventListener('click', function () {
            tarefa.classList.toggle('marcada');
        });
    }
});