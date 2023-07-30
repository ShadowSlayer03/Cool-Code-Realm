const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../dist', 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/oop_codes', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'oop_codes.html'));
});

app.get('/coming_soon', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'coming_soon_page.html'));
});

// No need to serve static files using express.static

// export.handlers for netlify:
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};
