'use strict';

// SECCIÓN DE LOS QUERY SELECTOR

const tasksUl = document.querySelector('.js_tasksUl');
const filterInput = document.querySelector('.js_filterInput');


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
        <li class= "js_taskLi ${oneTask.completed ? 'task completed' : 'task'}" id="${oneTask.id}">
            <input class="task input" type="checkbox" name="task" ${oneTask.completed ? 'checked' : ''}>
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

    }

    tasksUl.innerHTML = html;

    const taskLi = document.querySelectorAll('.js_taskLi');

    for (const li of taskLi) {

        li.addEventListener('click', handleClickTask)

    }
};

const handleClickTask = (ev) => {

    const clickedId = parseInt(ev.currentTarget.id);

    // Localizar el obj de la tarea que se clicó

    const oneTask = tasks.find(oneTask => oneTask.id === clickedId);

    // Cambiar el obj.completed de esa tarea

    if (oneTask.completed) {

        oneTask.completed = false;

    }

    else {

        oneTask.completed = true;

    }

    // Volver a pintar todas
    renderAllTasks();

};

const handleFilterInput = (ev) => {

    filterInput.value
};

// SECCIÓN DE EVENTOS

filterInput.addEventListener('input', handleFilterInput);



// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

renderAllTasks();










