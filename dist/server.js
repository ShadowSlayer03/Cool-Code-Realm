const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const https = require('https');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/oop_codes', (req, res) => {
    res.sendFile(__dirname + '/oop_codes.html');
});

app.get('/coming_soon', (req, res) => {
    res.sendFile(__dirname + '/coming_soon_page.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
