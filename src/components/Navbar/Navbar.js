import {NavLink} from 'react-router-dom';
import { CartDash, CartDashFill } from "react-bootstrap-icons";
import classes from "./Navbar.module.scss";

const Navbar = ({ shoppingCart }) => {
  const totalPrice = Object.keys(shoppingCart).reduce(
    (totalPrice, productId) => {
      return totalPrice + shoppingCart[productId].totalPrice;
    },
    0
  );

  let cls = classes.empty;
  let icon = <CartDash size={20} color="white" />;
  if (totalPrice > 0) {
    cls = classes.fill;
    icon = <CartDashFill size={20} color="#2be02b" />;
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${classes.Navbar}`}
    >
      <div className="container">
      <NavLink to="/" className="navbar-brand">Fruit</NavLink>
      <div id="navbarColor01">
          <span className={cls}>{`${totalPrice}$`}</span>
          <NavLink to="/cart" className="btn btn-outline-info my-2 my-sm-0 ml-2" href="#">
            {icon}
          </NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
