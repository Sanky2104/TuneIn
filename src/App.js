import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
          <Route path='/home'>
            <div>
            <Header />
            <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
