import React, { Component } from "react";
import Carousel from '../component/Carousel'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import {GridCard,  } from '../component/GridCard'
import { addToCart } from '../actions'


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
        API.getItem("laptop").then(items => this.setState({ items }))
    }
    handleClick = (id) => () => {
        console.log(id);
       addToCart(id)
      }
    render() {
        return (

            <React.Fragment>

                <Container style={divStyle} maxWidth="lg">

                    <Carousel />
                </Container>
                <Container style={divStyle}>
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
                                    ourPrice={card.ourPrice}
                                    handleToggle={this.handleClick(card.id)}
                                />
                        ))}
                </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default Home;