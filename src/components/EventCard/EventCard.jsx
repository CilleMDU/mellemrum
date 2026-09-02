import { Link } from "react-router";
import styles from "./EventCard.module.css";
import Edit from "../../img/buttons/Edit.svg";
import EditHover from "../../img/buttons/EditHover.svg";

function formatEventDate(eventDate) {
  const date = new Date(eventDate);
  const formattedDate = date.toLocaleDateString("da-DK", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export default function EventCard({ event }) {
  return (
    <article className={styles.eventCard}>
      <Link
        className={styles.editButton}
        to={`/events/${event.id}/rediger`}
        aria-label="Rediger event"
      >
        <img
          src={Edit}
          alt=""
          width="64"
          height="64"
          className={styles.editIcon}
        />
        <img
          src={EditHover}
          alt=""
          width="64"
          height="64"
          className={styles.editIconHover}
        />
      </Link>
      <img
        src={event.image}
        alt=""
        width="400"
        height="300"
        loading="lazy"
        decoding="async"
      />
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
  );
}
