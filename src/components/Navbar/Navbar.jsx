import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles["site-nav"]}>
      <NavLink className={styles.brand} to="/">
        mellemrum<span>.</span>
      </NavLink>
      <div className={styles["nav-links"]}>
        <NavLink to="/">Events</NavLink>
        <NavLink to="/om">Om Mellemrum</NavLink>
      </div>
    </nav>
  );
}
