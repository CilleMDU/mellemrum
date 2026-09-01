import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import EventSignup from "../../components/EventSignup/EventSignup";
import styles from "./EventPage.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function getEvent() {
      const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}`, {
        headers,
      });
      const data = await response.json();
      setEvent(data[0]);
    }

    getEvent();
  }, [eventId]);

  if (!event) {
    return null;
  }

  const date = new Date(event.date);

  return (
    <>
      <main className={styles.eventPage}>
        <Link className={styles.backLink} to="/">
          ← Alle events
        </Link>

        <section className={styles.eventDetail}>
          <img src={event.image} alt="" />
          <div className={styles.eventDetailContent}>
            <p className={styles.eventCategory}>{event.category}</p>
            <h1>{event.title}</h1>
            <p className={styles.lead}>{event.summary}</p>
            <div className={styles.detailList}>
              <p>
                <strong>Dato</strong>
                {date.toLocaleDateString("da-DK", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                kl.{" "}
                {date.toLocaleTimeString("da-DK", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                <strong>Sted</strong>
                <span>
                  {event.venueName}
                  <br />
                  {event.venueAddress}, {event.venuePostalCode}{" "}
                  {event.venueCity}
                  {event.venueWebsite && (
                    <>
                      <br />
                      <a href={event.venueWebsite}>Besøg venue</a>
                    </>
                  )}
                </span>
              </p>
              <p>
                <strong>Pris</strong>
                {event.price === 0 ? "Gratis" : `${event.price} kr.`}
              </p>
            </div>
            <p>{event.description}</p>
            <Link className={styles.contactHostButton} to="/profil">
              Kontakt arrangøren
            </Link>
          </div>
        </section>

        <EventSignup event={event} />
      </main>
    </>
  );
}
