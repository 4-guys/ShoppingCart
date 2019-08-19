import React, { Component } from "react";
import "./App.css";
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>

      <NavBar />
      <Container maxWidth="lg">
        <Carousel />
      </Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >

        <Grid item ><ProductCard /></Grid>
        <Grid item ><ProductCard /></Grid>
        <Grid item ><ProductCard /></Grid>
      </Grid>


</React.Fragment>
=======
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
        </div>
      </Router>
>>>>>>> origin/calvin

    )
  }
}

export default App;
