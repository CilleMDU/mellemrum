import { useState } from "react";
import styles from "./EventSignup.module.css";

export default function EventSignup({ event }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();
    console.log({ name, email, event: event.title });
  }

  return (
    <section className={styles.signupPanel}>
      <div>
        <p className={`${styles.eventEyebrow} ${styles.dark}`}>Tilmelding</p>
        <h2>Reserver din plads</h2>
        <p>Udfyld formularen, så sender vi din tilmelding til arrangøren.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Navn
          <input value={name} onChange={(inputEvent) => setName(inputEvent.target.value)} />
        </label>
        <span>E-mail</span>
        <input
          value={email}
          onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          placeholder="dig@example.com"
        />
        <button type="submit">Tilmeld mig</button>
      </form>
    </section>
  );
}
