// dependencies
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes.js');


/**********************************
 * Presentational Routes (All GET requests)
 * Index: Shows a list of all our resources and has links  to New, Edit, Delete
 * New: Shows a form to create a new resource linked to create
 * Show: Shows on individual resource from our list
 * Edit: Shows a form to update a resource linked to update route
 */

// index route

router.get('/', (req, res) => {
     // Use Recipe model to get all recipes
     if (req.query.search) {
        const newRegex = new RegExp(func(req.query.search), 'gi');
        Recipe.find({name: {$all: newRegex}}, (err, allRecipes) => {
            let noMatchFound;
            if (allRecipes.length < 1) {
                noMatchFound = 'No recipes match that query, please try again...'
                allRecipes.push(noMatchFound)
             }
            res.render('Index', {
                recipes: allRecipes,
                title: 'Welcome to regal recipes!',
                noMatch: noMatchFound
            })
        });
     } else {
     Recipe.find({}, (err, allRecipes) => {
         res.render('Index', {
             recipes: allRecipes,
             title: 'Welcome to regal recipes!',
            })
    });
    }
})

// new route
router.get('/new', (req, res)=>{
    res.render('New');
});

// show
router.get('/:id/show', (req, res) => {
    // Find the specific document
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        // render the Show route and pass it the foundrecipe
        res.render('Show', {
            recipe: foundRecipe
        });
    });
});

 /**********************************
 * Functional Routes
 * Create: Creates a new resource POST
 * Destroy: Deletes a resource DELETE
 * Update: Updates a resource PUT
 */


// Create
router.post('/', (req, res) => {
    // Use Model to create Document
    req.body.img === '' ? req.body.img = 'https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png' : req.body.img = req.body.img;
    
    console.log('THE REQ.BODY IS ....', req.body)
    Recipe.create(req.body, (error, createdRecipe) => {
        // Once created - respond to client
        res.redirect('/recipes');
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
        res.redirect('/recipes');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        // render the edit view and pass it the found recipe
        res.render('Edit', {
            recipe: foundRecipe
        })
    });
});

// Put
router.put('/:id', (req, res) => {
    // Update the recipe document using our model
    req.body.img === '' ? req.body.img = 'https://cdn4.iconfinder.com/data/icons/social-communication/142/add_photo-512.png' : req.body.img = req.body.img;
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect(`/recipes/${req.params.id}/show`);
    });
});


// function to be used for search functionality
const func = (text) => {
    return text.replace(/\s*([^[:]+):\"([^"]+)"/g);
}


// Export Router
module.exports = router;