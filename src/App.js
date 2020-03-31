import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

class App extends React.Component{
 
   
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Home />
             <Route path='/register' component={Register} />
             <Route path='/login' component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;