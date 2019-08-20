import React, { Component } from "react";
import "./App.css";
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails"
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

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
          <Route exact path="/productDetails" component={ProductDetails}/>          
          <Route exact path="/product" component={Product}/>
          <Route exact path="/checkout" component={Checkout}/>
        </div>
      </Router>

    )
  }
}

export default App;
