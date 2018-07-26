import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { FETCH_AUTH } from 'Ducks/trainer';
import { FETCH_DICTIONARY } from 'Ducks/dictionary';
import { isLoading } from 'Ducks/loading';
import ProtectedRoute from 'HOC/protected-route';
import AuthPage from 'Pages/auth-page';
import LoadingScreen from 'Components/loading-screen';
import { Dashboard } from 'Templates';
import ProfilePage from 'Pages/profile-page';
import PupilsPage from 'Pages/pupils-page';
import CreateCompetitionPage from 'Pages/create-competition-page';
import {
  LOGIN,
  EVENTS,
  PUPILS,
  PROFILE,
  REGISTRATION,
  CREATE_COMPETITION
} from 'Constants/routes';

const stateToProps = state => ({
  isFetchCheckAuth: isLoading(FETCH_AUTH)(state),
  isFetchDictionary: isLoading(FETCH_DICTIONARY)(state)
});
const dispatchToProps = {};

@connect(stateToProps, dispatchToProps)
class App extends Component {
  render() {
    const { isFetchCheckAuth, isFetchDictionary } = this.props;

    if(isFetchCheckAuth || isFetchDictionary) {
      return <LoadingScreen />;
    }

    return (
      <Router>
        <Switch>
          <ProtectedRoute noAuth path={ LOGIN } component={ AuthPage } redirect={ PROFILE } />
          <ProtectedRoute noAuth path={ REGISTRATION } component={ AuthPage } redirect={ PROFILE } />
          <ProtectedRoute path={ EVENTS } component={ Dashboard } redirect={ LOGIN } />
          <ProtectedRoute path={ PROFILE } component={ ProfilePage } redirect={ LOGIN } />
          <ProtectedRoute path={ PUPILS } component={ PupilsPage } redirect={ LOGIN } />
          <ProtectedRoute path={ CREATE_COMPETITION } component={ CreateCompetitionPage } redirect={ LOGIN } />
          <Route component={() => '404'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
