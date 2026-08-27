import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-intro"]}>
          <p className={styles["footer-brand"]}>
            mellemrum<span>.</span>
          </p>
          <p>Udvalgte kulturoplevelser og nye perspektiver på Aarhus.</p>
        </div>
        <nav className={styles["footer-links"]} aria-label="Footer">
          <div className={styles["footer-link-group"]}>
            <p className={styles["footer-heading"]}>Udforsk</p>
            <Link to="/">Events</Link>
            <Link to="/om">Om Mellemrum</Link>
          </div>
          <div className={styles["footer-link-group"]}>
            <p className={styles["footer-heading"]}>For arrangører</p>
            <Link to="/tilmeldinger">Se tilmeldinger</Link>
            <a href="mailto:hej@mellemrum.dk">Kontakt os</a>
          </div>
        </nav>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>© {new Date().getFullYear()} Mellemrum</p>
        <p>Aarhus, Danmark</p>
      </div>
    </footer>
  );
}