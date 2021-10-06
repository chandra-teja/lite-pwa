import styles from "../../styles/Modal.module.css";
import ReactDom from "react-dom";
import  {Fragment}  from "react";
import  {useEffect} from "react";
import {useState}  from "react";
function Backdrop() {
  return (<div className={styles.backdrop}></div>);
}
function Overlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const [mount, setmount] = useState(false);
  useEffect(() => {
    setmount(true);
  }, []);
  if (mount) {
    return (
      <Fragment>
        {ReactDom.createPortal(
          <Backdrop />,
          document.getElementById("cartPortal")
        )}
        {ReactDom.createPortal(
          <Overlay>{props.children}</Overlay>,
          document.getElementById("cartPortal")
        )}
      </Fragment>
    );
  }

  else{
      return null;
  }
}

export default Modal;
