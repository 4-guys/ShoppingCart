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
                    // direction="row"
                    // justify="center"
                    // alignItems="center"
                    spacing={4}
                >
                <Grid item xs={12} sm={6} md={4} style={divStyle}>
                    <ProductList >
                        {this.state.items.map(card => (
                            
                                <ProductCardHorizontal
                                    key={card.id}
                                    image={card.itemImg}
                                    title={card.brandName + " " + card.itemName}
                                    itemDescription={card.itemDescription}
                                />
                            
                        ))}
                    </ProductList>
                    </Grid>
                </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default Home;