import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component{
    render(){
        return(
            <AppBar>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/login" >Login</Button>
                    <Button color="inherit" component={Link} to= "/" >My Home</Button>
                    <Button color="inherit" component={Link} to= "/signup" >Sign Up</Button>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Navbar