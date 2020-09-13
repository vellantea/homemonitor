import React from 'react'

const SensorListText = ({sensor}) => {
	return(
		<div className="sensor list text">
			<span>{sensor.name}</span>
		</div>
	)
}

export default SensorListText