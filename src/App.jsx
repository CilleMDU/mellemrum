import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EventPage from "./pages/EventPage/EventPage";
import RegistrationsPage from "./pages/RegistrationsPage/RegistrationsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/om" element={<AboutPage />} />
        <Route path="/tilmeldinger" element={<RegistrationsPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
