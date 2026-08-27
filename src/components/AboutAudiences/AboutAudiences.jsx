import { Link } from "react-router";
import styles from "./AboutAudiences.module.css";

export default function AboutAudiences() {
  return (
    <section className={styles.aboutAudiences} aria-labelledby="about-audiences-title">
      <div className={styles.aboutSectionHeading}>
        <p className={styles.eyebrow}>Målgrupper</p>
        <h2 id="about-audiences-title">Mellemrum forbinder oplevelser med mennesker.</h2>
      </div>
      <div className={styles.aboutAudienceSplit}>
        <article>
          <span>Primær målgruppe</span>
          <h3>For dig, der vil opdage byen</h3>
          <p>Find lokale oplevelser, få det vigtigste overblik, og tilmeld dig uden unødige omveje.</p>
          <Link to="/">Udforsk kommende events →</Link>
        </article>
        <article>
          <span>For arrangører</span>
          <h3>Gør oplevelsen synlig</h3>
          <p>Del events med et nysgerrigt publikum, og få overblik over de mennesker, der tilmelder sig.</p>
          <a href="mailto:hej@mellemrum.dk">Tal med os om et event →</a>
        </article>
      </div>
    </section>
  );
}
