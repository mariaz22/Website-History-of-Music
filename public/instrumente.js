//modificarea stilului unui element sau al unui grup de elemente

var paragraphs = document.querySelectorAll('p');

// Adaugă evenimentele mouseover și mouseout pentru fiecare paragraf
paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('mouseover', function() {
        // Crește opacitatea la trecerea mouse-ului peste paragraf
        paragraph.style.opacity = '1';
    });

    paragraph.addEventListener('mouseout', function() {
        // Scade opacitatea la ieșirea mouse-ului de pe paragraf
        paragraph.style.opacity = '0.5';
    });
});



