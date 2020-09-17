/*import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const AuthRoute = ({component : Component, authenticated, ...rest}) => (
    <Route
    {...rest}
    render={(props) => 
        authenticated === true ? <Redirect to='/'/> : <Component{...props}/>
    }
    />
)


export default AuthRoute;*/


import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute