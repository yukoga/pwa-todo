import { Task } from '/js/task.js';

// var tasks = [];

const mytask = new Task('hogefuga', 'completed');

const allTasks = document.querySelector("[data-list-all]");
const activeTasks = document.querySelector("[data-list-active]");
const completedTasks = document.querySelector("[data-list-completed");

console.log(allTasks);
console.log(activeTasks);
console.log(completedTasks);

function addToTaskList(task, targetList) {
    targetList = "[" + targetList + "]";
    const target = document.querySelector(targetList);
    try {
        target.lastElementChild.setAttribute(
            'class', 'list-group-item d-flex align-items-center border-0 mb-2 rounded');
        target.appendChild(task.createListItem(document));
    } catch (error) {
        console.error('Failed to append task.', error);
    }
}

function toggleVisibility(element) {
    // const element = document.querySelector(selector);
    if (element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function filterTaskList(status) {
    const source = document.querySelectorAll('[data-list-all] li');
    // targetList = '[' + targetList + ']' + ' li';
    if (status === 'completed') {
        Array.prototype.filter.call(source, (elm) => toggleVisivility(elm.childNodes[1].hasAttribute('checked')));
    } else {
        Array.prototype.filter.call(source, (elm) => toggleVisivility(!elm.childNodes[1].hasAttribute('checked')));
    }
    /*
    const source = document.querySelectorAll('[data-list-all] li');
    let li;
    if (targetList.indexOf('active') > -1) {
        li = Array.prototype.filter.call(source, elm => (!elm.childNodes[1].hasAttribute('checked')).setAttribute('style', 'display: none;'));
    } else {
        li = Array.prototype.filter.call(source, elm => elm.childNodes[1].hasAttribute('checked'));
    }

    targetList = "[" + targetList + "]";
    const target = document.querySelector(targetList);
    try {
        Array.prototype.forEach.call(li, elm => target.appendChild(elm));
    } catch (error) {
        console.error('Failed to append task.', error);
    }
    */
}

function removeFromTaskList() {
    console.log('Remove from targetList');
}

function addBtnHandler(event) {
    addToTaskList(mytask, 'data-list-all');
    event.preventDefault();
}

function activeTabHandler(event) {
    filterTaskList('active');
}

function completedTabHandler(event) {
    filterTaskList('completed');
}

document.querySelector('form button.btn').addEventListener('click', addBtnHandler);
// document.querySelector('section ul li a#ex1-tab-2').addEventListener('click', activeTabHandler);
// document.querySelector('section ul li a#ex1-tab-3').addEventListener('click', completedTabHandler);
