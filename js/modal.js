const init = () => {
    const modal = document.getElementById('modal');
    const todoBtn = document.getElementsByClassName('js-todo-btn')[0];
    const closeBtn = document.getElementsByClassName('js-close-modal');
    const hide = 'hide_modal';
    
    todoBtn.addEventListener('click',()=>modal.classList.remove(hide));
    closeBtn[0].addEventListener('click',()=>modal.classList.add(hide));
    closeBtn[1].addEventListener('click',()=>modal.classList.add(hide));
    // closeBtn.forEach((el)=>el.addEventListener('click',()=>modal.classList.add(hide)));
}

init();