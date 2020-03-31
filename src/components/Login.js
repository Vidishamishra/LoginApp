import React from 'react'

const Login = () =>{
    return (
        <div className="container">
            <h4 className="center">LOGIN</h4>
            <form>
                <label htmlFor="username">Enter Username</label>
                <input type="text" placeholder="email or username"></input>
                <label htmlFor="password">Enter Password</label>
                <input type="text" placeholder="password"></input>
                <button>Login</button>
                <p>Not registered?<a href="/register">Sign Up</a></p>
            </form>
        </div>
    )
}

export default Login