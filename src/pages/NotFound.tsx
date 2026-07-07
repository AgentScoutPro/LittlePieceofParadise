import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export default function NotFound() {
  return (
    <main>
      <Seo title="Page Not Found" description="This page could not be found." path="/404" />
      <div className="page-content" style={{ paddingTop: "160px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-headline)", color: "#fdfaf4" }}>Page not found</h1>
        <p style={{ color: "rgba(239,232,221,0.7)", marginTop: 12 }}>
          <Link className="text-link" to="/">Return home</Link>
        </p>
      </div>
    </main>
  );
}
