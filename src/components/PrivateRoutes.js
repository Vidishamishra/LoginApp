import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const getToken = ()=>{
    return (
        localStorage.getItem('token') || null
    )
}

function PrivateRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoutes;