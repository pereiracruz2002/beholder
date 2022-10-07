import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';

function Routes(){

    function PrivateRoute({children, ...rest}){
        
        return(
            <Route  render={
                ()=>{
                    return localStorage.getItem('token')
                    ? children
                    : <Redirect to="/" />
                }
            } />
        )
    }

    return(
        <BrowserRouter>
           
            <PrivateRoute path="settings">
                <Settings />
            </PrivateRoute>
            <Route path="/" exact>
                <Login />
            </Route>
        </BrowserRouter>    
    )
}
export default Routes;