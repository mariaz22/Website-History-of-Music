//manevrarea DOM-ului (selectare dupa id)
// Selectează paragrafele folosind ID-urile lor
// Selectează paragrafele și titlurile folosind ID-urile lor
var paragraf1 = document.getElementById('vioara1');
var titlu1 = document.querySelector('#vioara1 h2');
var paragraf2 = document.getElementById('vioara2');
var titlu2 = document.querySelector('#vioara2 h2');
var paragraf3 = document.getElementById('vioara3');
var titlu3 = document.querySelector('#vioara3 h2');

// Definirea funcției pentru hover
function applyHoverEffect(paragraf, titlu) {
    // Schimbă culoarea și dimensiunea la hover pentru paragraf și titlu
    paragraf.addEventListener('mouseover', function() {
        paragraf.style.color = 'navy'; 
        paragraf.style.fontSize = '20px'; 
        titlu.style.color = 'navy'; 
    });

    paragraf.addEventListener('mouseout', function() {
        paragraf.style.color = ''; 
        paragraf.style.fontSize = ''; 
        titlu.style.color = ''; 
    });
}

applyHoverEffect(paragraf1, titlu1);
applyHoverEffect(paragraf2, titlu2);
applyHoverEffect(paragraf3, titlu3);


