import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { checkAuth, FETCH_AUTH } from 'Ducks/trainer';
import { isLoading } from 'Ducks/loading';
import ProtectedRoute from 'HOC/protected-route';
import AuthPage from 'Pages/auth-page';
import LoadingScreen from 'Components/loading-screen';
import { Dashboard } from 'Templates';
import ProfilePage from 'Pages/profile-page';
import {
  LOGIN,
  EVENTS,
  PROFILE,
  REGISTRATION
} from 'Constants/routes';

const stateToProps = state => ({
  isFetchCheckAuth: isLoading(FETCH_AUTH)(state)
});
const dispatchToProps = {
  checkAuth
};

@connect(stateToProps, dispatchToProps)
class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  };

  render() {
    const { isFetchCheckAuth } = this.props;

    if(isFetchCheckAuth) {
      return <LoadingScreen />;
    }

    return (
      <Router>
        <Switch>
          <ProtectedRoute noAuth path={ LOGIN } component={ AuthPage } redirect={ PROFILE } />
          <ProtectedRoute noAuth path={ REGISTRATION } component={ AuthPage } redirect={ PROFILE } />
          <ProtectedRoute path={ EVENTS } component={ Dashboard } redirect={ LOGIN } />
          <ProtectedRoute path={ PROFILE } component={ ProfilePage } redirect={ LOGIN } />
          <Route component={() => '404'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
