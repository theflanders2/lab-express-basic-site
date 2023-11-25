const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/views/index.html`)

})

app.get('/about', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/views/about.html`)

})

app.get('/works', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/views/works.html`)

})

app.get('/gallery', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/views/gallery.html`)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})