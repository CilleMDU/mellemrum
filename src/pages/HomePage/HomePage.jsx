import { useEffect, useState } from "react";
import EventFilters from "../../components/EventFilters/EventFilters";
import EventGrid from "../../components/EventGrid/EventGrid";
import styles from "./HomePage.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json",
};

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");

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

  const categories = [
    "Alle",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents = events.filter((event) => {
    const searchText =
      `${event.title} ${event.summary} ${event.venueName}`.toLowerCase();
    const matchesSearch = searchText.includes(search.toLowerCase());
    const matchesCategory = category === "Alle" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <header className={styles.hero}>
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1595146463222-19603449c6af?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt=""
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <p className={styles.homeEyebrow}>Kultur i Aarhus</p>
        <h1>Find plads til noget nyt.</h1>
        <p className={styles.heroCopy}>
          Koncerter, talks og workshops samlet ét sted. Find dit næste event, og
          tilmeld dig på få minutter.
        </p>
        <a className={styles.heroLink} href="#events">
          Se kommende events ↓
        </a>
      </header>

      <main id="events">
        <section className={styles.sectionHeading}>
          <div>
            <p className={`${styles.homeEyebrow} ${styles.dark}`}>Det sker</p>
            <h2>Kommende events</h2>
          </div>
          <p>Kuraterede oplevelser i byen – fra små scener til store idéer.</p>
        </section>

        <EventFilters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          categories={categories}
        />

        <EventGrid events={filteredEvents} loading={loading} />
      </main>
    </>
  );
}
