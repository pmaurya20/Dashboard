import React, { Component } from 'react';
import './App.css';
import '../src/components/tabs/primaryTabs/primaryTabs.css';
import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Reports from './pages/reports/reports';
import UpdateProfile from './pages/updateProfile/updateProfile';
import Login from './pages/login/login';
import firebase from './config/fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  // Firebase Authentication
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router>
        {
          this.state.user ?
            <div>
              <Header></Header>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/reports" component={Reports} />
              <Route path="/update-profile" component={UpdateProfile} /></div> :
              <Route path="/" component={Login} />
        }
      </Router>
    )
  }
}

export default App;