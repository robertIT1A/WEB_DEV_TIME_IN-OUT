function time() {
    const now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    if (min < 10) {
        min = "0" + min;
    } else{min = min;}

    if (sec < 10) {
        sec = "0" + sec;
    } else{sec = sec;}

    const TimeString = `${hours}:${min}:${sec} ${ampm}`;

    document.getElementById("time").textContent = TimeString;
}

setInterval(time,1000);
time();



function start_timer(){
    let sec = 0;
    let mins = 0;
    let hours = 0;
    const start = document.getElementById("start"); 
    const time = document.getElementById("time_record"); 

    const timer = setInterval(() => {
        sec++;


        if (sec > 59) {
            mins ++;
            sec = 0;
        } 
        if (mins > 59) {
            hours ++;
            mins = 0;
        }else if (mins < 10) {
            const adds = `${mins}`
            mins = adds
        }

        const TimeString = `${hours}:${mins}`;
        
        time.textContent = TimeString;
    }) 

    
    // const Count = `${hours}:${min}:${sec} ${ampm}`;



}
start_timer();