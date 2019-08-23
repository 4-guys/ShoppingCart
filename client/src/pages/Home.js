import React, { Component } from "react";
import Carousel from '../component/Carousel'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import {GridCard,  } from '../component/GridCard'


const divStyle = {
    padding: '50px',
    

}

class Home extends Component {
    state = {
        items: []
    };
    componentDidMount = () => {
        this.getItems();
    };
    getItems = () => {
        API.getItems().then(items => this.setState({ items }))
    }


    render() {
        return (

            <React.Fragment>

                <Container maxWidth="lg">

                    <Carousel />
                </Container>
                <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                >

                        {this.state.items.map(card => (
                                <GridCard 
                                    key={card.id}
                                    image={card.itemImg}
                                    title={card.brandName + " " + card.itemName}
                                    itemDescription={card.itemDescription}
                                />
                        ))}
                </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default Home;