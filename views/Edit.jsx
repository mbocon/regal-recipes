const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { recipe } = this.props;
        return (
            <Default>
            <div className="header">
            <h1 className='header-h1'>{recipe.name}</h1>
            </div>
            <form action={`/recipes/${recipe._id}?_method=PUT`} method='POST'>
                <div className="child child-1">
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" id="name" name="name" value={recipe.name} required/>
                </div>
                <div className="child child-2">
                    <label htmlFor="image">Image Source</label>
                    <input type="text" name="img" value={recipe.img} id="image"/>
                </div>
                <div className="child child-3">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" id="ingredients" width='100%' rows="5" required value={recipe.ingredients}></textarea>
                </div>
                <div className="child child-4">
                    <label htmlFor="description" >Description</label>
                    <textarea name="description" id="description" width='100%' rows="5" required value={recipe.description} ></textarea>
                </div>
                <div className="child child-5">
                    <label htmlFor="directions" >Directions</label>
                    <textarea name="directions" id="directions" width='100%' rows="5" required value={recipe.directions}></textarea>
                </div>
                <div className="child child-6">
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
            </Default>
        )
    }
}

module.exports = Edit;