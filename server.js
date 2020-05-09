// Dependencies
// require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
const methodOverride = require('method-override');


// middleware that we want to run before every route runs
app.use(express.urlencoded({ extended: false })); //gives access to req.body
app.use(methodOverride('_method')); // allows for override of the form action
app.set('view engine', 'jsx'); //tells express what type of files to look for in views
app.engine('jsx', require('express-react-views').createEngine()); // telling express how to compile our jsx
app.use(express.static('public')); //serve any file in public as a static file

// Mongoose connection
mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
});

// controller
const recipesController = require('./controllers/controllers.js');
app.use('/recipes', recipesController);


// Listener
app.listen(PORT, () => {
    console.log('running on port', PORT);
});
