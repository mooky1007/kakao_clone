function clock() {
    const clock = document.querySelector(".js-clock");
    setInterval(function () {
        let date = new Date();
        const hours = date.getHours();
        const min = date.getMinutes();
        clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}`;
    }, 1000);
}

clock();
