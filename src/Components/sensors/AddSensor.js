import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'react-router-dom/Link';
import {connect} from 'react-redux'
import {addSensor} from '../../store/actions/sensorActions'
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
	button:{
        margin: '30px auto 30px auto',
        height: 50,
        width: 150,
        position: 'relative'
    }
};


class AddSensor extends Component{
    constructor(){
        super();
        this.state = {
			number:'',
			name:'',
			temp:'10',
			humidity:'20'
		}
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSensor(this.state)
    }
    handleChange = (event) => {
        this.setState({
			[event.target.id]:event.target.value
		})
    }
    render(){
        const { classes } = this.props;
        return(
            <Grid container className = {classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography 
                        variant="h3" 
                        className={classes.pageTitle}>
                        Add New Sensor
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
						<TextField 
							id="name"
							name = "name"
                            type="text" 
                            label="Name:" 
                            className= {classes.inputName}
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            fullWidth/>
						<TextField 
							id="number"
							name = "name"
                            type="text" 
                            label="Number:" 
                            className= {classes.inputNumber}
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            fullWidth/>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                        >
                            Add Sensor
                        </Button>
                        <br />
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
	return{
		addSensor: (sensor) => dispatch(addSensor(sensor))
	}
}

AddSensor.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(null,mapDispatchToProps)(AddSensor));