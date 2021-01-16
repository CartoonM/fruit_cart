import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import { setProductCount } from "../../store/actions/shoppingCart";

const ProductList = ({
  setProductCount,
  decreaseOrIncreaseCount,
  productList,
  shoppingCart,
}) => {
  const addProductHandler = (productId) => {
    decreaseOrIncreaseCount(productId, 1);
  };

  const throwProductHandler = (productId) => {
    decreaseOrIncreaseCount(productId, -1);
  };

  const countHandler = (event, productId) => {
    setProductCount(productId, Number(event.target.value));
    console.log(Number(event.target.value));
  };

  const productCards = Object.keys(productList).map((productId) => (
    <div className="col-md-auto" key={productId}>
      <Card
        image={productList[productId].image}
        title={productList[productId].title}
        value={!shoppingCart[productId] ? 0 : shoppingCart[productId].count}
        addProduct={() => addProductHandler(productId)}
        throwProduct={() => throwProductHandler(productId)}
        onChange={(event) => countHandler(event, productId)}
        price={productList[productId].price}
        totalPrice={
          !shoppingCart[productId] ? 0 : shoppingCart[productId].totalPrice
        }
      />
    </div>
  ));

  return <div className="row">{productCards}</div>;
};

function mapStateToProps(state) {
  return {
    productList: state.productList,
    shoppingCart: state.shoppingCart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProductCount: (productId, count) =>
      dispatch(setProductCount(productId, count)),
    decreaseOrIncreaseCount: (productId, value) =>
      dispatch(setProductCount(productId, null, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
