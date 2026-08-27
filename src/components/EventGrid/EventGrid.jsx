import { Link } from "react-router";
import styles from "./EventGrid.module.css";

function formatEventDate(eventDate) {
  const date = new Date(eventDate);
  const formattedDate = date.toLocaleDateString("da-DK", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export default function EventGrid({ events }) {
  return (
    <section className={styles.eventGrid}>
      {events.map((event) => (
        <article className={styles.eventCard} key={event.id}>
          <img src={event.image} alt="" />
          <div className={styles.eventCardContent}>
            <p className={styles.eventCategory}>{event.category}</p>
            <h3>{event.title}</h3>
            <p>{event.summary}</p>
            <div className={styles.eventMeta}>
              <span>{formatEventDate(event.date)}</span>
              <span>{event.venueName}</span>
            </div>
            <Link className={styles.cardLink} to={`/events/${event.id}`}>
              Læs mere
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
