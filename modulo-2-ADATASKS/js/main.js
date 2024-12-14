'use strict';

const tasksUl = document.querySelector('.js_tasksUl');
const inputAdd = document.querySelector('js_inputAdd');
const btnAdd = document.querySelector('.js_btnAdd');

const inputSearch = document.querySelector('.js_inputSearch');
const btnSearch = document.querySelector('.js_btnSearch');

// Array enunciado ejercicio 

const tasksArray = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];

const renderTasks = (selectedTasks) => {

    tasksUl.innerHTML = '';
}

// Pintar las tareas del array en el listado

for (const oneTask of tasksArray) {

    tasksUl.innerHTML += `
      <li class="task ${oneTask.completed ? 'tachado' : ''}">
        <input class="task input" type="checkbox" ${oneTask.completed ? 'checked' : ''}>
        <p>${oneTask.name}</p>
      </li>
    `;
    

};


// Sacar el checkbox marcado y tachar la tarea si está completada


const statusTask = (taskDone, checked) => {

    if (completed === true) {

        taskDone.classList.add('completed');    }

    else {

        taskDone.classList.remove('completed');

    }

};




// Vídeo tutoría:
/*
for (const oneTask of selectedTasks => {

    const taskHTML = `
      <li class="task ${oneTask.completed ? 'completed' : ''}">
        <input type="checkbox" ${oneTask.completed ? 'checked' : ''}>
        <p>${oneTask.name}</p>
      </li>
    `;

    tasksUl.innerHTML += taskHTML;
});
*/












// Para añadir tarea
const handleClick = (ev) => {
    ev.preventDefault();

    const taskArea = taskAreaInput.value;
    tasks.push({name:taskArea, completed: false, id: 0});
    
}




// Filtrar las tareas

const filterTasks = (ev) => {
    const filteredTasks = tasks.filter((oneTask) =>
        oneTask.name.toLocaleLowerCase().includes(inputSearch.value)  // se pone el includes para poder buscar solo una parte de la tarea
    )

    renderTasks(filteredTasks)
}


// SECCIÓN DE EVENTOS

// Evento click para agregar una tarea 

// Evento click para buscar la tarea 







// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA












