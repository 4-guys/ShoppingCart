import React, { Component } from "react";
import "./App.css";
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails"
import Product from "./pages/Product";
import Mats from "./pages/Mats";
import Mice from "./pages/Mice";
import Keyboards from "./pages/Keyboards";
import Audio from "./pages/Audio";
import Accesories from "./pages/Accesories";
import Checkout from "./pages/Checkout";
import Footer from './component/Footer'
import Contact from "./pages/Contact";


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
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/Mats" component={Mats}/>
          <Route exact path="/Mice" component={Mice}/>
          <Route exact path="/Keyboards" component={Keyboards}/>
          <Route exact path="/Audio" component={Audio}/>
          <Route exact path="/Accesories" component={Accesories}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
