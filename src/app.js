import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { setUserToState } from 'Ducks/user';
import AuthPage from 'Pages/auth-page';
import { Dashboard } from 'Templates';
import {
  LOGIN,
  EVENTS,
  REGISTRATION
} from 'Constants/routes';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserToState
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={ LOGIN } component={ AuthPage } />
          <Route path={ REGISTRATION } component={ AuthPage } />
          <Route path={ EVENTS } component={ Dashboard } />
          {/* <PrivateRoute redirect="/login" path="/events" component={EventsPage} authed={authed} /> */}
          <Route component={() => '404'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
