function printTime() {
    let d = new Date();
    let time = d.toLocateTimeString();
    console.log(time);
}

setInterval(printTime,1000);
