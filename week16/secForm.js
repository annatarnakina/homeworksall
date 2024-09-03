//3. Используя JavaScript, добавьте обработчик события отправки формы (submit), 
//который будет выполнять следующие действия:

// - Отменять действие по умолчанию для события submit
// - Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
// Кнопка отправки должна быть неактивна (disabled), 
//пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями.
// - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму.
// 4. Бонусное задание: реализуйте дополнительные обработчики событий focus и blur для каждого поля

const form = document.forms.registrationForm;
const btn = form.elements.submitBtn;
const input = form.elements.input;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const professionInput = form.elements.profession;
const passwordInput = form.elements.password;
const agreeTermsCheckbox = document.getElementById("consent");
//сообщения об ошибках
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const professionError = document.getElementById('professionError');
const passwordError = document.getElementById('passwordError');
const consentError = document.getElementById('consentError');

        //Функция валидации email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простой regex для проверки email
            return re.test(String(email).toLowerCase());
        }

        // Функция валидации возраста
        function validateAge(age) {
            return age > 0 && age <= 100;
        }
        // Функция валидации пароля
        function validatePassword(password) {
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
            // Проверка всех условий
            if (password.length < minLength) {
                console.log('Пароль должен содержать минимум 8 символов.');
                return false;
            }
            if (!hasUpperCase) {
                console.log('Пароль должен содержать хотя бы одну заглавную букву.');
                return false;
            }
            if (!hasLowerCase) {
                console.log('Пароль должен содержать хотя бы одну строчную букву.');
                return false;
            }
            if (!hasNumber) {
                console.log('Пароль должен содержать хотя бы одну цифру.');
                return false;
            }
            if (!hasSpecialChar) {
                console.log('Пароль должен содержать хотя бы один специальный символ.');
                return false;
            }
        
            // Если все условия выполнены
            console.log('Пароль валиден!');
            return true;
        }

form.addEventListener('input', function () {
    let hasError = false;

    // Скрываем предыдущие сообщения об ошибках
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    ageError.style.display = 'none';
    professionError.style.display = 'none';
    passwordError.style.display = 'none';
    consentError.style.display = 'none';

    // Валидация имени
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Введите имя пользователя.';
        nameError.style.display = 'block';
        hasError = true;
    }

    // Валидация email
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Введите корректный email.';
        emailError.style.display = 'block';
        hasError = true;
    }

    // Валидация возраста
    if (!validateAge(ageInput.value)) {
        ageError.textContent = 'Введите корректный возраст.';
        ageError.style.display = 'block';
        hasError = true;
    }

    // Валидация профессии
    if (professionInput.value.trim() === '') {
        professionError.textContent = 'Выберите профессию.';
        professionError.style.display = 'block';
        hasError = true;
    }

    // Валидация пароля
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Пароль должен быть не менее 8 символов, содержать хотя бы одну цифру, одну заглавную букву и один специальный символ.';
        passwordError.style.display = 'block';
        hasError = true;
    }

    // Валидация согласия
    if (!agreeTermsCheckbox.checked) {
        consentError.textContent = 'Необходимо согласие с условиями.';
        consentError.style.display = 'block';
        hasError = true;
    }

    // Проверяем hasError
    console.log('hasError:', hasError);

    // Активация кнопки отправки, если нет ошибок
    btn.disabled = hasError;
});

form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // Отменяем действие по умолчанию для события submit
    alert('Форма успешно отправлена!');
    console.log(nameInput.value + ', ' + emailInput.value + ', ' + ageInput.value + ', ' + professionInput.value + ', ' + ', ' + passwordInput.value + '. ')
    form.reset()
});