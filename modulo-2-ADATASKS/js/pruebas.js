// Sacar el checkbox marcado y tachar la tarea si está completada


const statusTask = (taskDone, checked) => {

    if (completed === true) {

        taskDone.classList.add('completed');
    }

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
    tasks.push({ name: taskArea, completed: false, id: 0 });

}




// Filtrar las tareas

const filterTasks = (ev) => {
    const filteredTasks = tasks.filter((oneTask) =>
        oneTask.name.toLocaleLowerCase().includes(inputSearch.value)  // se pone el includes para poder buscar solo una parte de la tarea
    )

    renderTasks(filteredTasks)
}


