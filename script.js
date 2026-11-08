// Modal popup controls
const heartBtn = document.getElementById('heartBtn');
const messageModal = document.getElementById('messageModal');
const closeBtn = document.getElementById('closeBtn');

// Open modal when heart button is clicked
heartBtn.addEventListener('click', () => {
    messageModal.style.display = 'flex';
});

// Close modal when 'X' is clicked
closeBtn.addEventListener('click', () => {
    messageModal.style.display = 'none';
});

// Close modal if user clicks outside the white popup box
window.addEventListener('click', (e) => {
    if (e.target === messageModal) {
        messageModal.style.display = 'none';
    }
});

// Music Player Control
const musicToggleBtn = document.getElementById('musicToggleBtn');
const bgMusic = document.getElementById('bgMusic');

musicToggleBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggleBtn.textContent = '⏸ Commercial break';
    } else {
        bgMusic.pause();
        musicToggleBtn.textContent = '🎵 listen when you have a min';
    }
});