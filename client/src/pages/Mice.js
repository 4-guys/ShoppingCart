import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ProductList, ProductCard } from '../component/ProductCard';
import API from '../utils/API';


// const useStyles = makeStyles(theme => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//         marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },

// }));
// const classes = useStyles();

class Products extends Component {
    state = {
        items: []
    };
    componentDidMount = () => {
        this.getItems();
    };
    getItems = () => {
        API.getItem("Gaming Mouse").then(items => this.setState({ items }))
    }
    // listItems= ()=> {
    //     for(var i=0;i<items.length;i++){
    //         if(items.itemName=="Laptops"){
    //             cards.push(items[i])
    //         }
    //     }
    //     console.log(cards)
    // }


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
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Mice
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>

                        </Container>
                    </div>
                    <Container
                        // className={classes.cardGrid} 
                        maxWidth="md">
                        <ProductList >
                            {this.state.items.map(card => (
                                <ProductCard
                                    key={card.id}
                                    image={card.itemImg}
                                    title={card.brandName}
                                    itemDescription={card.itemDescription}
                                />))}
                        </ProductList>


                        {/* <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid> 
                                item key={card} xs={12} sm={6} md={4}>

                                    <ProductCard
                                    itemImg={card.image}
                                    brandName={card.title}
                                    itemDescription={card.itemDescription}
                                    />
                                </Grid>
                            ))}
                        </Grid> */}
                    </Container>
                    <Container
                        // className={classes.cardGrid} 
                        maxWidth="md">
                        {/* End hero unit */}
                        {/* <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <ProductCard></ProductCard>
                                </Grid>
                            ))}
                        </Grid> */}
                    </Container>
                </main>

            </React.Fragment>
        );
    }
}
export default Products;
