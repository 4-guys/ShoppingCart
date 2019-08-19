import React, { Component } from "react";
import "./App.css";
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
        </div>
      </Router>

    )
  }
}

export default App;
