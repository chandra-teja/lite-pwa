import Modal from "../Modal";
import styles from "../../../styles/cart.module.css";
function Cart() {
  const Cart_Items = [
    {
      id: "1",
      title: "chicken",
      wt: "500gms",
      cost: "225Rs",
    },
  ];
  return (
    <Modal>
      <div>Cart</div>
      <button className="btn">Close</button>
      <div>Items</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>625</span>
      </div>
      <div>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
