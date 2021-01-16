import { SEND_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function setProductCount(productId, count, value = null) {
  return (dispatch, getState) => {
    const state = getState();
    const product = state.productList[productId];
    let productInshoppingCart = { ...state.shoppingCart[productId] };

    if (Object.keys(productInshoppingCart).length === 0)
      productInshoppingCart = getDefaultPosition();
    if (value !== null) count = productInshoppingCart.count + value;
    if (isNaN(count) || count < 1) {
      dispatch(removeFromCart(productId));
      return;
    }

    productInshoppingCart.count = count;

    if (product.discount) {
      const discountPrice =
        (product.price * (100 - product.discountAmountPercent)) / 100;
      const discountProductsCount = Math.floor(count / 3);
      const productsWithoutDiscount = count - discountProductsCount;
      productInshoppingCart.totalPrice =
        productsWithoutDiscount * product.price +
        discountProductsCount * discountPrice;
    } else {
      productInshoppingCart.totalPrice = product.price * count;
    }

    dispatch(sendToCart(productInshoppingCart, productId));
  };
}

function getDefaultPosition() {
  return {
    count: 0,
    totalPrice: 0,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  }
}

export function sendToCart(product, productId) {
  return {
    type: SEND_TO_CART,
    productId,
    product,
  };
}
