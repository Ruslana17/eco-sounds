const soundElements = document.querySelectorAll('.list_birds_name');

/*console.log(birdsName);*/

const playPauseButton = document.getElementById('playPauseButton');
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

playPauseButton.addEventListener('click', () => {
    const audioElements = document.querySelectorAll('audio');

    if (!isPlaying) {
        audioElements.forEach((audioElement) => {
            audioElement.play();
        });
        playPauseButton.textContent = 'Pause';
    } else {
        audioElements.forEach((audioElement) => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
        playPauseButton.textContent = 'Play';
    }

    isPlaying = !isPlaying;
});






