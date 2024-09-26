function FetchInfo () {

    fetch('https://jsonplaceholder.typicode.com/posts')

    .then((res) => {
        return res.json()
    })
    .then((data) => {
        data.forEach((item) => {
        const titlePost = document.createElement("h2");
        titlePost.textContent = `Заголовок: ${item.title}`;
        document.body.appendChild(titlePost);

        const paragraphPost = document.createElement("p");
        paragraphPost.textContent = `Статья: ${item.body}`;
        document.body.appendChild(paragraphPost);
    });
        })

    .catch((err) => {
        paragraphPost.textContent = 'Ошибка. Запрос не выполнен'
    })
} 

FetchInfo()