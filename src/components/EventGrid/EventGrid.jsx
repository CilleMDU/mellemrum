import styles from "./EventGrid.module.css";
import EventCard from "../EventCard/EventCard";

function EventCardSkeleton() {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine} style={{ width: "40%" }} />
        <div className={styles.skeletonLine} style={{ width: "80%" }} />
        <div className={styles.skeletonLine} style={{ width: "60%" }} />
      </div>
    </div>
  );
}

export default function EventGrid({ events, loading = false }) {
  if (loading) {
    return (
      <section className={styles.eventGrid}>
        {Array.from({ length: 3 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  return (
    <section className={styles.eventGrid}>
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}
