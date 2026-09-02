import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
import ProfilePic from "../../img/profilePicture.jpg";
export default function Navbar() {
  return (
    <nav className={styles.siteNav}>
      <NavLink className={styles.brand} to="/">
        mellemrum<span>.</span>
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink to="/">Events</NavLink>
        <NavLink to="/om">Om Mellemrum</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/profil">
          <img
            src={ProfilePic}
            alt="Profile"
            width="48"
            height="48"
            decoding="async"
            className={styles.profilePic}
          />
        </NavLink>
      </div>
    </nav>
  );
}
