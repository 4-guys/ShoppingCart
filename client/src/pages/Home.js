import React, { Component } from "react";
import Carousel from '../component/Carousel'
import ProductCard from '../component/ProductCard'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <React.Fragment>

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
    );
}

export default Home;