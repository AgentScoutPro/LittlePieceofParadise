import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const ServicesIndex = lazy(() => import("./pages/ServicesIndex"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ServiceAreasIndex = lazy(() => import("./pages/ServiceAreasIndex"));
const CityPage = lazy(() => import("./pages/CityPage"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}
