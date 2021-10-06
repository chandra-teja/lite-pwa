import Link from "next/link";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ItemList from "./Components/Items/ItemList";
import Cart from "./Components/Cart/Cart";
import Nav from "../pages/Components/Nav";
export default function Home() {
  const [cartDisplay, setcartDisplay] = useState(false);
  const [mobilenum, setmobilenum] = useState("");

  function showCart() {
    setcartDisplay(true);
  }
  function hideCart() {
    setcartDisplay(false);
  }
  function mobilenumHandler(event) {
    setmobilenum(event.target.value);
  }
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="Number"
            id="mobile"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={mobilenumHandler}
            required
          ></input>
          <small className="form-text text-muted">
            Please Enter your registered Number.
          </small>
          <button type="submit" className="btn btn-Light">
            <Link
              href={{
                pathname: "/profilePage",
                query: { mobile: mobilenum },
              }}
            >
              Login
            </Link>
          </button>
          {cartDisplay && <Cart />}
          <ItemList />
        </div>
      </form>
    </div>
  );
}
