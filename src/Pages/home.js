import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';


//components
import CreateSensor from '../Components/sensors/AddSensor'
import SensorList from '../Components/sensors/SensorList'


class home extends Component{
    render(){
        const {sensors} = this.props;
        return(
            <div className="home container">
                <div className="list">
                    <SensorList sensors={sensors}/>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return{
        sensors: state.firestore.ordered.sensors
    }
}

export default compose(
    firestoreConnect(() => ['sensors']),
    connect(mapStateToProps)
    )(home)