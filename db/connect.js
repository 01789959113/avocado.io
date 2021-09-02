// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/realEstateUser', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('we are connected'))
    .catch(e => { console.log(e) })
