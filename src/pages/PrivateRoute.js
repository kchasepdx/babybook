import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "/Users/kristenchase/baby-book/src/contexts/AuthContext.js";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/babybook" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
