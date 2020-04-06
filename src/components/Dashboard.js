import React, { Component } from 'react'
import axios from 'axios'


class Dashboard extends Component{
     state = {
         user : '',
         email : ''
     }

    handleClick = () =>{
        this.props.history.push('/home');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    componentDidMount() {
        
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const auth = { headers:  {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
            'Authorization': `Bearer `+ token
          }}

        if(!!token && !!email){
        axios.post('http://localhost:3000/user-details',{
            "email": email
        }, auth)
        .then(res =>{
            // console.log(res.data);
            this.setState({
                user:res.data.user.username,
                email:res.data.user.email
            })
        })
        // if(localStorage.getItem('token') === this.state.token && localStorage.getItem('user')=== this.state.user) {
        //     const name = this.state.user
        // }
    }
        
        
      }
    render(){
    return (
        <div className="container">
            <h4 className="center">Dashboard</h4>
              <h6>WELCOME {this.state.user}!!</h6>
               <p>User profile : {this.state.email}</p>
                <button onClick={this.handleClick}>Log Out</button>
                
        </div>
    )
  }
}
export default Dashboard;