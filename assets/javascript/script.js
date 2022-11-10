/*==VARIABLES==*/
let hour = document.getElementById('hour');
let minute = document.getElementById('seconds');
let seconds = document.getElementById('seconds');

/*==VARIABLE WITH ARROW FUNCTION THAT MAKES THE HANDS OF THE WATCH WORK==*/
let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec/10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    seconds.style.transform = `rotate(${calc_sec}deg)`;

    console.log(hr, min, sec);
}, 1000);