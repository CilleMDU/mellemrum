import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./ProfilePage.module.css";
import ProfilePicture from "../../img/profilePicture.jpg"
import EventGrid from "../../components/EventGrid/EventGrid";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function ProfilePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(`${SUPABASE_URL}/events?order=date.asc`, { headers });
      const data = await response.json();
      setEvents(data);
    }

    getEvents();
  }, []);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContent}>
        <div className={styles.profileHeader}>
          <p className={styles.profileRole}>Arrangør</p>
        </div>
        <div className={styles.profileDetails}>
          <img src={ProfilePicture} alt="Profile" className={styles.profilePicture} />
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>Jonas Knudsen</p>
            <p className={styles.profileHandle}>JKeren</p>
            <p className={styles.profileEmail}>jonas.knudsen@example.com</p>
            <p className={styles.profilePhone}>+45 1234 5678</p>
          </div>
        </div>
        <div className={styles.profileActions}>
          <button className={styles.editProfileButton}>Rediger profil</button>
          <Link className={styles.createEventButton} to="/opret">Opret event</Link>
          <button className={styles.logoutButton}>Log ud</button>
        </div>
        <div className={styles.profileEvents}>
          <EventGrid events={events} />
        </div>
      </div>
    </div>
  );
}