import classes from "./Card.module.scss";

const Card = (props) => (
  <div className={`card text-center ${classes.Card}`}>
    <img src={props.image} alt="" className="card-image-top" />
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{`Цена: ${props.price}$`}</li>
      <li className="list-group-item">{`Общая цена: ${props.totalPrice}$`}</li>
    </ul>
    <div className="card-body">
      <h5 className="card-title">
        {props.title}
      </h5>
      <button className="btn btn-outline-danger" onClick={props.throwProduct}>
        -
      </button>
      <input
        type="number"
        min="0"
        onChange={props.onChange}
        value={props.value}
      />
      <button className="btn btn-outline-success" onClick={props.addProduct}>
        +
      </button>
    </div>
  </div>
);

export default Card;
