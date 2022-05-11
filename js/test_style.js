const singButton = document.querySelector('.button_ivent_reg')
const regForm = document.querySelector('.form_register')

singButton.addEventListener('click', function(){
    regForm.classList.remove('none')
})



let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.l_register'),
    inputEmail = document.querySelector('.email')

const reg_suc = document.querySelector('.form_succsesful')


singButton.addEventListener('click', function(){
    let emailVal = inputEmail.value
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    if (input.value === '') {
        input.classList.add('error');

    } else {
        input.classList.remove('error');
    }

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }
    reg_suc.classList.remove('none')
    reg_Form.classList.add('none')
})





