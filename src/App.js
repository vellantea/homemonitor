import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//Components
import Navbar from './Components/Navbar';
import PrivateRoute from './util/PrivateRoute';

// Pages
import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';
import logout from './Pages/logout';
import AddSensor from './Components/sensors/AddSensor';
import SensorData from './Components/sensors/SensorData';
import { render } from '@testing-library/react';

import { AuthProvider } from "./Auth";


const theme = createMuiTheme({
  palette:{
    primary: {
      light:'#90a4ae',
      main:'#37474f',
      dark:'#263238',
      contrastText:'#fff'
    },
    secondary: {
      light:'#e0e0e0',
      main:'#757575',
      dark:'#424242',
      contrastText:'#fff'
    },
  }
})


let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false
  }else{
    authenticated = true
  }
}

function App() {
  return (
    <AuthProvider>
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <PrivateRoute exact path = "/" component={home}/>
            <Route exact path='/sensor/:id' component={SensorData}/>
            <Route exact path = "/login" 
              component={login} 
              authenticated={authenticated}
            />
            <Route exact path = "/signup"
              component={signup}
              authenticated={authenticated}
            />
            <Route exact path = "/logout"
              component={logout}
              authenticated={authenticated}
            />
            <Route exact path = "/addsensor" component={AddSensor}/>
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
    </AuthProvider>
  ); 
  
}


export default App;

