const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/customer-corner', (req, res) => {
    res.render('customer-corner');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.get('/quality', (req, res) => {
    res.render('quality');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 