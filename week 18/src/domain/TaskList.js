export class TaskList {
    #tasks = [];

    constructor(tasks) {
        this.#tasks = tasks;
    }

    get taskList() {
        return [...this.#tasks];
    }

    addTask(task) {
        this.#tasks.push(task);
        }
    
    clear() {
        this.#tasks = [];
        }

    serialize() {
        return JSON.stringify(this.#tasks.map((task) => task.serialize()));
        }
}