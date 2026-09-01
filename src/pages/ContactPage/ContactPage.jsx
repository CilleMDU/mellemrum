import { useState } from "react";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    setStatus(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Udfyld venligst alle felter." });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setStatus({
        type: "success",
        message: "Tak for din besked! Vi vender tilbage hurtigst muligt.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({ type: "error", message: "Der opstod en fejl. Prøv igen." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <header className={styles.contactHeader}>
        <p className={styles.contactEyebrow}>Kontakt</p>
        <h1>Skriv til os</h1>
        <p>Har du spørgsmål eller brug for hjælp? Vi svarer hurtigst muligt.</p>
      </header>
      <main>
        <section className={styles.contactInfo}>
          <p>
            Email:{" "}
            <a href="mailto:kontakt@mellemrum.dk">kontakt@mellemrum.dk</a>
          </p>
          <p>Telefon: +45 12 34 56 78</p>
          <p>Vi bestræber os på at besvare henvendelser inden for 24 timer.</p>
        </section>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="contactName">Navn:</label>
          <input
            type="text"
            id="contactName"
            name="name"
            value={name}
            onChange={(changeEvent) => setName(changeEvent.target.value)}
            required
          />

          <label htmlFor="contactEmail">Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            value={email}
            onChange={(changeEvent) => setEmail(changeEvent.target.value)}
            required
          />

          <label htmlFor="contactMessage">Besked:</label>
          <textarea
            id="contactMessage"
            name="message"
            value={message}
            onChange={(changeEvent) => setMessage(changeEvent.target.value)}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sender..." : "Send"}
          </button>

          {status && (
            <p
              className={`${styles.formMessage} ${status.type === "success" ? styles.formMessageSuccess : ""}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </main>
    </>
  );
}
