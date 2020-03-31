import React, { Component } from 'react'
import axios from 'axios';

class Register extends Component{ 

    state = {
        firstname : '',
        lastname : '', 
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
        
        axios.post('http://localhost:3000/users', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password:this.state.password

        })
            .then((res) => {
                console.log(res)
    
            })
            this.setState({
                firstname:'',
                lastname:'',
                email:'',
                password:''
            })
    }

    // componentDidMount(){

    // }
   
    
    render(){
    return(
        <div className="container">
            <h4 className="center">REGISTER</h4>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstname">FIRSTNAME</label>
                <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname"></input>
                <label htmlFor="lastname">LASTNAME</label>
                <input type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname"></input>
                <label htmlFor="email">EMAIL</label>
                <input type="email" value ={this.state.email} onChange={this.handleChange} name="email"></input>
                <label htmlFor="password">PASSWORD</label>
                <input type="password" value={this.state.password} onChange={this.handleChange} name="password"></input>
                <button>Submit</button>
                <p>Already registered?<a href="/login">Login In</a></p>
            </form>
        </div>
    )
    }
}
export default Register