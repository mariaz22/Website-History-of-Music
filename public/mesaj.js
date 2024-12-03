//setTimeout, setInterval
document.addEventListener('DOMContentLoaded', function() {
    function showWelcomeMessage() {
        document.getElementById('welcomeMessage').style.display = 'block';
        setTimeout(hideWelcomeMessage, 3000);
    }

    function hideWelcomeMessage() {
        document.getElementById('welcomeMessage').style.display = 'none';
        setTimeout(showWelcomeMessage, 3000);
    }

    showWelcomeMessage();

    const images = document.querySelectorAll('#slideshow img');
    let currentImageIndex = 0;

    setInterval(function() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }, 2000);
});

