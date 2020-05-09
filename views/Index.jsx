const React = require('react')
const Default = require('./Default');

class Index extends React.Component{
    render(){
        let { recipes, title, noMatch, count} = this.props;
        
        // sort recipes alphabetically by name
        recipes.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        
        // handling a search query
        if(noMatch !== undefined) {
            return(
                <Default>
                    <div className="header">
                        <h1 className='header-h1'>Sorry, no match found</h1>
                    </div>
                    <div className="recipe-card" id='no-match'>
                        <h1 className='no-match-h1'>{noMatch}</h1>
                        <form className='searchBar no-match-search-bar' action="/recipes" method="GET">
                            <input type="text" name="search" id="searchBar" placeholder="Search for a recipe " />
                            <input type="submit" name="submit" id="submit" className='no-match-search-btn' value='Search'/>
                        </form>
                        <h1 className='first-to-create-h1'>Be the first to create this recipe!</h1>
                        <a href="/recipes/new"><button className='create-btn no-match-create-btn'>CREATE</button></a>
                    </div>                
                </Default>
            )
        } else {
        // returns all recipes previously alphabetized 
      return(
        <Default >
            <div className="header">
                <h1 className='header-h1'>{title}</h1>
            </div>
            <div className="categories">
                <a className='category-link' href='/recipes'>All</a>
                <a className='category-link' href='/recipes/breakfast'>breakfast</a>
                <a className='category-link' href='/recipes/lunch'>lunch</a>
                <a className='category-link' href='/recipes/dinner'>dinner</a>
                <a className='category-link' href='/recipes/dessert'>dessert</a>
                <a className='category-link' href='/recipes/other'>other</a>
                <a className='category-link' href='/recipes/favorites'><i class="fa fa-heart nav-heart"></i>{count}</a>
            </div>
            <main>
            <div className="area">
            <i className="fa fa-arrow-circle-left previous"></i>
            <div className="carousel">
                {recipes.map((recipe, index)=> {
                    return(
                        <div className={`recipe-card ${recipe.category}`}>
                        <h3 className="recipe-name">{recipe.name}</h3>
                            <h5>{recipe.category}</h5>
                            <div className='card-content'>
                                <img src={recipe.img} alt="Image Not Found"/>
                                <p>{recipe.description}</p>
                            </div>
                            <div className="card-links">
                                <a href={`/recipes/${recipe._id}/show`}>View</a>
                                <a href={`/recipes/${recipe._id}/edit`}>Edit</a>
                                <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value='delete'/>
                                </form>
                                <form action={`/recipes/${recipe._id}/favorites`} method="GET">
                                    <button type='submit' className='heart like'><i class="fa fa-thumbs-up"></i></button>
                                </form>
                                <form action={`/recipes/${recipe._id}/dislike`} method="GET">
                                    <button type='submit' className='heart dislike'><i class="fa fa-thumbs-down"></i></button>
                                 </form>
                            </div>
                        </div>
                    )
                })}
                </div>
                <i className="fa fa-arrow-circle-right next"></i>            
                </div>
                <a href="/recipes/new"><button className='create-btn'>create a recipe</button></a>
                </main>
        </Default>
      )  
    }
    }
}

module.exports = Index;