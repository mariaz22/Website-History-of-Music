document.addEventListener('DOMContentLoaded', function() {
    const sheetMusicForm = document.getElementById('sheetMusicForm');
    const songSelect = document.getElementById('songSelect');
    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');
    const submitButton = sheetMusicForm.querySelector('button[type="submit"]');
    const confirmation = document.createElement('div'); 

    // Adăugăm elementul de confirmare în DOM
    confirmation.id = 'confirmation';
    confirmation.style.fontSize = '0.9em'; 
    confirmation.style.marginTop = '10px';
    confirmation.style.padding = '10px';
    confirmation.style.borderRadius = '5px';
    confirmation.style.backgroundColor = '#ccffcc';
    confirmation.style.color = 'green';
    document.body.appendChild(confirmation);

    // Folosirea proprietăților classList, target, currentTarget
    sheetMusicForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const song = songSelect.value;

        // Validarea adresei de email folosind expresii regulate
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            message.textContent = 'Adresa de email nu este validă!';
            message.classList.add('error');
            message.classList.remove('success');
            confirmation.textContent = ''; 
            return;
        }

        const storedEmail = localStorage.getItem('email');

        if (storedEmail && storedEmail === email) {
            message.textContent = `Adresa de e-mail ${email} a fost înregistrată anterior.`;
            message.classList.remove('error');
            message.classList.add('success');
            confirmation.textContent = `Partitura pentru ${song} va fi retrimisă la ${email}.`;
        } else {
            localStorage.setItem('email', email);

            message.textContent = `Adresa de email ${email} a fost înregistrată.`;
            message.classList.remove('error');
            message.classList.add('success');
            confirmation.textContent = `Partitura pentru ${song} va fi trimisă la ${email}.`;

            sheetMusicForm.reset();
        }

        // Extragerea unei proprietăți CSS folosind getComputedStyle
        const computedStyle = window.getComputedStyle(submitButton);
        console.log('Background color of submit button:', computedStyle.backgroundColor);

        // Schimbarea culorii de fundal a mesajului în funcție de stilul butonului de trimitere
        message.style.backgroundColor = computedStyle.backgroundColor;
    });

    // Afișează un mesaj când este selectat un cântec
    songSelect.addEventListener('change', function(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        message.innerHTML = ''; // Ștergem mesajele anterioare
        const songMessage = document.createElement('div');
        songMessage.textContent = `Cântecul "${selectedOption.text}" a fost selectat!`;
        songMessage.style.color = 'green';
        message.appendChild(songMessage);

        // Folosirea getComputedStyle pentru a obține stilul opțiunii selectate
        const computedStyle = window.getComputedStyle(selectedOption);

        // Schimbarea culorii de fundal a mesajului în funcție de stilul opțiunii selectate
        songMessage.style.backgroundColor = computedStyle.backgroundColor;

        event.stopPropagation(); 
    });

    // Exemplu de stopPropagation pentru butonul de trimitere
    submitButton.addEventListener('click', function(event) {
        alert('Butonul de trimitere a fost clicat!');
        event.stopPropagation(); 
    });
});
