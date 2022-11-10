const express = require('express');
const path = require('path');

const app = express();
const {PORT} = require('./config.json');

const publicFiles = './public';
const htmlFiles = `${publicFiles}/html`;
const imageFiles = `${publicFiles}/images`;

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, `${htmlFiles}/index.html`));
});

app.use(express.static(imageFiles));

app.listen(PORT);
console.log(`Server has started with "${PORT}" as port`);