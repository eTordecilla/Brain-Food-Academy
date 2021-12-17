'use strict'

const mongoose = require('mongoose');
const uri = `mongodb+srv://ingridbvelandia:PhfJYjUjgzc0OLCf@cluster0.veg5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(()=> console.log("Base de datos conectada"));