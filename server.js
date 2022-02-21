// Add nde libs
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
// constant port with 3005 value
const PORT = process.env.PORT || 3005;
const app = express();
// app methods with extended:true value
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// adding public to statics
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// App listening port which is 3005 in this case
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});