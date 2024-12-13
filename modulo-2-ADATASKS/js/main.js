'use strict';

const tasksUl = document.querySelector('.js_tasksUl');

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


// Pintar las tareas del array en el listado

tasks.forEach((oneTask) => {

    tasksUl.innerHTML += `
      <li class="task ${oneTask.completed ? 'completed' : ''}">
        <input type="checkbox" ${oneTask.completed ? 'checked' : ''}>
        <p>${oneTask.name}</p>
      </li>
    `;
  });
        

// Sacar el checkbox marcado y tachar la tarea si está completada

const statusTask = (taskDone, checked) => {

if (checked) {

    taskDone.classList.add('completed'); 
    return 'completed';
}

else {

    taskDone.classList.remove('completed'); 
    return '';
}

};







 








