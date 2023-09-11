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
            toggleButtons();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            element.classList.remove('playing');
            toggleButtons();
        }
    });
});

function toggleButtons() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    } else {
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }
}

playButton.addEventListener('click', () => {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach((audioElement) => {
        audioElement.play();
    });
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';

    isPlaying = true;
});

pauseButton.addEventListener('click', () => {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach((audioElement) => {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';

    isPlaying = false;
});
