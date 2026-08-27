import AboutAudiences from "../../components/AboutAudiences/AboutAudiences";
import AboutFlow from "../../components/AboutFlow/AboutFlow";
import AboutCity from "../../components/AboutCity/AboutCity";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <>
      <header className={`${styles.pageHeader} ${styles.aboutHeader}`}>
        <div className={styles.aboutHeaderContent}>
          <p className={styles.eyebrow}>Om Mellemrum</p>
          <h1>Vi skaber mellemrum i kalenderen.</h1>
          <p>Udvalgte kulturoplevelser og nye perspektiver på Aarhus.</p>
        </div>
      </header>
      <main className={styles.aboutPage}>
        <section className={styles.aboutIntro} aria-labelledby="about-intro-title">
          <div>
            <p className={`${styles.eyebrow} ${styles.dark}`}>Idéen</p>
            <h2 id="about-intro-title">En enkel vej til det, der sker tæt på.</h2>
          </div>
          <div className={styles.aboutIntroCopy}>
            <p className={styles.lead}>
              Mellemrum samler koncerter, talks, workshops og fællesskaber, så du lettere kan opdage noget, du ikke
              allerede kendte.
            </p>
            <p>
              Vi gør det lokale kulturliv mere overskueligt og skaber en kort vej fra nysgerrighed til en plads i
              kalenderen.
            </p>
          </div>
        </section>

        <AboutAudiences />
        <AboutFlow />
        <AboutCity />
      </main>
    </>
  );
}
