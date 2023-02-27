var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');

var startTimer = null;
var c = 0;
var snd = new Audio('./sound/timeup_sound.mp3');
function timer(){
    if(m.value > 59 || s.value > 59){
        alert("Invalid Value");
        m.value = 0;
        s.value = 0;
    }
    else if(h.value==0 && m.value==0 && s.value==0){
        snd.play();
        h.value = 0;
        m.value = 0;
        s.value = 0;
        alert("Time Up");
        c=1;
    }
    else if(s.value!=0){
        s.value--;
    }
    else if(m.value!=0 && s.value == 0){
        s.value = 59;
        m.value--;
    }
    else if(h.value!=0 && m.value==0){
        m.value = 59;
        s.value = 59;
        h.value--;    
    } 
}
var ps = false;
function pauseTimer(){
    if(ps == false){
        ps = true;
        clearInterval(startTimer); 
    }

}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click',function(){
    c = 0;
    function startInterval(){
        startTimer = setInterval(function(){
            if(c==0)
                timer();
        }, 1000);
    }
    startInterval();
})

pause.addEventListener('click',function(){
    pauseTimer();
})

reset.addEventListener('click',function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
    location.reload();
})