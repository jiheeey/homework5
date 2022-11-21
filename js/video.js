// Add js here.
var vid = document.getElementById("videoplayer");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause")
var slowBtn = document.getElementById("slower")
var fastBtn = document.getElementById("faster")
var skipBtn = document.getElementById("skip")
var muteBtn = document.getElementById("mute")
var slider = document.getElementById("slider")
var volume = document.getElementById("volume")


function playVid(){
    vid.play();
}
function pauseVid() {
    vid.pause();
}
vid.autoplay = false;
vid.loop = false;


// start play with play()
playBtn.onclick = function(){
    vid.play();
}

// pause playback
pauseBtn.onclick = function(){
    vid.pause();
}

// slow down the video
slowBtn.onclick = function(){
    if (vid.playbackRate = 1) {
        vid.playbackRate = 0.5;
    }
}
slowBtn.onclick = function(){
    if (vid.playbackRate = 2) {
        vid.playbackRate = 1;
    }
}
slowBtn.onclick = function(){
    if (vid.playbackRate = 0.5) {
        alert("Video is at slowest speed!")
    }
   
}

// speed up the video
fastBtn.onclick = function(){
    if (vid.playbackRate = 0.5) {
        vid.playbackRate = 1;
    }
}
fastBtn.onclick = function(){
    if (vid.playbackRate = 1) {
        vid.playbackRate = 2;
    }
fastBtn.onclick = function(){
    if (vid.playbackRate = 2) {
        alert("Video is at fastest speed!");
    }
}

}

// skip forward
skipBtn.addEventListener("click", function(){ 
    vid.currentTime += 15;
})
// set back to the beginning of the video
vid.addEventListener('ended', function(){
    vid.currentTime = 0;
})

// mute audio
muteBtn.addEventListener("click", vidmute, false);
function vidmute(){
    if (vid.muted) {
        vid.muted = false;
        muteBtn.innerHTML = "Mute";
        volume.innerHTML = 100;
        vid.volume = 100 / 100;
        slider.value = 100;
    } else {
        vid.muted = true;
        muteBtn.innerHTML = "Unmute";
        volume.innerHTML = 0;
        vid.volume = 0 / 100;
        slider.value = 0;

    }
}

// volume slider
slider.addEventListener('change', function(){
    vid.volume = this.value / 100;
    volume.innerHTML = slider.value
})


// slider.oninput = function(){
//     slider.value = audio.value;
//     volume.innerHTML = slider.value;}

