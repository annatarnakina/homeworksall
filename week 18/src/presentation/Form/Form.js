import {taskRepository} from "../../infrastructure/LocalStorageTaskRepository";
import {Task} from "../../domain/Task";
import {dispatchTaskAdded} from "../List/List";

export function Form() {
    const form = document.createElement('form');
    const title = document.createElement('h2');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const tasks = taskRepository.read();

    title.innerText = 'Добавить задачу';
    button.innerText = 'Добавить';

    button.addEventListener('click', (e) => {
    e.preventDefault();

    const cleanValue = input.value.trim();

    if (cleanValue === '') {
        return;
    }

    tasks.addTask(new Task(cleanValue));
    dispatchTaskAdded();
    taskRepository.save(tasks);
    });

    form.appendChild(title);
    form.appendChild(input);
    form.appendChild(button);

    return form;
}