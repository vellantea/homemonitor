import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router";
import axios from "axios";


class Logout extends Component {
    state = {
        navigate: false
    };
    logout = () => {
        localStorage.clear("Token");
        this.setState({navigate: true})
    };
    handleLogoutClick() {
        axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then(response => {
            this.props.handleLogout();
          })
          .catch(error => {
            console.log("logout error", error);
          });
    }

  render() {
      
      const {navigate} = this.state;
      if(navigate){
          return <Redirect to = "/login" push={true}/>;
      }
    return <Button onClick={() => this.handleLogoutClick()}>Logout</Button>
  }
}

export default Logout;
