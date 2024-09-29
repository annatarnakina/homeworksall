import {postApiService} from "../../infrastructure/PostApiService";
import {Post} from "../../domain/Post";
import {dispatchPostAdded} from "../List/List";

export function Form() {
    const form = document.createElement('form');
    const title = document.createElement('h2'); //Кого или что будем искать?
    const inputTitle = document.createElement('input'); // выпадающий список
    const inputNumber = document.createElement('input', type="number"); // инпут с цифрами
    const button = document.createElement('button');

    title.innerText = 'Кого или что будем искать?';
    button.innerText = 'Вперед!';

    button.addEventListener('click', async (e) => {
    e.preventDefault();

    const cleanTitleValue = inputTitle.value.trim();
    const cleanTextValue = inputText.value.trim();

    if (cleanTitleValue === '' || cleanTextValue === '') {
        return;
    }

    await postApiService.save(new Post(cleanTextValue, cleanTitleValue, 123));

    dispatchPostAdded();
    });

    form.appendChild(title);
    form.appendChild(inputTitle);
    form.appendChild(inputNumber);
    form.appendChild(button);

    return form;
}