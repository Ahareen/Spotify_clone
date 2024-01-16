console.log("Welcome to spotify");
//Initialise the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
//console.log(masterPlay);
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Tera Mera Pyar Amar by Lata Mangeshkar",filePath:"songs/1.mp3",coverPath:"covers/teramera.png"},
    {songName: "Naino mein Bhadra Chaye by Lata Mangeshkar",filePath:"songs/2.mp3",coverPath:"covers/naino.png"},
    {songName: "Chandni o meri chandni by Joy Mukherjee and Sridevi",filePath:"songs/3.mp3",coverPath:"covers/chandni.png"},
    {songName: "Ya dil ki suno duniyawalo by Hemant Kumar",filePath:"songs/4.mp3",coverPath:"covers/anupama.png"},
    {songName: "Chalte chalte yuhi koi by Lata Mangeshkar",filePath:"songs/5.mp3",coverPath:"covers/pakeezah.png"}
]
//songItems.forEach((element,i) => {
 // console.log(element,i);
 //  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
 //  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
//})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
  //update seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
       // console.log(e.target);
       e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else{
    songIndex+=1;}
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
    songIndex-=1;}
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

})