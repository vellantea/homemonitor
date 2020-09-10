import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';
import Link from 'react-router-dom/Link';
// MUI 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from'@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


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
        width: 150,
        position: 'relative'
      },
      textField:{
        margin: '10px auto 10px auto'
      },
      customError:{
        color: 'red',
        fontSize: '0.8rem'
      },
      progress:{
        position: 'absolute'
      }
};


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
        event.preventDefault();
        this.setState({
            loading: true
        })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/login', userData)
            .then(res =>{
                console.log(res.data);
                localStorage.setItem('FBIdToken', 'Bearer ${res.data.token}');
                this.setState({
                    loading: false
                })
                this.probs.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        const { classes } = this.props;
        const { errors, loading } = this.state;
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
                            helperText = {errors.email}
                            error = {errors.email ? true : false}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Password" 
                            className={classes.textField}
                            helperText = {errors.password}
                            error = {errors.password ? true : false}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        {errors.general && (
                            <Typography variant = "body2"
                            className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            disabled={loading}
                        >
                            Submit
                            {loading && (
                                <CircularProgress
                                    className = {classes.progress}/>
                            )}
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
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);