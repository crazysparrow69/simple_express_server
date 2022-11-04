const path = require('path');
const express = require('express');
const app = express();
const logger = require('./middleware/eventsLogger');

// Global variables
const PORT = process.env.PORT || 3500;

// Logger
app.use(logger);

// Serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

// Routing
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subdir'));

// Error handling
app.get('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else {
        res.end('Shit happened');
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));