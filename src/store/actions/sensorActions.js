export const addSensor = (sensor) => {
	return(dispatch, getState, {getFirebase, getFirestore}) => {
		const firestore = getFirestore();
		firestore.collection('sensors').add({
			...sensor,
			creatAt: new Date()
		}).then(() => {
			dispatch({type:'ADD_SENSOR', sensor:sensor});
		}).catch(() => {
		})
	}
};