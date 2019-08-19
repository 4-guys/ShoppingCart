import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from './component/Carousel'
import NavBar from './component/NavBar'
import ProductCard from './component/ProductCard'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
class App extends Component {
  render() {
    return (
      <React.Fragment>

      <NavBar />
      <Container maxWidth="md">

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

    )
  }
}

export default App;
