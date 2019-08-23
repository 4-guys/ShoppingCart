import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = (productId) =>  {
  // if (getState().products.byId[productId].inventory > 0) {
    // dispatch(addToCartUnsafe(productId))
  // }
  // console.log("cart has "+localStorage.getItem('cart'))
  // var cart = []
  // console.log("added")
  // console.log(productId)
  // cart.push(productId.id)
  // localStorage.setItem('cart', JSON.stringify(cart))
  // const data = JSON.parse(localStorage.getItem('cart'))
  // addToCartUnsafe(productId)
//test ADD TO CART///////////////////////////////////////////////////

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

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  // dispatch({
  //   type: types.CHECKOUT_REQUEST
  // })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
