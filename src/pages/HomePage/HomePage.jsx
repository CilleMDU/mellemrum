import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./HomePage.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(`${SUPABASE_URL}/events?order=date.asc`, { headers });
      const data = await response.json();
      setEvents(data);
    }

    getEvents();
  }, []);

  const categories = ["Alle", ...new Set(events.map((event) => event.category))];

  const filteredEvents = events.filter((event) => {
    const searchText = `${event.title} ${event.summary} ${event.venueName}`.toLowerCase();
    const matchesSearch = searchText.includes(search.toLowerCase());
    const matchesCategory = category === "Alle" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  function formatEventDate(eventDate) {
    const date = new Date(eventDate);
    const formattedDate = date.toLocaleDateString("da-DK", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return (
    <>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Kultur i Aarhus</p>
        <h1>Find plads til noget nyt.</h1>
        <p className={styles["hero-copy"]}>
          Koncerter, talks og workshops samlet ét sted. Find dit næste event, og tilmeld dig på få minutter.
        </p>
        <a className={styles["hero-link"]} href="#events">
          Se kommende events ↓
        </a>
      </header>

      <main id="events">
        <section className={styles["section-heading"]}>
          <div>
            <p className={`${styles.eyebrow} ${styles.dark}`}>Det sker</p>
            <h2>Kommende events</h2>
          </div>
          <p>Kuraterede oplevelser i byen – fra små scener til store idéer.</p>
        </section>

        <section className={styles.filters}>
          <label>
            Søg
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Søg efter titel eller sted"
            />
          </label>
          <label>
            Kategori
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </section>

        <section className={styles["event-grid"]}>
          {filteredEvents.map((event) => (
            <article className={styles["event-card"]} key={event.id}>
              <img src={event.image} alt="" />
              <div className={styles["event-card-content"]}>
                <p className={styles["event-category"]}>{event.category}</p>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <div className={styles["event-meta"]}>
                  <span>{formatEventDate(event.date)}</span>
                  <span>{event.venueName}</span>
                </div>
                <Link className={styles["card-link"]} to={`/events/${event.id}`}>
                  Læs mere
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
