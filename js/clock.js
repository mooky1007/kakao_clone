function clock() {
    const clock = document.querySelector(".js-clock");
    setInterval(function () {
        let date = new Date();
        const hours = date.getHours();
        const min = date.getMinutes();
        clock.innerHTML = `${addZero(hours)}:${addZero(min)}`;
    }, 1000);

    function addZero(timeNum) {
        if (timeNum < 10) {
            return `0${timeNum}`;
        } else {
            return `${timeNum}`;
        }
    }
}

clock();
