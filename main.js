//Doc
let tasks = [
    "Выучить JavaScrip",
    "Выучить Angular 4",
    "Выучить HTML"
];
    
let ul = document.querySelector('.list-group');

function generateList(tasksArray) {

    clearList();

    for ( let i = 0; i < tasks.length; i++ ) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }
}

function listTemplate(task) {
    //Create list item
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex';
    //Create tag fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'far fa-trash-alt delete-item ml-auto';

    //Append delete icon to li
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function addList(list) {
    tasks.unshift(list);
    generateList(tasks)
}


generateList(tasks);

let btn = document.querySelector('.clear-btn');

function onClick(e){
    console.log(e);
}

btn.addEventListener('click', onClick);