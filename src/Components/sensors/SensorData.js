import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const SensorData = (props) => {
	const {sensor} = props;
	if(sensor){
	return(
		<div className="sensor-data section">

            <h2 className="sensor-name">{sensor.name}</h2>

            	<p>Temperature: {sensor.temp}</p>
            	<p>Humidity: {sensor.humidity}</p>

      	</div>

	)} else{
		return(
			<div className="loading section">
        		<p>Loading...</p>
      		</div>	
		)
	}
}

const mapStateToProps = (state, ownProps) =>{
	console.log(state);
	const id = ownProps.match.params.id
	const sensors = state.firestore.data.sensors;
	const sensor = sensors ? sensors[id] : null 
	return {
		sensor: sensor
	}
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([
			{collection:'sensors'}
		])
	)(SensorData)