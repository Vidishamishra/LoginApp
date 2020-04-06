import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{ 

    state = {
        username : '',
        email :'',
        password :''
      }
    handleChange = (e) =>{
        this.setState({
           [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3000/register',{
             id: Math.floor((Math.random()*100)+1),
             username: this.state.username,
             email: this.state.email,
             password:this.state.password

          })
            .then((res) => {
                console.log(res.data)
    
            })
            
            this.setState({
                username:'',
                email:'',
                password:''
            })
    }
    
    render(){
    return(
        <div className="container">
            <h4 className="center">REGISTER</h4>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">USERNAME</label>
                <input type="text" value={this.state.username} onChange={this.handleChange} name="username"></input>
                <label htmlFor="email">EMAIL</label>
                <input type="email" value ={this.state.email} onChange={this.handleChange} name="email"></input>
                <label htmlFor="password">PASSWORD</label>
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password"></input>
                <button>Submit</button>
                <p>Already registered?<Link to="/login">Login In</Link></p>
            </form>
        </div>
    )
    }
}
export default Register