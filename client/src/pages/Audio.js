import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ProductList, ProductCard } from '../component/ProductCard';
import API from '../utils/API';
import { addToCart } from '../actions'


const divStyle={
    padding: '50px'}

class Products extends Component {
    state = {
        items: []
    };
    componentDidMount = () => {
        this.getItems();
    };
    getItems = () => {
        API.getItem("Audio").then(items => this.setState({ items }))
    }

       handleClick = (id) => () => {
        console.log(id);
       addToCart(id)
      }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">

                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div
                    // className={classes.heroContent}
                    >
                        <Container style={divStyle} maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Audio
                                </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            SOGU
                            </Typography>

                        </Container>
                    </div>
                    <Container
                        // className={classes.cardGrid} 
                        maxWidth="md">
                        <ProductList >
                            {this.state.items.map(card => (
                                <Container style={divStyle}>
                                <ProductCard style={divStyle}
                                    key={card.id}
                                    image={card.itemImg}
                                    title={card.brandName + " " + card.itemName}
                                    itemDescription={card.itemDescription}
                                    ourPrice={card.ourPrice}
                                    handleToggle={this.handleClick(card.id)}

                                />
                                </Container>
))}
                        </ProductList>
                    </Container>
                </main>

            </React.Fragment>
        );
    }
}
export default Products;
