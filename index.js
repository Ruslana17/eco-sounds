const soundElements = document.querySelectorAll('.list_birds_name');

const pauseButton = document.getElementById('pauseButton');
const playIcon = document.getElementById('main_button_play_svg');
const playButton = document.getElementById('main_button_play');
const pauseIcon = document.getElementById('main_button_pause_svg');

let isPlaying = false;

soundElements.forEach((element) => {
    element.addEventListener('click', () => {
        const soundId = element.getAttribute('data-sound');
        const audioElement = document.getElementById(soundId);

        if (audioElement.paused) {
            audioElement.play();
            element.classList.add('playing');
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            element.classList.remove('playing');
        }
    });
});

playButton.addEventListener('click', () => {
    const audioElements = document.querySelectorAll('audio');

    if (!isPlaying) {
        audioElements.forEach((audioElement) => {
            audioElement.play();
        });
        playIcon.src ='img/pause.svg';
        playButton.classList.remove('play');
        playButton.classList.add('pause');
        pauseButton.style.display = 'block';
    } else {
        audioElements.forEach((audioElement) => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
        playIcon.src ='img/play.svg';
        playButton.classList.remove('pause');
        playButton.classList.add('play');
        pauseButton.style.display = 'none';
    }

    isPlaying = !isPlaying;
});

pauseButton.addEventListener('click', () => {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach((audioElement) => {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
    pauseIcon.src = 'img/pause.svg';
    playButton.classList.remove('pause');
    pauseButton.classList.add('play');
    playButton.style.display = 'none';

    isPlaying = false;
});





