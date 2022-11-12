import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLayout} />
      </Switch>
    </Router>
  );
}

export default App;
