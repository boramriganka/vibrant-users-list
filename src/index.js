import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Users from './components/Users'
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Users" component={Users} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
    <React.StrictMode>
      <Routing/>
    </React.StrictMode>,
    document.getElementById("root")
  );