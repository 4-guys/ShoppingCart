import React, { Component } from "react";
import Carousel from '../component/Carousel'
import { ProductList, ProductCardHorizontal } from '../component/ProductCard'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';

const divStyle = {
    padding: '50px'
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


    render() {
        return (

            <React.Fragment>

                <Container maxWidth="lg">

                    <Carousel />
                </Container>
                <Container>
                <Grid
                    // container
                    // direction="row"
                    // justify="center"
                    // alignItems="center"
                    spacing={4}
                >

                    <ProductList >
                        {this.state.items.map(card => (
                            <Grid item xs={12} sm={6} md={4} style={divStyle}>
                                <ProductCardHorizontal
                                    key={card.id}
                                    image={card.itemImg}
                                    title={card.brandName + " " + card.itemName}
                                    itemDescription={card.itemDescription}
                                />
                            </Grid>
                        ))}
                    </ProductList>
                </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default Home;