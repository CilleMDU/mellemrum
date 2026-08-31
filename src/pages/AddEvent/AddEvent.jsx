import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./AddEvent.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_APIKEY}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal"
};

export default function AddEvent() {
    const navigate = useNavigate();
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventImage, setEventImage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(submitEvent) {
        submitEvent.preventDefault();
        setError("");

        const response = await fetch(`${SUPABASE_URL}/events`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                title: eventName,
                date: new Date(eventDate).toISOString(),
                venueName: eventLocation,
                description: eventDescription,
                image: eventImage
            })
        });

        if (!response.ok) {
            setError("Kunne ikke oprette eventet. Prøv igen.");
            return;
        }

        navigate("/");
    }

    return (
        <>
            <header className={styles.addEventHeader}>
                <p className={styles.addEventEyebrow}>Arrangør</p>
                <h1>Opret Event</h1>
                <p>Udfyld formularen for at tilføje et nyt event til Mellemrum.</p>
            </header>
            <main>
                <form className={styles.addEventForm} onSubmit={handleSubmit}>
                    <label htmlFor="eventName">Event Navn:</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={eventName}
                        onChange={(changeEvent) => setEventName(changeEvent.target.value)}
                        required
                    />

                    <label htmlFor="eventDate">Dato:</label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={eventDate}
                        onChange={(changeEvent) => setEventDate(changeEvent.target.value)}
                        required
                    />

                    <label htmlFor="eventLocation">Lokation:</label>
                    <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        value={eventLocation}
                        onChange={(changeEvent) => setEventLocation(changeEvent.target.value)}
                    />

                    <label htmlFor="eventImage">Billede (URL):</label>
                    <input
                        type="url"
                        id="eventImage"
                        name="eventImage"
                        value={eventImage}
                        onChange={(changeEvent) => setEventImage(changeEvent.target.value)}
                        placeholder="https://..."
                    />

                    <label htmlFor="eventDescription">Beskrivelse:</label>
                    <textarea
                        id="eventDescription"
                        name="eventDescription"
                        value={eventDescription}
                        onChange={(changeEvent) => setEventDescription(changeEvent.target.value)}
                    ></textarea>

                    {error && <p className={styles.formMessage}>{error}</p>}

                    <button type="submit">Opret Event</button>
                </form>
            </main>
        </>
    );
}