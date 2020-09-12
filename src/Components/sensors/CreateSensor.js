import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createSensor} from '../../store/actions/sensorActions'

class CreateSensor extends Component{
	state = {
		id:'',
		name:''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createSensor(this.state)
	}
	render(){
		return(
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">

					<h5 className="grey-text text-darken-3">Add new sensor</h5>

					<div className="input-field">
						<label htmlFor="id">ID</label>
						<input type="text" id="id" onChange={this.handleChange}/>
					</div>
					
					<div className="input-field">
						<label htmlFor="content">Name</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Add</button>
					</div>

				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		createSensor: (sensor) => dispatch(createSensor(sensor))
	}
}

export default connect(null,mapDispatchToProps)(CreateSensor)