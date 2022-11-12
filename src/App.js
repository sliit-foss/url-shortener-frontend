import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import LoginLayout from "./layouts/LoginLayout/LoginLayout";
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";

function App() {
  const isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLayout} />
        <Route
          path="/login"
          exact
          component={isLoggedIn ? ProfileLayout : LoginLayout}
        />
        {/* <Route path="/profile" exact component={ProfileLayout} /> */}
      </Switch>
    </Router>
  );
}

export default App;
