import { Redirect, Route, Switch, useLocation } from "react-router";
import ListView from "./components/ListView";
import FileView from "./components/FileView";
import Breadcrumb from "./components/Breadcrumb";

const Routes = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Redirect exact from="/" to="/dir" />
        <Route path="/dir" component={ListView} />
        <Route path="/file" component={FileView} />
        <Route path="/">
          <h1>Not Found</h1>
        </Route>
      </Switch>
      <Breadcrumb path={pathname} />
    </>
  );
};

export default Routes;
