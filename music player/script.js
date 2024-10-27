const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");

// List of songs (use your own song files in the project directory)
const songs = ["song1", "song2", "song3"];
let songIndex = 0;

// Load initial song
loadSong(songs[songIndex]);

// Load song function
function loadSong(song) {
  songTitle.innerText = song;
  audio.src = `${song}.mp3`;
}

// Play or pause song
function togglePlayPause() {
  const isPlaying = audio.paused;
  if (isPlaying) {
    audio.play();
    playBtn.innerText = "Pause";
  } else {
    audio.pause();
    playBtn.innerText = "Play";
  }
}

// Previous song
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.innerText = "Pause";
}

// Next song
function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.innerText = "Pause";
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
}

// Set progress on click
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
