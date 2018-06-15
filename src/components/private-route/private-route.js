import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, redirect, path, noAuth}) => {
  const isAuthed = noAuth
    ? noAuth && !authed
    : authed;

  return (
    <Route
      path={path}
      render={
        props => isAuthed
          ? <Component {...props} />
          : <Redirect to={redirect} />
      }
    />
  );
};

export default PrivateRoute;
