const tdlContainer = document.querySelector('.tdl-container');
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');


addBtn.addEventListener('click', () => {

    const taskOutputContainer = document.createElement('div');
    taskOutputContainer.classList.add('task-output-container');
    tdlContainer.appendChild(taskOutputContainer);

    const taskOutput = document.createElement('input');
    taskOutput.disabled = true;
    taskOutput.classList.add('task-output');
    taskOutput.classList.add('pointer-events-none');
    taskOutput.placeholder = taskInput.value;
    taskOutputContainer.appendChild(taskOutput);

    const outputWall = document.createElement('div');
    outputWall.classList.add('task-output-wall');
    taskOutputContainer.appendChild(outputWall);

    taskOutputContainer.addEventListener('click', () => {
        taskOutput.classList.toggle('done');
    });

    taskInput.value = '';

    attachContextMenu(taskOutputContainer);
})

// Context Menu
let contextMenu = document.querySelector('.context-menu');
let currentTask = null;

function attachContextMenu(task) {
    task.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        contextMenu.classList.toggle('hidden');
        contextMenu.style.top = `${e.pageY}px`
        contextMenu.style.left = `${e.pageX}px`
        contextMenu.style.transform = `translate(-50%, -50%)`
        currentTask = task;
    })

}

// delete output with context menu button
let delOutput = document.querySelector('#delete-output');
delOutput.addEventListener('click', () => {
    contextMenu.classList.toggle('hidden');
    currentTask.remove();
})

// edit output with context menu button
let editOutput = document.querySelector('#edit-output');
editOutput.addEventListener('click', () => {
    let editTask = prompt('write edited task');
    if (editTask) {
        currentTask.firstChild.placeholder = editTask;
    }
});

// attach to exciting tasks 
document.querySelectorAll('.task-output').forEach(task => { attachContextMenu(task) });

// close context menu
document.addEventListener('click', () => { contextMenu.classList.add('hidden') });

// End of Context Menu