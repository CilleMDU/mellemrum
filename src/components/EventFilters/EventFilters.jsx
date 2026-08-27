import styles from "./EventFilters.module.css";

export default function EventFilters({ search, onSearchChange, category, onCategoryChange, categories }) {
  return (
    <section className={styles.filters}>
      <label>
        Søg
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Søg efter titel eller sted"
        />
      </label>
      <label>
        Kategori
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
    </section>
  );
}
