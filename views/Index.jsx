const React = require('react')
const Default = require('./Default');

class Index extends React.Component{
    render(){
        const { recipes, title, noMatch} = this.props;
        if(noMatch !== undefined) {
            return(
                <Default>
                    <div className="header">
                        <h1 className='header-h1'>Sorry, no match found</h1>
                    </div>
                    <div className="recipe-card" id='no-match'>
                        <h1 className='no-match-h1'>{noMatch}</h1>
                        <form className='searchBar' action="/recipes" method="GET">
                            <input type="text" name="search" id="searchBar" placeholder="Search for a recipe " />
                        </form>
                    </div>
                </Default>
            )
        } else {
      return(
        <Default>
            <div className="header">
                <h1 className='header-h1'>{title}</h1>
            </div>
            <main>
            <i className="fa fa-arrow-circle-left previous"></i>
            <div className="carousel">
                {recipes.map((recipe, index)=> {
                    return(
                        <div className="recipe-card">
                            <h3 className="recipe-name">{recipe.name}</h3>
                            <div className='card-content'>
                                <img src={recipe.img} alt="Image Not Found"/>
                                <p>{recipe.description}</p>
                            </div>
                            <div className="card-links">
                                <a href={`/recipes/${recipe._id}/view`}>View</a>
                                <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
                                <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value='delete'/>
                                </form>
                            </div>
                        </div>
                    )
                })}
                </div>
                <i className="fa fa-arrow-circle-right next"></i>            
                </main>
                <a href="/recipes/new"><button className='create-btn'>CREATE</button></a>
        </Default>
      )  
    }
    }
}

module.exports = Index;