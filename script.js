const play = document.querySelector("#play");
const previous = document.querySelector("#previous");
const inputRange = document.querySelector("#inputRange");
const wave = document.querySelector(".wave");
const songInfo = document.getElementsByClassName(".songInfo");
const songsName = document.getElementsByClassName(".songName");


let audioElement = new Audio('Songs/1.mp3');




play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();  
        document.getElementById("play").src="Images/pauseButton.png"
        wave.style.opacity = "1"
        
    }else if (audioElement.play ) {
        audioElement.pause();
        document.getElementById("play").src="Images/PlayButton2.png"
        wave.style.opacity = "0"
    } 
});


audioElement.addEventListener("timeupdate", ()=>{
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    inputRange.value = progress;
})

inputRange.addEventListener("change", ()=>{
    audioElement.currentTime = inputRange.value*audioElement.duration/100;  
})