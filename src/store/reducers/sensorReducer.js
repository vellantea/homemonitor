const initState = {
	projects:[
		{id: '1',title:'help me find peach',content:'blah, blah, blah'},
		{id: '2',title:'collect all the stars',content:'blah, blah, blah'},
		{id: '3',title:'egg hunt with yoshi',content:'blah, blah, blah'}
	]
}

const sensorReducer = (state={}, action) => {
	switch(action.type){
		case 'CREATE_SENSOR':
			console.log('created sensor', action.project)
			return state;
		case 'CREATE_PROJECT_sensor':
			console.log('create sensor error', action.err);
			return state;
		default:
			return state;
	}
}

export default sensorReducer