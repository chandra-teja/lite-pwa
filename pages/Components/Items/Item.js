import styles from "../../../styles/Item.module.css";
function Item(props) {
  return (
    <div className="card"  style={{width: "30rem"}}>
      <div className="card-body">
        <img className="card-img-top img-thumbnail" style={{width: "18rem", height:"15rem"}} src={props.image} alt="pic" />
        <h2 className="card-title">{props.title}</h2>
        <div className="card-text">{props.description}</div>
        <div>
          {props.wt} {props.cost}
        </div>
      </div>
      <div>
        <button className={`btn ${styles.addcart}`}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
