const fallingHeartsContainer = document.querySelector('.falling-hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3s and 5s
    fallingHeartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds
}

setInterval(createHeart, 300); // Create a heart every 300ms
