import Nav from "./Nav";
import styles from "../../styles/layout.module.css";
function Layout(props){
    return (
        <div>
            
            <main className={styles.main}>{props.children}</main>
        </div>
    );
}
export default Layout;