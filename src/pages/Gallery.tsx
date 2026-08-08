import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { Seo } from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { galleryCategories, galleryCounts, galleryImages, type GalleryCategory } from "../content/gallery";

const INITIAL_IMAGE_COUNT = 48;
const LOAD_MORE_COUNT = 48;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGE_COUNT);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredImages.length;

  function selectCategory(category: GalleryCategory) {
    setActiveCategory(category);
    setVisibleCount(INITIAL_IMAGE_COUNT);
  }

  return (
    <main>
      <Seo
        title="Project Gallery"
        description="Browse the Little Piece of Paradise gallery of completed projects, custom pool designs, landscape renders, outdoor living spaces, and Arizona backyard transformations."
        path="/gallery"
        schema={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])}
      />
      <section className="page-hero gallery-hero">
        <img
          className="scene-media"
          src={galleryImages[0]?.src}
          alt="Custom outdoor living design from the Little Piece of Paradise gallery"
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div className="scene-scrim scrim-dark" />
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <span style={{ color: "rgba(239,232,221,0.85)" }}>Gallery</span>
        </nav>
        <div className="scene-content" style={{ paddingTop: 0 }}>
          <p className="scene-eyebrow">Real Projects. Real Paradise.</p>
          <h1>See Your Backyard&apos;s <em>Future</em></h1>
          <p className="scene-copy">
            Browse real backyard transformations across the Phoenix Valley — from first design concept to finished paradise. Every image here is a project we&apos;ve brought to life for a homeowner just like you.
          </p>
        </div>
      </section>

      <div className="page-content gallery-page-content">
        <section className="gallery-summary" aria-labelledby="gallery-summary-heading">
          <div>
            <p className="section-label">The Portfolio</p>
            <h2 id="gallery-summary-heading" className="content-heading">
              {galleryCounts.all} real transformations, from first sketch to final walkthrough.
            </h2>
          </div>
          <Link className="primary liquid-glass" to="/contact">
            Request Design Consultation <ArrowRight size={18} />
          </Link>
        </section>

        <section aria-labelledby="gallery-filter-heading">
          <div className="gallery-toolbar">
            <h2 id="gallery-filter-heading" className="content-heading">Browse the Gallery</h2>
            <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
              {galleryCategories.map((category) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  className={activeCategory === category.id ? "active" : ""}
                  onClick={() => selectCategory(category.id)}
                  key={category.id}
                >
                  <Images size={15} aria-hidden="true" />
                  <span>{category.label}</span>
                  <strong>{galleryCounts[category.id]}</strong>
                </button>
              ))}
            </div>
          </div>

          <p className="gallery-category-description">
            {galleryCategories.find((category) => category.id === activeCategory)?.description}
          </p>

          <div className="gallery-grid">
            {visibleImages.map((image, index) => (
              <figure className="gallery-card liquid-glass" key={image.id}>
                <div className="gallery-card-media">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                    width={image.width}
                    height={image.height}
                  />
                </div>
                <figcaption>
                  <strong>{image.title}</strong>
                  <span>{galleryCategories.find((category) => category.id === image.category)?.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {hasMoreImages ? (
            <div className="gallery-load-more">
              <button
                type="button"
                className="secondary liquid-glass"
                onClick={() => setVisibleCount((current) => current + LOAD_MORE_COUNT)}
              >
                Load More Images
              </button>
              <p>
                Showing {visibleImages.length} of {filteredImages.length}
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
