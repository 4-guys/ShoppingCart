import API from '../utils/API'

export const addToCart = (productId) =>  {
//   async function Shopping(){
//     await API.getItems().then(items=> itemsAll=items)
//         let shoppingCart = localStorage.getItem('cart');
//       var arr= shoppingCart.split(",")
//       var purchasedProdId=[]
//       for(var i=1;i<arr.length-1;i++){
//             var keyVal=arr[i].split(':')
//             var str2 = keyVal[0].replace (/"/g, "")
//           purchasedProdId.push(str2)
//       }
//       for(var j=0;j<itemsAll.length;j++){
//           for(var k=0;k<purchasedProdId.length;k++){
//           if(j==purchasedProdId[k])  
//           {
//               var newProduct= { name: itemsAll[j].brandName, desc: itemsAll[j].itemDescription, price: itemsAll[j].ourPrice }
//               products.push(newProduct)
//               total= total + itemsAll[j].ourPrice
//               console.log(newProduct)
//           }
//         }
//       }
//       console.log(products)
//       console.log(total)
// };
let itemsAll;
let total;
let products=[]
// Shopping()




    let cart = localStorage.getItem('cart') 
                  ? JSON.parse(localStorage.getItem('cart')) : {};
    let id = productId.toString();
    cart[id] = (cart[id] ? cart[id]: 0);
    let qty = cart[id] + parseInt(1);
    // if (this.props.product.available_quantity < qty) {
    //   cart[id] = this.props.product.available_quantity; 
    // } else {
      cart[id] = qty
    // }
    localStorage.setItem('cart', JSON.stringify(cart));
  console.log(localStorage.cart)
  }
