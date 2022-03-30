const express = require('express');
const app = express ();
const router = require('./app/router');

const PORT = 3000;

app.use('/', express.static('public'));
app.use('/:id', express.static('public'));

//use this motor ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(router);

app.listen(3000, () => {
    console.log(`Running server on http://localhost:${PORT}`)
});