import styles from "../../styles/Nav.module.css";
import "bootstrap/dist/css/bootstrap.css";
function Nav() {
  return (
    <div className={styles.Lite}>
      <header className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <h2 className="navbar-brand py-3">Licious Lite</h2>
          <button className={`btn ${styles.cartbtn}`}>
            <span>Profile</span>
            </button>
          <button className={`btn ${styles.cartbtn}`}>
            <span>Cart</span>
            <span className={`badge ${styles.cartbadge}`}>2</span>
          </button>
        </div>
      </header>
    </div>
  );
}
export default Nav;
