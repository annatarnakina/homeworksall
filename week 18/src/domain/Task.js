export class Task {
    #content;
    #isReady = false;
    #createdAt;

    constructor(content) {
        this.#content = content;
        this.#createdAt = new Date().getTime();
    }

    get taskDto() {
        return {
            content: this.#content,
            isReady: this.#isReady,
        }
    }

    serialize() {
        return {
            content: this.#content,
            isReady: this.#isReady,
            createdAt: this.#createdAt,
        };
        }
    
        toggleReady() {
        this.#isReady = !this.#isReady;
        }
}