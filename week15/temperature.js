///1. Создайте массив городов, например cities
const cities = ['Москва', 'Сеул', 'Токио', 'Нью-Йорк']
//2. Создайте пустой массив, который будет хранить температуры для каждого города
const temperature = []
//3. Используя цикл, пройдитесь по массиву городов и попросите пользователя 
//ввести температуру для каждого города, 
//используя функцию prompt() или другие способы ввода данных пользователем
let city;
for(city of cities) {
    let temp = prompt(`Какая погода сейчас в городе ${city}?`)
    temperature.push(Number(temp));
}
console.log(temperature) ///проверили что они попали в массив
const listCity = document.getElementById('list'); //нашли элемент список 
let newTemp;
for (newTemp of temperature); //перебор температур

//4. Создайте список, в котором будет отображаться информация о каждом городе 
//и его температуре. 
//Тут нужно будет использовать цикл для перебора элементов массивов, 
//создать элементы и добавить их в список, 
//указывая название города и соответствующую температуру.
const createItem = () => {
    for (let i = 0; i < cities.length; i++) {
    const newDegree = document.createElement('li');
    newDegree.textContent = `Температура в городе ${cities[i]}: ${temperature[i]}°C.`;
    listCity.append(newDegree)
    }
}

//5. Найдите максимальную и минимальную температуру из массива с температурами. 
//Для этого создайте две переменные и инициализируйте их значениями, 
//которые гарантированно будут больше и меньше любой возможной температуры 
//соответственно.
let maxTemp = Math.max(...temperature);
const createItemMax = () => {
    for (let i = 0; i < 1; i++) {
    const maxTemperature = document.createElement('li');
    maxTemperature .textContent = `Максимальная температура: ${maxTemp}°C.`;
    listCity.append(maxTemperature)
    }
}

let minTemp = Math.min(...temperature);
const createItemMin = () => {
    for (let i = 0; i < 1; i++) {
    const minTemperature = document.createElement('li');
    minTemperature .textContent = `Минимальная температура: ${minTemp}°C.`;
    listCity.append(minTemperature)
    }
}

//6. Выведите информацию с погодой в разных городах, а также максимальной 
//и минимальной температурой на экран

createItem()
createItemMax()
createItemMin()
//Подсказки:

//1. Для преобразования строки в число используйте Number()
//2. Свойство length возвращает количество элементов в массиве
//3. Для взаимодействия с DOM вам понадобятся методы создания элементов, 
//добавления в родительский элемент и установки текстового значения
