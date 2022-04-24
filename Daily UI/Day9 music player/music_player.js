let track_img = document.querySelector(".track_img");
let track_name = document.querySelector(".track_name");
let track_artist = document.querySelector(".track_artist");

let play_btn = document.querySelector(".play");
let next_btn = document.querySelector(".next_track");
let prev_btn = document.querySelector(".prev_track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volumn_silder");
let curr_time = document.querySelector(".current_time");
let total_duration = document.querySelector(".total_duration");

let track_index = 0;
let isplaying = false;
let firstclick = 0;
let updateTimer;

let curr_track = document.createElement('audio');
let seekto;

let body = document.querySelector("body");

let track_list = [
    {
        name: "Blue Boi",
        artist: "unknown",
        path: "Blue Boi.mp3",
        img: "StockSnap_OSBBGSFDLS.jpg"
    },

    {
        name: "Sunset",
        artist: "Lukrembo",
        path: "Sunset (Prod. by Lukrembo).wav",
        img: "StockSnap_XJDAD39WSS.jpg"
    },

    {
        name: "Magic",
        artist: "Le Gang",
        path: "Le Gang - Magic.mp3",
        img: "StockSnap_9NRF8XPDPJ.jpg"
    }
    
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    track_img.style.background = "url(" + track_list[track_index].img + ")";
    track_img.style.backgroundSize =  "cover";

    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(" + track_list[track_index].img + ")";
    body.style.backgroundSize =  "cover";
    body.style.fiter = "blur(20px)";

    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playPauseTrack() {
    if (firstclick == 0) {
        nextTrack();
        firstclick = 1;
    }
    else if (!isplaying && firstclick == 1) {playTrack();}
    else {pauseTrack();}
}

function playTrack() {
    curr_track.play();
    isplaying = true;

    play_btn.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>'
}

function pauseTrack() {
    curr_track.pause();
    isplaying = false;

    play_btn.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>'
}

function nextTrack() {
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;

    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0) track_index -= 1;
    else track_index = track_list.length - 1;

    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
    playTrack();
}

function setVolumn() {
    curr_track.volumn = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {  //判斷是否非數值
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) {currentSeconds = "0" + currentSeconds}
        if (durationSeconds < 10) {durationSeconds = "0" + durationSeconds}
        if (currentMinutes < 10) {currentMinutes = "0" + currentMinutes}
        if (durationMinutes < 10) {durationMinutes = "0" + durationMinutes}


        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}