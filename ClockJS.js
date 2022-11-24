window.onload=function(){
    // let hours=document.getElementById("hours");
    // let minutes=document.getElementById("minutes");
    // let seconds=document.getElementById("seconds");
    // let mor=document.getElementById("mor");
    let clock=document.getElementById("clock");
    setInterval(setTime,1000);
    function setTime(){
        let date=new Date();
        let hours= date.getHours()%12;
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let mor;
        if (date.getHours/12<1) mor="AM"
        else mor="PM";
        clock.innerText=`${display(hours)}:${display(minutes)}:${display(seconds)} ${mor}`;
    }
    // function setTime(){
    //     let clock=new Date();
    //     hours.innerText=display(clock.getHours()%12);
    //     minutes.innerText=display(clock.getMinutes());
    //     seconds.innerText=display(clock.getSeconds());
    //     if ((clock.getHours/12)<1) mor.innerText="AM"
    //     else mor.innerText="PM"
    // };

    function display(elem){
        if (elem<10) return "0"+elem;
        else return elem;
    }
}