import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./EditEvent.module.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
    apikey: import.meta.env.VITE_SUPABASE_APIKEY,
    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_APIKEY}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal"
};

export default function EditEvent() {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventImage, setEventImage] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async function getEvent() {
            const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}`, { headers });
            const data = await response.json();
            const event = data[0];

            if (!event) {
                return;
            }

            setEventName(event.title ?? "");
            setEventDate(event.date ? event.date.slice(0, 10) : "");
            setEventLocation(event.venueName ?? "");
            setEventImage(event.image ?? "");
            setEventDescription(event.description ?? "");
        }

        getEvent();
    }, [eventId]);

    async function handleSubmit(submitEvent) {
        submitEvent.preventDefault();
        setError("");

        const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}`, {
            method: "PATCH",
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
            setError("Kunne ikke opdatere eventet. Prøv igen.");
            return;
        }

        navigate(`/events/${eventId}`);
    }

    async function handleDelete() {
        const confirmed = window.confirm("Er du sikker på, at du vil slette dette event?");

        if (!confirmed) {
            return;
        }

        setError("");

        const response = await fetch(`${SUPABASE_URL}/events?id=eq.${eventId}`, {
            method: "DELETE",
            headers
        });

        if (!response.ok) {
            setError("Kunne ikke slette eventet. Prøv igen.");
            return;
        }

        navigate("/");
    }

    return (
        <>
            <header className={styles.editEventHeader}>
                <p className={styles.editEventEyebrow}>Arrangør</p>
                <h1>Rediger Event</h1>
                <p>Opdater oplysningerne for dit event.</p>
            </header>
            <main>
                <form className={styles.editEventForm} onSubmit={handleSubmit}>
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

                    <button type="submit">Opdater event</button>
                    <button type="button" className={styles.deleteButton} onClick={handleDelete}>
                        Slet event
                    </button>
                </form>
            </main>
        </>
    );
}
