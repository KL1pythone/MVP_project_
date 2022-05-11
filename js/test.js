let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.l_register'),
    inputEmail = document.querySelector('.email')


form.onsubmit = function () {
    let emailVal = inputEmail.value
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }


}