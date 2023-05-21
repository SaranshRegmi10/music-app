console.log("Welcome to Spotify");

//Initialization Of variables//
let songindex = 0;
let audioElement = new Audio('7.mp3');
// audioELement.play;
let masterPlay = document.getElementById('masterPlay');
let myTimingBar = document.getElementById('myTimingBar');
let Msongs = Array.from(document.getElementsByClassName('Msongs'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let playingsong = document.getElementById('playingsong');
let songs = [
    {songName: "Animals", filePath: "song/1.mp3", coverPath: 'cover/1.jpg' },
    {songName: "Just Me", filePath: "song/2.mp3", coverPath: 'cover/2.jpg' },
    {songName: "Alligator", filePath: "song/3.mp3", coverPath: 'cover/3.jpg' },
    {songName: "Rapture", filePath: "song/4.mp3", coverPath: 'cover/4.jpg' },
    {songName: "Gangster", filePath: "song/5.mp3", coverPath: 'cover/5.jpg' },
    {songName: "Slow Down", filePath: "song/6.mp3", coverPath: 'cover/6.jpg' },
    {songName: "Heaven-To", filePath: "song/7.mp3", coverPath: 'cover/7.jpg' }
]

//Event Listner//
//PLAY/PAUSE in songindex//
let makesplay = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makesplay();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playingsong.innerText=songs[songindex].songName;
        masterPlay.classList.add("fa-pause-circle");
        masterPlay.classList.remove("fa-play-circle");

    })
})
//Control Of Play/Pause//
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0 ) {
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            console.log("play");
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        console.log("Pause");
    }
})

//Control of timebar//
audioElement.addEventListener('timeupdate',()=>{
    progress=(audioElement.currentTime/audioElement.duration)*100;
    console.log("timeUpdate");
   //Update of timebar
    myTimingBar.value=progress;
    console.log("progress");
})

//Control of sound according to timebar//
myTimingBar.addEventListener('change',()=>{
    audioElement.currentTime=(myTimingBar.value*audioElement.duration)/100;
})

//Control of SONGsbar//
Msongs.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songspan")[0].innerText = songs[i].songName; 
})



//use of previous button
document.getElementById('previous').addEventListener("click",()=>{
    if(songindex<=0){
        songindex=6;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`song/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    playingsong.innerText=songs[songindex].songName;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
})

//use of next button
document.getElementById('next').addEventListener("click",()=>{
    if(songindex>5){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`song/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    playingsong.innerText=songs[songindex].songName;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
})
