import {TaskList} from "../domain/TaskList";
import {Task} from "../domain/Task";

const TASKS_KEY = 'taskList';

class LocalStorageTaskRepository {
    #cache;
    #storage = window.localStorage;

    save(taskList) {
        this.#storage.setItem(TASKS_KEY, taskList.serialize());
    }

    read() {
    if (!this.#cache) {
        const tasks = this.#storage.getItem(TASKS_KEY);

        if (!tasks) {
            this.#cache = new TaskList([]);
        } else {
        this.#cache = new TaskList(JSON.parse(tasks).map(
            ({content, isReady, createdAt}) => new Task(content, isReady, createdAt))
        );
        }
    }

    return this.#cache;
    }
}

export const taskRepository = new LocalStorageTaskRepository();
