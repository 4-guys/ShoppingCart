export const addToCart = (productId) =>  {
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