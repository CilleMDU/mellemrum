import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./ProfilePage.module.css";
import ProfilePicture from "../../img/profilePicture.jpg";
import EventGrid from "../../components/EventGrid/EventGrid";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function ProfilePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(`${SUPABASE_URL}/events?order=date.asc`, {
        headers,
      });
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    }

    getEvents();
  }, []);

  return (
    <>
      <header className={styles.profileHeader}>
        <p className={styles.profileEyebrow}>Arrangør</p>
        <h1>Jonas Knudsen</h1>
      </header>
      <main>
        <section className={styles.profileCard}>
          <img
            src={ProfilePicture}
            alt="Profile"
            width="128"
            height="128"
            decoding="async"
            className={styles.profilePicture}
          />
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>Jonas Knudsen</p>
            <p className={styles.profileHandle}>JKeren</p>
            <p className={styles.profileEmail}>jonas.knudsen@example.com</p>
            <p className={styles.profilePhone}>+45 1234 5678</p>
          </div>
          <div className={styles.profileActions}>
            <button className={styles.editProfileButton}>Rediger profil</button>
            <Link className={styles.createEventButton} to="/opret">
              Opret event
            </Link>
            <button className={styles.logoutButton}>Log ud</button>
          </div>
        </section>

        <section className={styles.sectionHeading}>
          <div>
            <p className={`${styles.profileEyebrow} ${styles.dark}`}>
              Dine events
            </p>
            <h2>Oprettede events</h2>
          </div>
        </section>

        <EventGrid events={events} loading={loading} />
      </main>
    </>
  );
}
