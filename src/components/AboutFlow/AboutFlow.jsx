import styles from "./AboutFlow.module.css";

export default function AboutFlow() {
  return (
    <section className={styles.aboutFlowSection} aria-labelledby="about-flow-title">
      <div className={styles.aboutSectionHeading}>
        <p className={`${styles.aboutEyebrow} ${styles.dark}`}>Sådan hænger det sammen</p>
        <h2 id="about-flow-title">Fra idé til plads i kalenderen.</h2>
      </div>
      <ol className={styles.aboutFlowList}>
        <li>
          <span>01</span>
          <strong>Arrangører deler events</strong>
          <p>Oplevelsen får en tydelig plads på platformen.</p>
        </li>
        <li>
          <span>02</span>
          <strong>Brugere opdager</strong>
          <p>Søgning, kategorier og kuratering gør det lettere at vælge.</p>
        </li>
        <li>
          <span>03</span>
          <strong>Brugere tilmelder sig</strong>
          <p>Fra interesse til tilmelding i ét sammenhængende flow.</p>
        </li>
      </ol>
    </section>
  );
}
