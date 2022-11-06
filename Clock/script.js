let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds")
setInterval(() => {
    let d = new Date().getDate();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    //añadir 0s cuando es solo un digito
    d = (d < 10) ? "0"+d : d;
    h = (h < 10) ? "0"+h : h;
    m = (m < 10) ? "0"+m : m;
    s = (s < 10) ? "0"+s : s;
    
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
})