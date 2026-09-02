import { useState } from "react";
import styles from "./EventSignup.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_APIKEY}`,
  "Content-Type": "application/json",
  Prefer: "return=minimal",
};

export default function EventSignup({ event }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(eventSubmit) {
    eventSubmit.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(`${SUPABASE_URL}/registrations`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          eventTitle: event.title,
          eventDate: event.date,
          eventLocation: event.venueName,
        }),
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          message: "Kunne ikke gennemføre tilmeldingen. Prøv igen.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Tak for din tilmelding! Vi glæder os til at se dig.",
      });
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
    } catch {
      setStatus({
        type: "error",
        message: "Kunne ikke gennemføre tilmeldingen. Prøv igen.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          Fornavn
          <input
            value={firstName}
            onChange={(inputEvent) => setFirstName(inputEvent.target.value)}
            required
            placeholder="Fornavn"
          />
        </label>
        <label>
          Efternavn
          <input
            value={lastName}
            onChange={(inputEvent) => setLastName(inputEvent.target.value)}
            required
            placeholder="Efternavn"
          />
        </label>
        <span>Telefon</span>
        <input
          type="tel"
          value={phone}
          onChange={(inputEvent) => setPhone(inputEvent.target.value)}
          placeholder="12345678"
        />
        <span>E-mail</span>
        <input
          type="email"
          value={email}
          onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          placeholder="dig@example.com"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sender..." : "Tilmeld mig"}
        </button>
        {status && (
          <p
            className={`${styles.formMessage} ${status.type === "error" ? styles.formMessageError : ""}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
