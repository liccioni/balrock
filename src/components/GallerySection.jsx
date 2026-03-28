import PropTypes from "prop-types";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function GallerySection({ items }) {
  const sortedItems = useMemo(
    () => [...items].sort((a, b) => a.sortKey.localeCompare(b.sortKey)),
    [items],
  );
  const [activeConcertIndex, setActiveConcertIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const sectionRef = useRef(null);
  const activeConcert = sortedItems[activeConcertIndex];
  const activePhoto = activeConcert.photos[activePhotoIndex];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const listY = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);
  const viewerY = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);
  const viewerScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.98, 1, 1.03]);
  const topbarY = useTransform(scrollYProgress, [0, 1], ["10%", "-8%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const thumbY = useTransform(scrollYProgress, [0, 1], ["12%", "-10%"]);
  const thumbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.72, 1, 1, 0.76]);
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  const lightX = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const counterY = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);
  const sceneBarY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [activeConcertIndex]);

  function showPreviousPhoto() {
    setActivePhotoIndex((current) =>
      current === 0 ? activeConcert.photos.length - 1 : current - 1,
    );
  }

  function showNextPhoto() {
    setActivePhotoIndex((current) =>
      current === activeConcert.photos.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section
      ref={sectionRef}
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="gallery-heading"
    >
      <div className="section-scene-header">
        <div className="section-scene-copy">
          <p className="section-kicker">Galería</p>
          <h2 id="gallery-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Lightbox en directo.
          </h2>
          <p className="band-copy mt-4 max-w-2xl">
            Elige una fecha y entra dentro del concierto. Las fotos cambian como
            cortes de una noche que todavía sigue encendida.
          </p>
        </div>
        <motion.div className="scene-ghost-word" style={{ y: ghostY }} aria-hidden="true">
          LIVE
        </motion.div>
      </div>

      <div className="gallery-lightbox mt-8">
        <motion.div
          className="gallery-scene-bar"
          style={{ y: sceneBarY }}
        >
          <p className="gallery-scene-label">Archivo vivo</p>
          <div className="gallery-scene-current">
            <span>{activeConcert.dateLabel}</span>
            <span>{activeConcert.venue}</span>
          </div>
        </motion.div>

        <motion.div
          className="gallery-concert-tabs"
          aria-label="Selector de conciertos"
          style={{ y: listY }}
        >
          {sortedItems.map((item, index) => {
            const isActive = index === activeConcertIndex;

            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveConcertIndex(index)}
                aria-pressed={isActive}
                className={`gallery-concert-pill ${isActive ? "is-active" : ""}`}
                style={{ "--concert-image": `url('${item.heroImage}')` }}
              >
                <span className="gallery-concert-pill-date">{item.dateLabel}</span>
                <span className="gallery-concert-pill-title">{item.title}</span>
                <span className="gallery-concert-pill-venue">{item.city}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="gallery-lightbox-stage"
          style={{ y: viewerY, scale: viewerScale }}
        >
          <motion.div
            className="gallery-lightbox-backdrop"
            aria-hidden="true"
            style={{ backgroundImage: `url('${activePhoto.src}')`, scale: backdropScale }}
          />
          <div className="gallery-lightbox-veil" aria-hidden="true" />
          <motion.div className="gallery-lightbox-light" aria-hidden="true" style={{ x: lightX }} />

          <motion.div className="gallery-lightbox-topbar" style={{ y: topbarY }}>
            <div>
              <p className="gallery-feature-date">{activeConcert.dateLabel}</p>
              <p className="gallery-feature-title">{activeConcert.title}</p>
              <p className="gallery-feature-venue">{activeConcert.venue}</p>
            </div>
            <div className="gallery-topbar-meta">
              <p className="gallery-topbar-note">Cortes del concierto</p>
              <motion.p className="gallery-counter" style={{ y: counterY }}>
                {String(activePhotoIndex + 1).padStart(2, "0")}
                <span> / {String(activeConcert.photos.length).padStart(2, "0")}</span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="gallery-photo-stage" style={{ y: photoY }}>
            <button
              type="button"
              className="gallery-nav gallery-nav--prev gallery-nav--overlay"
              onClick={showPreviousPhoto}
              aria-label="Foto anterior"
            >
              ←
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={activePhoto.src}
                className="gallery-photo-frame"
                style={{ "--gallery-photo": `url('${activePhoto.src}')` }}
                initial={shouldAnimateIn ? { opacity: 0, y: 18, scale: 0.985 } : false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldAnimateIn ? { opacity: 0, y: -18, scale: 1.015 } : undefined}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="gallery-photo-image"
                />
              </motion.figure>
            </AnimatePresence>

            <button
              type="button"
              className="gallery-nav gallery-nav--next gallery-nav--overlay"
              onClick={showNextPhoto}
              aria-label="Foto siguiente"
            >
              →
            </button>
          </motion.div>

          <motion.div
            className="gallery-lightbox-strip"
            aria-label="Fotos del concierto seleccionado"
            style={{ y: thumbY, opacity: thumbOpacity }}
          >
            {activeConcert.photos.map((photo, index) => {
              const isActive = index === activePhotoIndex;

              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActivePhotoIndex(index)}
                  aria-pressed={isActive}
                  className={`gallery-thumb ${isActive ? "is-active" : ""}`}
                >
                  <span
                    className="gallery-thumb-image"
                    aria-hidden="true"
                    style={{ backgroundImage: `url('${photo.src}')` }}
                  />
                </button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

GallerySection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      dateLabel: PropTypes.string.isRequired,
      heroImage: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
        }),
      ).isRequired,
      sortKey: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
