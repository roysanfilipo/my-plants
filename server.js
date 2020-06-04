//___________________
//Dependencies
//___________________

const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()

const Plants = require('./models/plants.js');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//

// new route app.get
app.get('/myplants/new' , (req, res) => {
  res.render('new.ejs');
});

// edit existing plant app.get and app.put




// route to index of plants app.get
app.get('/', (req, res)=>{
      res.redirect('/myplants',);
});

app.get('/myplants', (req, res)=>{
    // Plants.find({}, (error, allPlants) => {
      res.render(
          'index.ejs',
        // {
        //     plants: allPlants
        // });
    // }
  );
});



// route to show page for each product app.get




// route that adds seed data (you only go to this page once to import it) app.get



// route that allows you to delete each plant app.delete


// add a new product Routes app.post and app.PUT



//___________________
//Listener
//___________________
app.listen(PORT, () =>
  console.log( 'Grow for meeeee', PORT)
);
