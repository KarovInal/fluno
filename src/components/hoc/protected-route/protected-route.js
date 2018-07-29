import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import isAuth from 'Selectors/auth/isAuth';

const stateToProps = state => ({
  isAuth: isAuth(state)
});
const dispatchToProps = () => ({});

@connect(stateToProps, dispatchToProps)
class ProtectedRoute extends Component {
  static propTypes = {
    noAuth: PropTypes.bool,
    path: PropTypes.string.isRequired,
    redirect: PropTypes.string
  };

  render() {
    const {
      isAuth,
      noAuth,
      redirect,
      ...props
    } = this.props;

    if(noAuth) {
      return !isAuth
        ? <Route exact {...props} />
        : <Redirect to={ redirect } />
    }

    return isAuth
      ? <Route exact {...props} />
      : <Redirect to={ redirect } />
  }
};

export default ProtectedRoute;
