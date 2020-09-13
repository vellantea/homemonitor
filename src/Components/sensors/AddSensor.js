import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addSensor} from '../../store/actions/sensorActions'

class AddSensor extends Component{
	state = {
		number:'',
		name:'',
		temp:'10',
		humidity:'20'
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addSensor(this.state)
	}
	render(){
		return(

				<form onSubmit={this.handleSubmit} className="add-new-sensor-form">

					<h1 className="add-new-sensor">Add New Sensor</h1>

					<div className="input-name">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" onChange={this.handleChange}/>
					</div>
					
					<div className="input-number">
						<label htmlFor="content">Number</label>
						<input type="text" id="number" onChange={this.handleChange}/>
					</div>

					<div className="add-button">
						<button className="add-sensor-button">Add Sensor</button>
					</div>

				</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addSensor: (sensor) => dispatch(addSensor(sensor))
	}
}

export default connect(null,mapDispatchToProps)(AddSensor)