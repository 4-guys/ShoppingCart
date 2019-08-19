import React, { Component } from "react";
import "./App.css";
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </div>
      </Router>

    )
  }
}

export default App;
