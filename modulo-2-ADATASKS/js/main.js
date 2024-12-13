'use strict';

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

const tasksUl = document.querySelector('.js_tasksUl');

// Pintar las tareas del array en el listado

tasks.forEach((oneTask) => {
    tasksUl.innerHTML += `
      <li class="task ${oneTask.completed ? 'completed' : ''}">
        <input type="checkbox" ${oneTask.completed ? 'checked' : ''}>
        <p>${oneTask.name}</p>
      </li>
    `;
  });
        



 








