let firstName = false;
let lastName =  false;
let email = false;
let password = false;

let isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

['click', 'keyup'].forEach( e => {
    document.getElementsByName('firstName')[0]
    .addEventListener(e, event => {
        let input = document.getElementsByName('firstName')[0];
        let label = document.getElementById('firstlabel');

        if(event.target.value.length === 0 || event.target.value === ''){
            input.classList.add('error-border');
            label.classList.remove('hidden');
            firstName = false;
        }

        if(event.target.value.length !== 0){
            label.classList.add('hidden');
            input.classList.remove('error-border');
            firstName = true;
        }
    });
});


['click', 'keyup'].forEach( e => {
    document.getElementsByName('lastName')[0]
    .addEventListener(e, event => {
        let input = document.getElementsByName('lastName')[0];
        let label = document.getElementById('lastlabel');

        if(event.target.value.length === 0 || event.target.value === ''){
            input.classList.add('error-border');
            label.classList.remove('hidden');
            lastName = false;
        }

        if(event.target.value.length !== 0){
            label.classList.add('hidden');
            input.classList.remove('error-border');
            lastName = true;
        }
    });
});

['click', 'keyup'].forEach( e => {
    document.getElementsByName('email')[0]
    .addEventListener(e, event => {
        let input = document.getElementsByName('email')[0];
        let label = document.getElementById('email');

        if(!isEmail.test(event.target.value)){
            input.classList.add('error-border');
            label.classList.remove('hidden');
            email = false;
        }

        if(isEmail.test(event.target.value)){
            label.classList.add('hidden');
            input.classList.remove('error-border');
            email = true;
        }

    });
});

['click', 'keyup'].forEach( e => {
    document.getElementsByName('password')[0]
    .addEventListener(e, event => {
        let input = document.getElementsByName('password')[0];
        let label = document.getElementById('password');

        if(event.target.value.length === 0 || event.target.value === ''){
            input.classList.add('error-border');
            label.classList.remove('hidden');
            password = false;
        }

        if(event.target.value.length !== 0){
            label.classList.add('hidden');
            input.classList.remove('error-border');
            password = true;
        }
    });
});
document
    .getElementsByClassName('submit')[0]
    .addEventListener('click', e => {
        test(e);
    });


function test(event){
    if(firstName && lastName && email && password){
        return;
    } else {
        event.preventDefault();
    }
}