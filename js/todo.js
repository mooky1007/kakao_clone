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
const todoLS = myStorage.getItem('todos');
const userName = document.querySelector('.js-user-name');
let toDos = [];

if(myStorage.getItem('username')){
    userName.innerText = myStorage.getItem('username');
}else{
    location.href = "index.html"
}

function LS(){
    if(todoLS){
        const parsedToDos = JSON.parse(todoLS);
        parsedToDos.forEach((n)=>{
            makeTodo(n.text,n.checked);
        })
        
    }else{
        console.log('todo is not.')
    }
}

LS();

function saveLS(text){
    localStorage.setItem('todos',JSON.stringify(toDos));
}

todoSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    if(todoInput.value){
        makeTodo(todoInput.value,false);
    }else{
        console.log('nope');
    }
})

todoBtn.addEventListener('click',()=>modal.classList.remove(hide));
closeBtn[0].addEventListener('click',closeModal);
closeBtn[1].addEventListener('click',closeModal);

function makeTodo(text,checked){
    console.log(text,checked)
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div2b = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const h4 = document.createElement('h4');
    const i = document.createElement('i');
    const newId = toDos.length +1;
    
    div1.classList.add('user_component','js-todo-list');
    div1.id = newId;
    div2.classList.add('user_component__column');
    div2b.classList.add('user_component__column');
    div3.classList.add('user_component__text');
    div4.classList.add('todo-box');
    input.setAttribute('type',"checkbox");
    label.addEventListener('click',checkedTodo);
    input.id = `label_${newId}`;
    if(checked){
        console.log(`${text}는 체크됨`)
        input.checked = true;
    }else{
        console.log(`${text}는 체크안됨`)
    }
    label.setAttribute('for',`label_${newId}`);
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

    const toDoObj = {
        text,
        id:newId,
        checked:input.checked
    }
    toDos.push(toDoObj);

    saveLS();
    todoInput.value = '';
    closeModal()
    delte();
}

function delte(){
    deletBtn = document.querySelectorAll('.js-delet-btn');
    deletBtn.forEach((el)=>{
        el.addEventListener('click',()=>{
        el.parentElement.parentElement.remove();
            const cleanToDos = toDos.filter((toDo)=>{
                return toDo.id !== parseInt(el.parentElement.parentElement.id);
            })
            console.log(cleanToDos)
            toDos = cleanToDos;
            saveLS();
        })
    })
}

function checkedTodo(event){
    const chkBox = event.target;
    const chkInput = chkBox.parentNode.parentNode.parentNode.parentNode;
    const checkedBox = [];
    const checkTodo = toDos.forEach((toDo)=>{
        if(toDo.id == parseInt(chkInput.id)){
            toDo.checked = !(chkBox.previousSibling.checked);
            console.log(!(chkBox.previousSibling.checked))
            checkedBox.push(toDo);
        }else{
            checkedBox.push(toDo);
        }
    });
    toDos = checkedBox;
    console.log(toDos)
    saveLS();
}

function closeModal(){
    modal.classList.add(hide);
};

delte();