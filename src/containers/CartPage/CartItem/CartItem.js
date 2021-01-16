import { Basket2Fill } from "react-bootstrap-icons";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <div className={`card border-info mb-3 ${classes.CartItem}`}>
      <div className="card-header">{props.title}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Цена: ${props.price}$`}</li>
        <li className="list-group-item">{`Вес: ${props.count}кг`}</li>
        <li className="list-group-item">{`Общая цена: ${props.totalPrice}$`}</li>
        <li className="list-group-item">{`Размер скидки: ${props.discountAmount}$`}</li>
        <li className="list-group-item">
          <button className="btn btn-outline-danger" onClick={props.onClick}>
            <Basket2Fill size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
