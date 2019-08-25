import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import { pseudoRandomBytes } from 'crypto';
import { Card } from '@material-ui/core';

//// local storage cart
// getItems = () => {    API.getItems().then(function(res){
//         itemsAll=res
//     })
// }

async function cart(){
    await API.getItems().then(items=> itemsAll=items)
        let cart = localStorage.getItem('cart');
      console.log(itemsAll)
      var arr= cart.split(",")
      var purchasedProdId=[]
      for(var i=1;i<arr.length-1;i++){
            var keyVal=arr[i].split(':')
            var str2 = keyVal[0].replace (/"/g, "")
          console.log(str2 + "quantity: "+keyVal[1])
          purchasedProdId.push(str2)
      }
      for(var j=0;j<itemsAll.length;j++){
          for(var k=0;k<purchasedProdId.length;k++){
          if(j==purchasedProdId[k])  
          {
              console.log(itemsAll[j].brandName)
              var newProduct= { name: itemsAll[j].brandName, desc: itemsAll[j].itemDescription, price: itemsAll[j].ourPrice }
              products.push(newProduct)
              console.log(newProduct)
          }
        }
      }
      productPush=true
      console.log(products)
};


 

////
let itemsAll;
let productPush= false
const products = [
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
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
cart()
export default  function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
      </Typography>
            <List disablePadding>
                {products.map(product => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        $34.06
          </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}