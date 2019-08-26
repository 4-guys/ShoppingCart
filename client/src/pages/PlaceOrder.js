import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
let itemsAll;
let total= 0


const products = [
   
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();
    const [state, setState] = useState(shoppingCart);
    async function cart(){
        await API.getItems().then(items=> itemsAll=items)
            let cart = localStorage.getItem('cart');
          var arr= cart.split(",")
          var purchasedProdId=[]
          for(var i=1;i<arr.length-1;i++){
                var keyVal=arr[i].split(':')
                var str2 = keyVal[0].replace (/"/g, "")
              purchasedProdId.push(str2)
          }
          for(var j=0;j<itemsAll.length;j++){
              for(var k=0;k<purchasedProdId.length;k++){
              if(j==purchasedProdId[k])  
              {
                  var newProduct= { name: itemsAll[j].brandName, desc: itemsAll[j].itemDescription, price: itemsAll[j].ourPrice }
                  products.push(newProduct)
                  total= total + itemsAll[j].ourPrice
              }
            }
          }
        
          console.log(total)
          console.log(products)
    
          setState(shoppingCart => {
        // cart()
    // Object.assign would also work
    return {...shoppingCart, ...shoppingCart};
    });
    
    };
    
    useEffect(()=>{
        cart()

    shoppingCart={state}

}, [])
let shoppingCart = products
return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
      </Typography>
            <List disablePadding>
                {shoppingCart.map(product => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {total}
          </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
          </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
          </Typography>
                    <Grid container>
                        {payments.map(payment => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}