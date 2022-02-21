const express = require('express');

const fs = require('fs');
const path = require('path');

// Setting up defoult port to 3001
const PORT = process.env.PORT || 3001;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
// Use .JSON method to parse data
app.use(express.json());
// Add 'public' to statics
app.use(express.static('public'));

// Use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});