import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import Navbar from './Components/Navbar';

// Pages
import home from './Pages/home';
import login from './Pages/login';

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
    }
  },
})

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
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  ); 
}

export default App;
