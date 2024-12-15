'use strict';

// SECCIÓN DE LOS QUERY SELECTOR

const tasksUl = document.querySelector('.js_tasksUl');
const inputAdd = document.querySelector('js_inputAdd');
const btnAdd = document.querySelector('.js_btnAdd');

const inputSearch = document.querySelector('.js_inputSearch');
const btnSearch = document.querySelector('.js_btnSearch');


// SECCIÓN DE LOS DATOS DE APLICACIÓN

// Array enunciado ejercicio 

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];


// SECCIÓN DE FUNCIONES

const renderOneTask = (taskName) => { }


for (const oneTask of tasks) {

    const html = `
      <li class="task">
        <input class="task input" type="checkbox" name="task" id="task">
        <p>${taskName}</p>
      </li>`;

    return html;

};

const renderAllTasks = () => {

    let allTasksHTML = '';
    tasksUl.innerHTML = allTasksHTML;

}

// SECCIÓN DE EVENTOS

// Evento click para agregar una tarea 

// Evento click para buscar la tarea 







// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

renderAllTasks();










