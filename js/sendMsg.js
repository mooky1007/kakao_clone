function sendMsg() {
    const msg_container = document.querySelector(".js-chat__container");
    const msgInput = document.querySelector(".js-input");
    const msgBtn = document.querySelector(".js-msgBtn");
    msgBtn.addEventListener("click", function () {
        if (msgInput.value) {
            let span1 = document.createElement("span");
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let span2 = document.createElement("span");
            let span3 = document.createElement("span");
            span1.classList = "chat-msg--right";
            div1.classList = "chat-msg__column";
            div2.classList = "chat-msg__text";
            span2.classList = "chat__content";
            span2.innerText = msgInput.value;
            span3.classList = "chat__timestamp";
            span3.innerText = document.querySelector(".js-clock").innerText;

            span1.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(span2);
            div2.appendChild(span3);

            msg_container.appendChild(span1);
            msgInput.value = "";
            msgInput.click();
        }
    });
}

sendMsg();
