import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from '../config/fbConfig.js';
import { AuthContext } from "../Auth.js";

import AppIcon from '../images/icon.png';
import Link from 'react-router-dom/Link';

// MUI 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from'@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container style={{ textAlign: 'center'}} >
    <Grid item sm/>
            <Grid item sm>
                <img style={{ width:150, height:150 }}
                src={AppIcon} alt="WeatherSensor" className='classes.image'/>
                <Typography 
                    variant="h2"
                    style={{ margin: 'auto auto auto auto'}}
                    >
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField 
                        id="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        style={{ margin: '10px auto 10px auto' }}
                        fullWidth/>
                    <TextField 
                        id="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        style={{ margin: '10px auto 10px auto'}}
                        fullWidth/>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        style={{ margin: '30px auto 30px auto',
                        height: 50,
                        width: 150,
                        position: 'relative'}}
                        >Sign Up
                    </Button>
                    <br />
                    <small>
                        Don't have an account? Sign up <Link to="/signup">here</Link>
                    </small> 
                </form>
            </Grid>
        <Grid item sm/>
</Grid>
  )
};

export default withRouter(Login);