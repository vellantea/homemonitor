import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './config/fbConfig'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'

import 'firebase/firestore';



const functions = require('firebase-functions');

const admin = require('firebase-admin');

//const app = require('express')();

admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyDZRA90_3EDP5CBsLfDrlWTQjHNVlbugaQ",
    authDomain: "home-monitor-f28b4.firebaseapp.com",
    databaseURL: "https://home-monitor-f28b4.firebaseio.com",
    projectId: "home-monitor-f28b4",
    storageBucket: "home-monitor-f28b4.appspot.com",
    messagingSenderId: "517571335797",
    appId: "1:517571335797:web:25d8f781bbe7720bc94a3c",
    measurementId: "G-PNH7MHFXP7"
};


const rrfConfig = { 
    userProfile: 'sensors',
    useFirestoreForProfile: true
}

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase)
    )
);

const rffProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rffProps}>
            <App />  
        </ReactReduxFirebaseProvider>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();

