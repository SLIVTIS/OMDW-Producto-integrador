const express = require('express');

const app = express();
app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contactanos.html', (req, res) => {
    res.sendFile(__dirname + '/contactanos.html');
});
app.get('/acerca-de.html', (req, res) => {
    res.sendFile(__dirname + '/acerca-de.html');
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
})