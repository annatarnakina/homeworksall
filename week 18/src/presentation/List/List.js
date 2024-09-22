import {taskRepository} from "../../infrastructure/LocalStorageTaskRepository";
import {taskAdded} from "../../application/events";
import {taskCleaned} from "../../application/events";
import './styles.sass';

const list = document.createElement('div');

export function dispatchTaskAdded() {
    list.dispatchEvent(taskAdded);
}

export function List() {
    const tasks = taskRepository.read();

    const toggleReady = (task) => () => {
    task.toggleReady();
    taskRepository.save(tasks);
    }

    const clearTasks = () => {
    tasks.clear();
    taskRepository.save(tasks);
    list.dispatchEvent(taskCleaned);
    }

    function renderList() {
    list.innerHTML = '';
    const items = document.createElement('ul');
    const title = document.createElement('h2');
    const clearButton = document.createElement('button');

    items.className = 'list__items';

    title.innerText = 'Список задач';
    clearButton.innerText = 'Очистить';

    tasks.taskList.forEach(task => {
        const item = document.createElement('li');
        const checkbox = document.createElement('input');

        item.className = 'list__row';

        checkbox.type = 'checkbox';
        checkbox.checked = task.taskDto.isReady;
        item.innerText = task.taskDto.content;

        checkbox.addEventListener('change', toggleReady(task));

        item.appendChild(checkbox);
        items.appendChild(item);
    });

    clearButton.addEventListener('click', clearTasks);

    list.appendChild(title);
    list.appendChild(items);
    list.appendChild(clearButton);
    }

    list.addEventListener('taskAdded', () => {
    renderList();
    });

    list.addEventListener('taskCleaned', () => {
    renderList();
    });

    renderList();

    return list;
}
