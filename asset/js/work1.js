const my_patern = /\W/g;

const inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElement = document.getElementById('createTaskButton');

let isValid = false;

function f(e){
    isValid = my_pattern.text(this.value);
    if(isValid){
        this.classList.remove('invalidStyle');
        this.classList.add('validStyle');

    } else{
        this.classList.add('invalidStyle');
        this.classList.remove('validStyle');
    }
}