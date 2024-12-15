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

/*
    Esta función genera el HTML (li>input) de una task 
    que recibe como objeto (oneTask) en el parámetro.

    Uso el ternario por no poner un if / else 
    y repetir todo el html y de nuevo poner el return.
*/


const renderOneTask = (oneTask) => {

    const html = `
        <li class= "${oneTask.completed ? 'task completed' : 'task'}">
        <input class="task input" type="checkbox" name="task" id="task">
         <p>${oneTask.name}</p>
        </li>`;

    return html;

};

/*
    Genera y pone en la página el código HTML de todas 
    las tareas incluidas en el array de tasks
*/

const renderAllTasks = () => {

    let html = '';

    for (const oneTask of tasks) {

        html += renderOneTask(oneTask);

        tasksUl.innerHTML = html;

    }
};

// SECCIÓN DE EVENTOS

// Evento click para agregar una tarea 

// Evento click para buscar la tarea 







// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

renderAllTasks();










