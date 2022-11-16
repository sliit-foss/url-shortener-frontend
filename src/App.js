import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout"; 
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./layouts/ResetLayout/ResetLayout";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLayout} />
        <Route
          path="/login"
          exact
          component={isLoggedIn ? ProfileLayout : AuthLayout}
        />
        <Route path="/reset-password" exact component={ResetLayout} />
      </Switch>
    </Router>
  );
}

export default App;
