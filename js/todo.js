const todoContainer = document.querySelector('.js-todo-container');
const todoList = document.querySelector('.js-todo-list');
let deletBtn = document.querySelectorAll('.js-delet-btn');
const todoSubmit = document.querySelector('.js-todo-submit');
const todoInput = document.querySelector('.js-todo-input');
const modal = document.getElementById('modal');
const todoBtn = document.getElementsByClassName('js-todo-btn')[0];
const closeBtn = document.getElementsByClassName('js-close-modal');
const hide = 'hide_modal';
const myStorage = window.localStorage;
const todoLS = myStorage.getItem('todo');

function LS(){
    if(todoLS){
        makeTodo([1,2,3,4,5,]);
    }else{
        console.log('todo is not.')
    }
}

LS();

function saveLS(text){
    localStorage.setItem('todo',text);
}

todoSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    if(todoInput.value){
        makeTodo(todoInput.value);
    }else{
        console.log('nope');
    }
})

todoBtn.addEventListener('click',()=>modal.classList.remove(hide));
closeBtn[0].addEventListener('click',closeModal);
closeBtn[1].addEventListener('click',closeModal);

function makeTodo(text){
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div2b = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const h4 = document.createElement('h4');
    const i = document.createElement('i');
    
    div1.classList.add('user_component','js-todo-list');
    div2.classList.add('user_component__column');
    div2b.classList.add('user_component__column');
    div3.classList.add('user_component__text');
    div4.classList.add('todo-box');
    input.setAttribute('type',"checkbox");
    input.id = "todoID";
    label.setAttribute('for',"todoID");
    label.classList.add('user_component__label')
    h4.classList.add('user_component__title');
    h4.innerText = text;
    i.classList.add('far','fa-times-circle','js-delet-btn');

    div4.appendChild(input);
    div4.appendChild(label);
    div4.appendChild(h4);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    div1.appendChild(div2b);
    div2b.appendChild(i);

    todoContainer.appendChild(div1);
    saveLS(text);
    todoInput.value = '';
    closeModal()
    delte();
}

function delte(){
    deletBtn = document.querySelectorAll('.js-delet-btn');
    deletBtn.forEach((el)=>{
        el.addEventListener('click',()=>{
        el.parentElement.parentElement.remove();
        })
    })
}

function closeModal(){
    modal.classList.add(hide);
};

delte();