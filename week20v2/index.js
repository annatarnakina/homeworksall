document.getElementById('goBtn').addEventListener('click', function (evt) {
    evt.preventDefault(); // Отменяем действие по умолчанию для события submit
    getResultSW()
    form.reset()
});
document.getElementById('idSpecie').addEventListener('click', function (evt) {
    valueCheck()
});


const resultSearch = document.getElementById('forResult');
const resultError = document.getElementById('forError');
const idSpecie = document.getElementById('idSpecie');
const speciesSW = document.getElementById('speciesSW');
const form = document.getElementById('formSerch');

resultError.textContent = '';
resultSearch.textContent = '';

function valueCheck(){
    resultSearch.textContent = '';
    resultError.textContent = '';
    try {
        if (idSpecie.value < 1 || idSpecie.value > 10) {
            throw new Error('Выберете значение от 1 до 10')
        }
        resultSearch.textContent = 'Загрузка...'
    } catch (error) {
        resultError.textContent = error.message
    }
}


function getResultSW(){
        fetch(`https://swapi.py4e.com/api/${speciesSW.value}/${idSpecie.value}/`)
            .then((response) => {
            if (!response.ok) {
            return Promise.reject(response.status);
        }
        return response.json();
})

        .then((data)=>{
            resultSearch.textContent = JSON.stringify('Имя: '+data.name+', дата создания: '+data.created);
        })

        .catch((error)=> {
            resultSearch.textContent = '';
            resultError.textContent = 'Ошибка получения данных';
        })
    }
