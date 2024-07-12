require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

require('./models/Registration');
const app = require('./app');
const server = app.listen(3000, function() {
    console.log(`Express is running on port ${server.address().port}`);
});