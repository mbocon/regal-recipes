const React = require('react');
const Default = require('./Default');

class Register extends React.Component {
    render() {
        return(
        <Default>
        <h1 className='register-h1'>Register</h1>
            <form className='register-form' action="/recipes/register" method='POST'>
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
                    <button type='submit'>Register</button>
            </form>
            <a className='register-a' href="/recipes/login">Login</a>
        </Default>
        )
    }
}

module.exports = Register;
