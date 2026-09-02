import { Link } from "react-router";
import styles from "./AboutCity.module.css";

export default function AboutCity() {
  return (
    <section className={styles.aboutCity} aria-labelledby="about-city-title">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1532370778713-1400f3d62094?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
          srcSet="https://images.unsplash.com/photo-1532370778713-1400f3d62094?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0 800w, https://images.unsplash.com/photo-1532370778713-1400f3d62094?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0 1200w"
          sizes="(max-width: 900px) 100vw, 45vw"
          alt="Moderne arkitektur med lyse facader og turkise altaner"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Byrum, arkitektur og nye perspektiver.</figcaption>
      </figure>
      <div>
        <p className={`${styles.aboutEyebrow} ${styles.dark}`}>Aarhus tæt på</p>
        <h2 id="about-city-title">Find plads til noget nyt.</h2>
        <p>
          Mellemrum peger på steder, idéer og fællesskaber på tværs af byen —
          fra små scener til store tanker.
        </p>
        <Link className={styles.aboutCta} to="/">
          Se kommende events →
        </Link>
      </div>
    </section>
  );
}
