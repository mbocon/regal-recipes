const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return(
        <Default>
        <div className="new-header">
            <h1 className='header-h1'>Create a new recipe</h1>
        </div>
            <form action="/recipes" method='POST'>
                <div className="child child-0">
                    <label htmlFor="category">Category</label>
                    <div className="radio">
                        Breakfast<input type="radio" className='breakfast' id="breakfast" name="category" value="breakfast"/>
                        Lunch<input type="radio" className='lunch' id="lunch" name="category" value="lunch"/>
                        Dinner<input type="radio"  className='dinner' id="dinner" name="category" value="dinner"/>
                        Dessert<input type="radio" className='dessert' id="dessert" name="category" value="dessert"/>
                        Other<input type="radio" className='other' id="other" name="category" value="other"/>
                    </div>
                </div>
                <div className="child child-1">
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="child child-2">
                    <label htmlFor="image">Image Source</label>
                    <input type="text" name="img" id="image"/>
                </div>
                <div className="child child-3">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea name="ingredients" id="ingredients" width='100%' rows="5"></textarea>
                </div>
                <div className="child child-4">
                    <label htmlFor="description" >Description</label>
                    <textarea name="description" id="description" width='100%' rows="5" required></textarea>
                </div>
                <div className="child child-5">
                    <label htmlFor="directions" >Directions</label>
                    <textarea name="directions" id="directions" width='100%' rows="5" required></textarea>
                </div>
                <div className="child child-6">
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </Default>
        )
    }
}

module.exports = New;
