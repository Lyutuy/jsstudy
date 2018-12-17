//Doc
let tasks = [
    "Выучить JavaScrip",
    "Выучить Angular 4",
    "Выучить HTML"
];

let ul = document.querySelector('.list-group');

function generateList(tasksArray) {
    for ( let i = 0; i < tasks.length; i++ ) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }
}

function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item';

    return li;
}


function addList(list) {
    tasks.push(list);
    generateList(tasks)
}
generateList(tasks);
