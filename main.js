//Doc
let tasks = [
    "Выучить JavaScrip",
    "Выучить Angular 4",
    "Выучить HTML"
];

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];

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
    li.className = 'list-group-item d-flex align-items-center';
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


function deleteListItem(target) {
    let parent = target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
}

ul.addEventListener('click', function (e) {
    if ( e.target.classList.contains('delete-item') ) {
        deleteListItem(e.target);
    }
});
form.addEventListener('submit', function (e) {
    console.log('submit');
});

generateList(tasks);
