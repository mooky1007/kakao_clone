function init(){
    const userInput = document.querySelector('.js-user-input');
    const userSubmit = document.querySelector('.js-user-submit');

    userSubmit.addEventListener('click',function(event){
        event.preventDefault;
        if(userInput.value){
            window.localStorage.setItem('username',userInput.value);
        }
    })

    if(window.localStorage.getItem('username')){
        location.href = 'friends.html';
    }
}

init();