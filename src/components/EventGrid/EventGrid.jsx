import styles from "./EventGrid.module.css";
import EventCard from "../EventCard/EventCard";

export default function EventGrid({ events }) {
  return (
    <section className={styles.eventGrid}>
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}
