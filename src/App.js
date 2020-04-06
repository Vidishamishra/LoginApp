import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoutes from './components/PrivateRoutes'

class App extends React.Component{
  
 
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Home />
          <Switch>
             <Route path='/register' component={Register} />
             <Route path='/login' component={Login} />
             <PrivateRoutes path="/dashboard" component = {Dashboard}/> 
            
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;