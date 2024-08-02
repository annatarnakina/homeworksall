const birthDate = document.getElementById('start');
const resultInput = document.getElementById('result');
function calculateDaysBeforeBirthDay() {
    const birthDateStr = birthDate.value;
    ///console.log(birthDateStr);
    const birthDateTimeSt = Date.parse(birthDateStr);
    ///console.log(birthDateTimeSt)
    const currentTimeSt = Date.now();
    ///console.log(currentTimeSt);
    const dateDifference = birthDateTimeSt - currentTimeSt;
    //console.log(dateDifference);
    const dayBefore = Math.floor(dateDifference/(1000*60*60*24));
    ///console.log(dayBefore)
    function check(){
    if(birthDate.value == '') {
        resultInput.textContent = 'Пожалуйста, введите дату рождения';
        resultInput.style.color = 'red';
    }
    else {
        resultInput.textContent = `До вашего дня рождения осталось: ${dayBefore} дня`;
        resultInput.style.color = 'black';
    }
    }
    check()
}