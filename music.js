const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

let progress=document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name: "Birthday Song",
        image: "musicB44",
        title: "Happy Birthday My Baby❤️❤️❤️",
        artist: "May all your wishes come true and you get all the happiness in the world ❤️❤️❤️"
    },
    {
        name: "Bijli Bijli",
        image: "musicB22",
        title: "Akhar",
        artist: "The song that marked the start of our relationship. We had our ups and downs in this journey but the time with you was always special "
    },
    {
        name: "Khairiyat",
        image: "musicB33",
        title: "Chal Diye Tum Kahan",
        artist: "I really want to acknowledge all your efforts, all your love towards me that you showed all this time and I'm really grateful for that 🥺❤️"
    },
    {
        name: "Mere Yaara",
        image: "musicB11",
        title: "Neher Wale",
        artist: "And what about the songs? I hope I added the songs that you like 😍. Just never underestimate me babe. If you won't tell, that doesn't mean that I don't know stuff about you :) "
    },
    {
        name: "hawayien",
        image: "musicB55",
        title: "Qayde Se",
        artist: "Just one last thing. I want to remind you that I really love you, I care for you and I respect you and I'll always keep doing all this 🖤"
    },

]

let isPlaying = false;

// for play function
const playMusic= () => {
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
};

//for pause function
const pauseMusic= () => {
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
})

//changing the music data

const loadSong =(songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "Music/" + songs.name + ".mp3";
    img.src = "Image/" + songs.image + ".jpg";
};

songIndex= 0;
 //loadSong(songs[1]);

const nextSong = () =>{
    //  songIndex++;
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    //  songIndex++;
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

// prpgress JS work
music.addEventListener('timeupdate',(event) =>{
    const { currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let progress_time = (currentTime / duration)* 100;
    progress.style.width = `${progress_time}%`;

    //music duration update
    console.log(duration);
    let min_duration =Math.floor(duration / 60);
    let sec_duration =Math.floor(duration % 60);

    let tot_duration=`${min_duration}:${sec_duration}`;
    if(duration)  total_duration.textContent = `${tot_duration}`;
   
    //current duration update
    console.log(duration);
    let min_currentTime =Math.floor(currentTime / 60);
    let sec_currentTime =Math.floor(currentTime % 60);

    if(sec_currentTime < 10) sec_currentTime = `0${sec_currentTime}`;
    let tot_currentTime=`${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`
   
});

//progress onC=click functionality

progress_div.addEventListener('click', (event) => {
console.log(event);

const { duration } = music;
let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;
// console.log(duration);
// console.log(move_progress);

music.currentTime = move_progress;
});
//if one song ends, call next one
music.addEventListener('ended',nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);






