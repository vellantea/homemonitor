const sensorReducer = (state={}, action) => {
	switch(action.type){
		case 'ADD_SENSOR':
			console.log('added sensor', action.sensor)
			return state;
		default:
			return state;
	}
}

export default sensorReducer