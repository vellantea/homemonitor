export const createSensor = (sensor) => {
	return(dispatch, getState, {getFirebase, getFirestore}) => {
		//make async call to database
		const firestore = getFirestore();
		firestore.collection('sensors').add({
			...sensor,
			creatAt: new Date()
		}).then(() => {
			dispatch({type:'sensor', sensor});
		}).catch(() => {
		})
	}
};