const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { recipe } = this.props;
        return (
            <Default>
            <div className="header">
            <h1 className='header-h1'>{recipe.name}</h1>
            </div>
            <div className='show-container'>
            <div className="show-1">
                <h1>Ingredients</h1>
                <p>{recipe.ingredients}</p>
            </div>
            <div className="show-2">
                <h1>Description</h1>
                <p>{recipe.description}</p>
            </div>
            <div className="show-3">
                <h1>Directions</h1>
                <p>{recipe.directions}</p>
            </div>
            <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
            <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                <input type="submit" value='delete'/>
            </form>
             </div>
             <a href="/recipes">home</a>
            </Default>
        )
    }
}

module.exports = Show;