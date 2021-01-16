import { connect } from "react-redux";
import classes from "./CartPage.module.scss";
import CartItem from "./CartItem/CartItem";
import {removeFromCart} from '../../store/actions/shoppingCart';

const CartPage = (props) => {

  const removeItemHandler = (productId) => {
    props.removeItem(productId);
  }

  let totalPrice = 0;
  let totalPriceWithDiscount = 0;
  let totalDiscountAmount = 0;
  const items = Object.keys(props.shoppingCart).map((productId) => {
    const fullPrice =
      props.shoppingCart[productId].count * props.productList[productId].price;
    totalPrice += fullPrice;
    totalPriceWithDiscount += props.shoppingCart[productId].totalPrice;
    const discountAmount = fullPrice - props.shoppingCart[productId].totalPrice;
    totalDiscountAmount += discountAmount;
    return (
      <div key={productId} className="col-md-auto">
        <CartItem
          title={props.productList[productId].title}
          price={props.productList[productId].price}
          totalPrice={props.shoppingCart[productId].totalPrice}
          count={props.shoppingCart[productId].count}
          discountAmount={discountAmount}
          onClick={() => removeItemHandler(productId)}
        />
      </div>
    );
  });

  return (
    <>
      <div className="row">{items}</div>
      <hr className={classes.line} />
      <h4>{`Итоговая сумма: ${totalPrice}$`}</h4>
      <hr className={classes.line} />
      <h4>{`С учетом скидки: ${totalPriceWithDiscount}$`}</h4>
      <hr className={classes.line} />
      <h4>{`Размер скидки: ${totalDiscountAmount}$`}</h4>
    </>
  );
};

function mapStateToProps(state) {
  return {
    productList: state.productList,
    shoppingCart: state.shoppingCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: productId => dispatch(removeFromCart(productId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
