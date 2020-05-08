const React = require('react');
const Default = require('./Default');

class Login extends React.Component {
    render() {
         const { errorMessage } = this.props;
         console.log(errorMessage)
         if (errorMessage !== undefined) {
              return (
               <Default>
               <h1 className='register-h1'>Login</h1>
               <h1 className='error-message'>{errorMessage}</h1>
                   <form className='register-form' action="/recipes/login" method='POST'>
                      <div className='register'>
                           <label htmlFor="name">Name</label>
                           <input type="text" id="name" name='name' required/>
                      </div>
                      <div className='register'>
                           <label htmlFor="email">Email</label>
                           <input type="email" id="email" name='email' required/>
                      </div>
                           <div className='register'>
                           <label htmlFor="password">Password</label>
                      <input type="password" id="password" name='password' required/>
                      </div>
                           <button type='submit'>Login</button>
                   </form>
                   <a className='register-a' href="/recipes/register">Register</a>
       
               </Default>
              )
         } else {

         
        return(
        <Default>
        <h1 className='register-h1'>Login</h1>
            <form className='register-form' action="/recipes/login" method='POST'>
               <div className='register'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' required/>
               </div>
               <div className='register'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' required/>
               </div>
                    <div className='register'>
                    <label htmlFor="password">Password</label>
               <input type="password" id="password" name='password' required/>
               </div>
                    <button type='submit'>Login</button>
            </form>
            <a className='register-a' href="/recipes/register">Register</a>

        </Default>
        )
     }
     }
}

module.exports = Login;
