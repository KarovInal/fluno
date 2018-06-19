import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({authed, redirect, path, noAuth, children}) => {
  const isAuthed = noAuth
    ? noAuth && !authed
    : authed;

  return (
    <Route
      path={path}
      render={() =>
        isAuthed
          ? children
          : <Redirect to={redirect} />
      }
    />
  );
};

export default PrivateRoute;
