const inputTarefa = document.querySelector('#input-tarefa');
const btnTarefa = document.querySelector('#btn-tarefa');
const listTarefa = document.querySelector('#list-tarefa');


function exibirTarefa() {
    const localStorageTarefas = localStorage.getItem('tarefas');
    const listTarefaConvert = JSON.parse(localStorageTarefas);
    console.log(listTarefaConvert)
}

function salvarTarefa() {
    const liTarefa = document.querySelectorAll('li');
    const listTarefa = [];

    for (let tarefa of liTarefa) {
        let tarefaLimpa = tarefa.innerText.replace('Apagar', '')
        listTarefa.push(tarefaLimpa);
    }
    
    const listaJson = JSON.stringify(listTarefa);
    localStorage.setItem('tarefas', listaJson);
    
}

function criaBtnApagar() {
    const btnApagar = document.createElement('button'); 
    btnApagar.innerText = 'Apagar';
    btnApagar.classList.add('btnApagar');
    btnApagar.style.margin = '10px';
    return btnApagar;
}

function criaTarefa(tarefa) {
    const li = document.createElement('li');
    const btnApagar = criaBtnApagar();

    li.innerHTML = tarefa;
    li.appendChild(btnApagar);

    listTarefa.appendChild(li);


    salvarTarefa();
    exibirTarefa();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}


btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    
    criaTarefa(inputTarefa.value);
    limpaInput();
    salvarTarefa();
});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 && inputTarefa.value) {
        criaTarefa(inputTarefa.value);    
        limpaInput();
        salvarTarefa();
    }    
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('btnApagar')) {
        el.parentElement.remove();
    }
})
