document.addEventListener('DOMContentLoaded', function() {
    // Preia fontul titlului paginii
    const headerFontFamily = getComputedStyle(document.querySelector('header h1')).fontFamily;
    console.log('Fontul titlului paginii:', headerFontFamily);

    const footerBackgroundColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
    console.log('Culoarea de fundal a footer-ului:', footerBackgroundColor);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Schimbă afișarea paragrafelor';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        const paragraphs = document.querySelectorAll('p');

        const displayStyle = getComputedStyle(paragraphs[0]).display;
        const currentFontFamily = getComputedStyle(paragraphs[0]).fontFamily;

        if (displayStyle === 'block') {
            if (currentFontFamily !== headerFontFamily) {
                paragraphs.forEach(paragraph => {
                    paragraph.style.fontFamily = headerFontFamily;
                });
            } else {
                paragraphs.forEach(paragraph => {
                    paragraph.style.display = 'none';
                    paragraph.style.fontFamily = ''; 
                });
            }
        } else {
            paragraphs.forEach(paragraph => {
                paragraph.style.display = 'block';
                paragraph.style.fontFamily = 'Arial, sans-serif'; 
            });
        }
    });
});
