document.addEventListener('DOMContentLoaded', function() {
    const colorChangeBtn = document.getElementById('colorChangeBtn');
    const textElement = document.querySelector('.text');

    colorChangeBtn.addEventListener('click', function() {
        const color1 = prompt('Introduceți prima culoare (ex: #ff0000):');
        const color2 = prompt('Introduceți a doua culoare (ex: #00ff00):');

        if (!isValidColor(color1) || !isValidColor(color2)) {
            alert('Introduceți culori valide!');
            return;
        }

        textElement.style.color = color1;

        setTimeout(function() {
            textElement.style.color = color2;
        }, 1000);
    });

    function isValidColor(color) {
        const colorRegex = /^#[0-9A-F]{6}$/i;
        return colorRegex.test(color);
    }
});
