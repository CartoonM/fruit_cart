import {connect} from "react-redux";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./containers/ProductList/ProductList";
import CartPage from './containers/CartPage/CartPage';

function App({ shoppingCart }) {

  const routes = (
    <Switch>
      <Route path='/cart' component={CartPage}/>
      <Route path='/' component={ProductList}/>
      <Redirect to='/' />
    </Switch>
  )

  return (
    <>
      <Navbar  shoppingCart={shoppingCart} />
      <Layout>
        {routes}
      </Layout>
    </>
  );
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  };
}

export default withRouter(connect(mapStateToProps)(App));
