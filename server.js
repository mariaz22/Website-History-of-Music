const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(session({
    secret: 'secretul_tău',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'), { index: 'instrumente.html' }));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout.html'));
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const dummyUser = {
        username: 'maria',
        password: await bcrypt.hash('parola', 10) 
    };

    if (username === dummyUser.username && await bcrypt.compare(password, dummyUser.password)) {
        req.session.user = username;
        res.redirect('/'); 
    } else {
        res.send('Autentificare eșuată. Verifică credențialele.');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Eroare la deconectare:', err);
        } else {
            res.redirect('/'); 
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'instrumente.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(9000, () => console.log('Server running at http://localhost:9000'));