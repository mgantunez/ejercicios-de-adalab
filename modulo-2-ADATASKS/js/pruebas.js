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


