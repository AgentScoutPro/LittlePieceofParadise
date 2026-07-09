import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, X } from "lucide-react";
import { reviews, type Review } from "../content/reviews";

function StarRow() {
  return (
    <span className="review-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

function ReviewModal({ review, onClose }: { review: Review; onClose: () => void }) {
  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="review-modal-backdrop"
      role="presentation"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="review-modal liquid-glass"
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-name"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <button className="review-modal-close" onClick={onClose} aria-label="Close review">
          <X size={20} />
        </button>
        <Quote className="review-modal-quote-icon" size={28} aria-hidden="true" />
        <StarRow />
        <p className="review-modal-text">{review.fullText}</p>
        <p id="review-modal-name" className="review-modal-name">
          {review.name}
          {review.location ? <span className="review-modal-location"> · {review.location}</span> : null}
        </p>
      </motion.div>
    </motion.div>
  );
}

function ReviewCard({ review, onOpen }: { review: Review; onOpen: () => void }) {
  return (
    <button className="review-card liquid-glass" onClick={onOpen}>
      <Quote className="review-card-quote-icon" size={22} aria-hidden="true" />
      <StarRow />
      <p className="review-card-excerpt">&ldquo;{review.excerpt}&rdquo;</p>
      <span className="review-card-footer">
        <span className="review-card-name">
          {review.name}
          {review.location ? <span className="review-card-location"> · {review.location}</span> : null}
        </span>
        <span className="review-card-read-more">Read full review</span>
      </span>
    </button>
  );
}

export function ReviewsSection() {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const openReview = reviews.find((r) => r.id === openId) ?? null;

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="reviews-inner">
        <p className="section-label">Client Reviews</p>
        <h2 id="reviews-heading">Backyards Our Clients Never Want to Leave</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} onOpen={() => setOpenId(review.id)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {openReview ? <ReviewModal review={openReview} onClose={() => setOpenId(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}
