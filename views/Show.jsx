const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { recipe } = this.props;
        console.log(recipe, 'is the recipe')
        return (
            <Default>
            <div className="header">
            <h1 className='header-h1'>{recipe.name}</h1>
            </div>
            <div className="show-recipe">
              
                <div className='show-content'>
                    <div className="content">
                        <img src={recipe.img} alt="Image Not Found"/>
                     </div>
                    <div className="content">
                        <h4>DESCRIPTION</h4>
                        <p>{recipe.description}</p>
                    </div>
                    <div className="content">
                        <h4>INGREDIENTS</h4>
                        <p>{recipe.ingredients}</p>
                    </div>
                    <div className="content">
                        <h4>DIRECTIONS</h4>
                        <p>{recipe.directions}</p>
                    </div>
                </div>
                <div className="card-links show-links">
                    <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
                    <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                        <input type="submit" value='delete'/>
                    </form>
                </div>
            </div>
             <a href="/recipes"><button>back</button></a>
            </Default>
        )
    }
}

module.exports = Show;