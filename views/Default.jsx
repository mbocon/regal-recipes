const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html lang='en'>
                <head>
                    <meta charset="UTF-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&family=Nova+Mono&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="/css/reset.css"/>
                    <link rel="stylesheet" href="/css/main.css"/>
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
                    <script src="/css/app.js"></script>
                    <title>Regal Recipes</title>
                </head>
                <body>
                <div className="container">
                <nav >
                    <a className='nav-link' href="/recipes">Home</a>
                    <div className="favs">
                    </div>
                    <a className='user-link register-link' href="/recipes/register">Register</a>
                    <a className='user-link login-link' href="/recipes/login">Login</a>

                    <form className='searchBar' action="/recipes" method="GET">
                        <input type="text" name="search" id="searchBar" placeholder="Search for a recipe"/>
                        <input type="submit" name="submit" id="submit" value='Search'/>
                     </form>
                    
                </nav>
                    {this.props.children}
                    <footer>
                    <p>Created by: Mike Bocon // <a id='linkedin' href="https://www.linkedin.com/in/mike-bocon/" target='_blank'>
                    LinkedIn</a></p>
                    </footer>
                    
                </div>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default;