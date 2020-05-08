const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const recipeSchema = new Schema({
    img: {type: String},
    name: { type: String, required: true },
    category: { type: String, required: true},
    description: { type: String, required: true },
    ingredients: {type: String, required: true},
    directions: {type: String, required: true},
    favorite: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export Model
module.exports = Recipe;