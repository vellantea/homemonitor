import React from 'react'
import SensorListText from './SensorListText'
import SensorData from './SensorData'
import {Link} from 'react-router-dom'


const SensorList = ({sensors}) => {
	return(
		<div className="list of sensors">
			{ sensors && sensors.map(sensor => {
				return (
					<Link to={'sensor/' + sensor.id}>
						<SensorListText sensor={sensor} key={sensor.id} />
					</Link>
				)
			})}
		</div>
	)
}

export default SensorList