// Para añadir tarea
const handleClick = (ev) => {
    ev.preventDefault();

    const taskArea = taskAreaInput.value;
    tasks.push({ name: taskArea, completed: false, id: 0 });

}


