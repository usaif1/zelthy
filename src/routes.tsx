//dependencies
import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imports
import { paths } from "./routerPaths";

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        {paths.map((path) => {
          return <Route key={path.id}>{path.component}</Route>;
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
