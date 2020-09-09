import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
// MUI 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from'@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = {
    form: {
        textAlign: 'center'
    },
    image:{
        margin:'10px auto 10px auto'
    },
    pageTitle:{
        margin: 'auto auto auto auto'
    },
    button:{
        margin: '30px auto 30px auto',
        height: 50,
        width: 150
    },
    textField:{
        margin: '10px auto 10px auto'
    }
}


class login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            passsword:'',
            loading: false,
            errors: {}
        }
    }
    handleSubmit = (event) => {
        console.log('Welcome')
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        const { classes } = this.props;
        return(
            <Grid container className = {classes.form}>

                <Grid item sm/>
                <Grid item sm>
                    <img style={{ width:150, height:150 }}
                    src={AppIcon} alt="WeatherSensor" className={classes.image}/>
                    <Typography 
                        variant="h2" 
                        className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id="email" 
                            name="email" 
                            type="email" 
                            label="Email" 
                            className={classes.textField}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Password" 
                            className={classes.textField}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}>
                            Submit
                            </Button>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);