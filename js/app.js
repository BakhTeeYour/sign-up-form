'use strict';

const formEl = document.querySelector('.sign-up__form');

const isValidatePassword = (input) => {
    const hasUpper = /[A-ZА-ЯЁ]/.test(input);
    const hasLower = /[a-z-а-яё]/.test(input);
    const hasNumber = /[0-9]/.test(input);
    const hasSymbol = /[!@#$%&*]/.test(input);

    return !(input.length < 8 || !hasUpper || !hasLower || !hasNumber || !hasSymbol);
}

const showError = (inp, msg) => {
    inp.nextElementSibling.setAttribute('style', 'display: block')
    inp.nextElementSibling.textContent = msg;
};

formEl.addEventListener('submit', evt => {
    evt.preventDefault();

    const pass = formEl.password;
    const passConfirm = formEl.confirmPassword;

    const inputEls = formEl.querySelectorAll('.sign-up__input');
    const birthDate = new Date(inputEls[5].value).getTime();
    const currentDate = new Date().getTime();
    const diff = currentDate - birthDate;
    const isAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    inputEls.forEach(inp => {
        const value = inp.value.trim();
        const name = inp.name;

        if ((name === 'name' || name === 'surname')
            && (/[0-9!@#$&*%]/g.test(value))) {
            return showError(inp, 'Поле не может содержать число и специальные символы');
        }

        if (value === '') {
            return showError(inp, 'Поле не может быть пустым');
        }

        if (name === 'email' && !(/^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/.test(value))) {
            return showError(inp, 'Не правильный формат поля email');
        }

        if (name === 'date' && isAge < 18) {
            return showError(inp, 'Допустимый возраст от 18+');

        }

        if (name === 'password' && !isValidatePassword(pass.value)) {
            return showError(inp, 'Пароль должен содержать минимум 8 символов, одну цифру, \n' +
                ' один символ, одну заглавную и строчную букву');
        }

        showError(inp, '');
    });

    if ((pass.value && passConfirm.value) && pass.value !== passConfirm.value) {
        showError(pass, 'Пожалуйста подтвердите пароль');
        showError(passConfirm, 'Пожалуйста подтвердите пароль');
    }
});