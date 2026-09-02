import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

// Lazy-loaded so the initial bundle only ships the code the landing route needs,
// keeping the critical request chain short for first-time visitors.
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const EventPage = lazy(() => import("./pages/EventPage/EventPage"));
const RegistrationsPage = lazy(
  () => import("./pages/RegistrationsPage/RegistrationsPage"),
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const AddEvent = lazy(() => import("./pages/AddEvent/AddEvent"));
const EditEvent = lazy(() => import("./pages/EditEvent/EditEvent"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:eventId" element={<EventPage />} />
          <Route path="/events/:eventId/rediger" element={<EditEvent />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="/tilmeldinger" element={<RegistrationsPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/opret" element={<AddEvent />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
