// dependencies
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes.js');
const Users = require('../models/users.js')

/**********************************
 * Presentational Routes (All GET requests)
 * Index: Shows a list of all our resources and has links  to New, Edit, Delete
 * New: Shows a form to create a new resource linked to create
 * Show: Shows on individual resource from our list
 * Edit: Shows a form to update a resource linked to update route
 */

let count = 0;

// user registration route
router.get('/register', (req, res) => {
    res.render('Register')
})

router.post('/register', (req, res) => {
    Users.create(req.body, (err, newUser) => {
        err ? console.log(err) : console.log('user added');
        res.redirect('/recipes/login')
    })
})

// user log in route
router.get('/login', (req, res) => {
    res.render('Login')
})

router.post('/login', (req, res) => {
    Users.findOne({email: req.body.email}, (err, foundUser) => {
        if (foundUser && foundUser.password === req.body.password) {
            res.redirect('/recipes')
        }else {
            res.render('Login', {errorMessage: 'Incorrect Email or Password'})
        }
    })
})

// index route
router.get('/', (req, res) => {
     // Use Recipe model to get all recipes
     if (req.query.search) {
        const newRegex = new RegExp(func(req.query.search), 'gi');
        Recipe.find({name: {$all: newRegex}}, (err, searchedRecipes) => {
            let noMatchFound;
            if (searchedRecipes.length < 1) {
                noMatchFound = 'No recipes match that query, please try again...'
                searchedRecipes.push(noMatchFound)
             }
            res.render('Index', {
                recipes: searchedRecipes,
                title: 'Welcome to regal recipes!',
                noMatch: noMatchFound,
                count: count
            })
        });
     } else {
     Recipe.find({}, (err, allRecipes) => {
         res.render('Index', {
             recipes: allRecipes,
             title: 'Welcome to regal recipes!',
             count: count
            })
    });
    }
})

// add to favorites route
router.get('/:id/favorites', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, {favorite: true}, (err, updatedRecipe) => {
        count < 0 ? count = 0 : count = count;
        count += 1; 
        res.redirect('/recipes/favorites');
    })
})

// remove from favorites route 
router.get('/:id/dislike', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, {favorite: false}, (err, updatedRecipe) => {
        count -= 1;
        count < 0 ? count = 0 : count = count;
        res.redirect('/recipes/favorites');
    })
})

// favorites route
router.get('/favorites', (req, res) => {
    Recipe.find({favorite: true}, (err, allFavs) => {
        res.render('Index', {
            recipes: allFavs,
            title: 'Favorite recipes', 
            count: count
         })
    });
})

// breakfast route
router.get('/breakfast', (req, res) => {
    // Use Recipe model to get all recipes matching breakfast class
    Recipe.find({category: 'breakfast'}, (err, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            title: 'Breakfast recipes',
            count: count
        })
   });
})

// lunch route
router.get('/lunch', (req, res) => {
    // Use Recipe model to get all recipes matching breakfast class
    Recipe.find({category: 'lunch'}, (err, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            title: 'Lunch recipes',
            count: count
           })
   });
})

// breakfast route
router.get('/dinner', (req, res) => {
    // Use Recipe model to get all recipes matching breakfast class
    Recipe.find({category: 'dinner'}, (err, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            title: 'Dinner recipes',
            count: count
           })
   });
})

// dessert route
router.get('/dessert', (req, res) => {
    // Use Recipe model to get all recipes matching breakfast class
    Recipe.find({category: 'dessert'}, (err, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            title: 'Dessert recipes',
            count: count
           })
   });
})

// other route
router.get('/other', (req, res) => {
    // Use Recipe model to get all recipes matching breakfast class
    Recipe.find({category: 'other'}, (err, allRecipes) => {
        res.render('Index', {
            recipes: allRecipes,
            title: 'Other recipes',
            count: count
           })
   });
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
            recipe: foundRecipe,
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
    req.body.category === undefined ? req.body.category = 'other' : req.body.category = req.body.category;
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