import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends Component{
    
        state = {
            username : '',
            password : '',
            token : ''
        }
    

    handleOnChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/login', {
            email: this.state.username,
            password: this.state.password
        }).then((res) => {
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('email', res.data.email);
            this.props.history.push('/dashboard');
        })
        
    }

   
    render(){
    return (
        <div className="container">
            <h4 className="center">LOGIN</h4>
            <form onSubmit={this.handleOnSubmit}>
                <label htmlFor="username">ENTER USERNAME</label>
                <input type="text" placeholder="email" value={this.state.username} onChange={this.handleOnChange} name="username"></input>
                <label htmlFor="password">ENTER PASSWORD</label>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleOnChange} name="password"></input>
                <button>Login</button>
                <p>Not registered?<Link to="/register">Sign Up</Link></p>
            </form>
        </div>
    )
  }
}
export default Login