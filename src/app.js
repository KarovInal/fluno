import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { isEmpty } from 'lodash';
import { auth } from 'Firebase/firebase';
import { setUserToState } from 'Ducks/user';
import AuthPage from 'Pages/auth-page';
import LoadingScreen from 'Components/loading-screen';
import PrivateRoute from 'Components/private-route';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserToState
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  state = {
    authed: false,
    loading: true
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.setUserToState(user);

      this.setState({
        authed: !isEmpty(user),
        loading: false
      });
    });
  }

  render() {
    const { loading, authed } = this.state;

    if(loading) {
      return <LoadingScreen />;
    }

    return (
      <Router>
        <Switch>
          <PrivateRoute redirect="/404" path="/(login|register|recovery)/" component={AuthPage} authed={authed} />
          <Route component={() => '404'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
