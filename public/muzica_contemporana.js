document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const artistInput = document.getElementById('artistInput');
    const artistInfo = document.getElementById('artistInfo');
    const artistImage = document.getElementById('artistImage');
    const artistName = document.getElementById('artistName');
    const artistDescription = document.getElementById('artistDescription');
    
    const artists = {
        'Olivia Rodrigo': {
            image: 'contemporan1.webp',
            description: 'Olivia Rodrigo (20 februarie 2003, Murrieta⁠, California, SUA) este o actriță și cântăreață americană. În 2020 a semnat un contract cu Interscope și Geffen Records. În 2021 aceasta își face debutul cu single-ul "Drivers License", ce a ajuns în diferite topuri. A fost urmat de single-urile de succes "Deja Vu" și "Good 4 U", ce au culminat în lansarea albumului de debut a Oliviei, Sour, în data de 21 mai, 2021. Prima apariție a lui Rodrigo pe ecran, a fost într-o reclamă comercială la Old Navy. La scurt timp în 2015 a portretizat-o pe Grace Thomas în filmul An American Girl:Grace Stirs Up Succes. În perioada 2016-2019 a interpretat-o pe Paige Olvera în serialul marca Disney Channel: Bizaardvark, care i-a adus popularitatea. În februarie 2019 a primit rolul lui Nini Salazar-Roberts în serialul High School Musical: The Musical: The Series, difuzat pe Disney+. ',
            leftText: 'Olivia Rodrigo',
            rightText: 'În 2020 a semnat un contract cu Interscope și Geffen Records. În 2021 aceasta își face debutul cu single-ul "Drivers License", ce a ajuns în diferite topuri. A fost urmat de single-urile de succes "Deja Vu" și "Good 4 U", ce au culminat în lansarea albumului de debut a Oliviei, Sour, în data de 21 mai, 2021. '
        },
        'Maneskin': {
            image: 'contemporan2.jpg',
            description: 'Måneskin este o formație italiană de muzică rock, fondată în anul 2016 la Roma, care îi are ca membri pe Damiano David, Victoria De Angelis, Thomas Raggi și Ethan Torchio. Trupa a câștigat Concursul Muzical Eurovision 2021, aceasta reprezentând Italia cu piesa Zitti E Buoni. Trupa a mai câștigat Festivalul Muzical Sanremo și premiul pentru cel mai bun rock, la MTV EMA 2021. ',
            leftText: 'Maneskin',
            rightText: 'este foarte populară.'
        },
        'Ariana Grande': {
            image: 'contemporan3.webp',
            description: 'Ariana Grande este o cântăreață, actriță și compozitoare americană. S-a născut pe 26 iunie 1993 în Boca Raton, Florida. A devenit cunoscută pentru rolul ei din serialul de televiziune "Victorious" de pe Nickelodeon. Cariera ei muzicală a prins amploare în 2013, odată cu lansarea albumului ei de debut, "Yours Truly", care a inclus hituri precum "The Way" și "Baby I".De atunci, a continuat să lanseze mai multe albume de succes, precum "My Everything", "Dangerous Woman" și "Thank U, Next", care au inclus hituri mondiale precum "Problem", "Bang Bang" și "Thank U, Next". Este cunoscută pentru vocea sa puternică și stilul său distinctiv pop și R&B.',
            leftText: 'Ariana Grande',
            rightText: 'este foarte populară.'
        },
        'Queen': {
            image: 'contemporan4.jpg',
            description: 'Queen este una dintre cele mai iconice trupe de rock din istorie, formată în 1970 în Londra. Membrii fondatori au fost Freddie Mercury (voce și pian), Brian May (chitară), Roger Taylor (tobe) și John Deacon (bas). Au avut un impact imens asupra muzicii rock, fiind cunoscuți pentru piese memorabile precum "Bohemian Rhapsody", "We Will Rock You", "Another One Bites the Dust" și "Don t Stop Me Now. Stilul lor muzical este extrem de variat, combinând elemente de rock, pop, opera și chiar funk. Freddie Mercury a fost recunoscut pentru vocea sa extraordinară și pentru prezența scenică carismatică. Queen continuă să fie una dintre cele mai iubite și influente trupe din istoria muzicii.',
            leftText: 'Queen',
            rightText: 'este foarte populară.'
        },
        'Beyonce': {
            image: 'contemporan5.jpg',
            description: 'Beyoncé Knowles-Carter este o cântăreață, compozitoare și actriță americană, născută pe 4 septembrie 1981 în Houston, Texas. Ea și-a început cariera muzicală la începutul anilor 1990 ca membră a trupei Destiny s Child, care a devenit una dintre cele mai bine vândute trupe de fete din toate timpurile. Cariera solo a lui Beyoncé a început să strălucească în anii 2000, când și-a lansat primul ei album solo, "Dangerously in Love" (2003), care a inclus hituri precum "Crazy in Love" și "Baby Boy". De atunci, a continuat să lanseze albume de succes și să câștige numeroase premii, inclusiv premii Grammy și MTV Video Music Awards.',
            leftText: 'Beyonce',
            rightText: 'este foarte populară.'
        },
        'Billie Eilish': {
            image: 'contemporan6.jpg',
            description: 'Billie Eilish este o cântăreață și compozitoare americană născută pe 18 decembrie 2001 în Los Angeles, California. A devenit cunoscută în industria muzicală în 2015, când a început să lanseze piese pe platforma SoundCloud, împreună cu fratele ei, Finneas O Connell, care este și producătorul ei principal. Eilish a obținut recunoaștere internațională în 2019 cu single-ul ei "Bad Guy" de pe albumul său de debut, "When We All Fall Asleep, Where Do We Go?". Albumul a fost aclamat de critică și a câștigat numeroase premii, inclusiv Grammy-ul pentru Albumul Anului.',
            leftText: 'Billie Eilish',
            rightText: 'este foarte populară.'
        }
    };

    // Functie pentru a obtine o culoare random
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Eveniment de click pentru butonul de căutare
    searchButton.addEventListener('click', function() {
        const artist = artistInput.value.trim();
        if (artists[artist]) {
            artistImage.src = artists[artist].image;
            artistName.textContent = artist;
            artistDescription.textContent = artists[artist].description;
            artistInfo.style.display = 'block';

            artistName.style.color = getRandomColor()
            
            // Ascunde galeria
            document.querySelector('.gallery').style.display = 'none';
        } else {
            alert('Artistul nu a fost găsit!');
        }
    });

    // Eveniment pentru inputul de artist
    artistInput.addEventListener('input', function() {
        const value = artistInput.value.trim();
        if (value === '') {
            artistInfo.style.display = 'none';
            document.querySelector('.gallery').style.display = 'block';
        }
    });

    // Extragerea unei culori random pentru fundal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Setarea unei culori random pentru fundalul paginii
    document.body.style.backgroundColor = getRandomColor();
});
