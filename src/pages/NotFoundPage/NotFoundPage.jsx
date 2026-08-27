import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <header>
        <h1 className={styles["not-found-title"]}>404</h1>
      </header>
      <main className={styles["not-found"]}>
        <p>Siden, du leder efter, findes ikke.</p>
        <Link to="/" className={styles["not-found-link"]}>
          Gå til forsiden
        </Link>
      </main>
    </>
  );
}
