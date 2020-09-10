import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';

//Components
import Navbar from './Components/Navbar';

// Pages
import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';

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
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path = "/" component={home}/>
            <Route exact path = "/login" component={login}/>
            <Route exact path = "/signup" component={signup}/>
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  ); 
}

export default App;
