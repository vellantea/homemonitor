import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import sensorReducer from './sensorReducer'
import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
    sensor: sensorReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer