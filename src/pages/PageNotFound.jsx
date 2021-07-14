import * as React from "react";

function PageNotFound({ location }) {
  const location = props.match.params.location;

  return (
    <h1>
      Page not found - the path, <code>{location.pathname}</code>, did not match
      any React Router routes.
    </h1>
  );
}

export default PageNotFound;
