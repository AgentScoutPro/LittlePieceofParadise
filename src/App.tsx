import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import ServicesIndex from "./pages/ServicesIndex";
import ServicePage from "./pages/ServicePage";
import ServiceAreasIndex from "./pages/ServiceAreasIndex";
import CityPage from "./pages/CityPage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="service-areas" element={<ServiceAreasIndex />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        {/* City pages use a bare slug like "/scottsdale-pool-builder" per the
            content plan's URL structure, so this must stay last — it's the
            catch-all before the true 404. */}
        <Route path=":citySlug" element={<CityPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
