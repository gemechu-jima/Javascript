
const timer=document.querySelector('.timer');
const startStopBtn=document.getElementById('startStopBtn');
const stoptBtn=document.querySelector('#stop')
const resetBtn=document.querySelector('#reset')


//
let second=0;
let minute=0;
let hour=0;
//leading variable
let leadingSeocnd=0;
let leadingMinute=0
let leadingHour=0;
//status variable
let timerInterval=null;
let timerStatus='stopped'

function stopWatch(){
    second++
    if(second/60==1){
        second=0;
        minute++
        if(minute/60==1){
            minute=0;
            hour++
        }
    }
    if(second<10){
        leadingSeocnd="0"+second.toString();
    }else{
        leadingSeocnd=second;
    }
    if(minute<10){
        leadingMinute="0"+minute.toString();
    }else{
        leadingMinute=minute;
    }
    if(hour<10){
        leadingHour="0"+hour.toString();
    }else{
        leadingHour=hour;
    }
    timer.textContent=leadingHour+' : '+leadingMinute +' : '+leadingSeocnd;
}

startStopBtn.addEventListener('click', function(){
    if(timerStatus=='stopped'){
        timerInterval=window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa fa-pause" id="pause"></i>`;
        timerStatus='started';

    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa fa-play" id="play"></i>`;
        timerStatus='stopped';
        
    }
})
resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval); 
    timer.textContent="00:00:00"
    second=0;
    minute=0;
    hour=0;
})
