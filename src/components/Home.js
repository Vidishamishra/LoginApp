import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return (
        <nav className=" nav-wrapper red darken-3">
            <div className="container">
            <a className="brand-logo">TESTAPP</a>
            <ul className="right">
                <li><Link to="/register">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Home;