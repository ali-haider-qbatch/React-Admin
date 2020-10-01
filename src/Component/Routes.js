import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ForgetPassword from "./LoginScreen/ForgetPassword";
import PasswordSent from "./LoginScreen/PasswordSent";
import Dashboard from "./Dashboard";
const routes = [
  {
    path: "/",
    exact: true,
    header: () => <></>,
    sidebar: () => <></>,
    // sidebar: () => <></>,
    main: () => <SignUp />,
  },
  {
    path: "/forget-password",
    header: () => <></>,
    sidebar: () => <></>,
    // sidebar: () => <></>,
    main: () => <ForgetPassword />,
  },
  {
    path: "/password-send",
    header: () => <></>,
    sidebar: () => <></>,
    // sidebar: () => <></>,
    main: () => <PasswordSent />,
  },
  {
    path: "/dashboard",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // main: () => <Sidebar children={Dashboard} />,
  },
  {
    path: "/listItem",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={ListItem} />,
  },
  {
    path: "/notifications",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Notifications} />,
  },
  {
    path: "/setting",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Setting} />,
  },
  {
    path: "/order",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Order} />,
  },
  {
    path: "/detail-product",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={DetailProduct} />,
  },
  {
    path: "/strategy",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Strategy} />,
  },
  {
    path: "/Layout",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Strategy} />,
  },
  {
    path: "/detail-product",
    header: () => <Header />,
    sidebar: () => <Sidebar />,
    // sidebar: () => <Sidebar children={Strategy} />,
  },
];
function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={
              <>
                <route.header />
                <route.sidebar />
              </>
            }
          />
        ))}
      </Switch>
      <Switch>
        {routes
          .filter((route) => route.main)
          .map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
      </Switch>
    </Router>
  );
}

export default Routes;
