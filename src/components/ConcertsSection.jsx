import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { formatShowDate } from "../content/siteContent";

export default function ConcertsSection({ shows }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["18%", "-12%"]);
  const panelX = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="concerts-heading"
      className="section-frame concerts-section concerts-section--spotlight mx-auto w-full max-w-6xl px-5 py-18 text-left sm:px-6 md:px-10 lg:px-16"
      initial={shouldAnimateIn ? { opacity: 0, y: 44 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-scene-header">
        <div className="section-scene-copy">
          <p className="section-kicker">
            Próximos conciertos
          </p>
          <h2 id="concerts-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Próximas descargas.
          </h2>
          <p className="band-copy mt-4 max-w-2xl">
            La próxima fecha no se pierde. Aquí entra primero lo que viene antes de mirar atrás.
          </p>
        </div>
        <motion.div
          className="scene-ghost-word scene-ghost-word--tight"
          style={{ y: ghostY }}
          aria-hidden="true"
        >
          GIGS
        </motion.div>
      </div>
      <motion.div
        className="concerts-panel vinyl-card mt-8 max-w-5xl border border-white/10"
        style={{ x: panelX }}
      >
        {shows.length > 0 ? (
          <ul className="list-none m-0 p-0">
            {shows.map((show) => (
              <li key={`${show.date}-${show.venue}`} className="gig-row px-4 py-4 sm:px-5">
                <div className="gig-row-layout flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <div>
                    <p className="concert-date">
                      {formatShowDate(show.date)}
                    </p>
                    <p className="concert-location-line mt-1">
                      {show.venue} · {show.location}
                    </p>
                  </div>
                  {show.buyLink ? (
                    <a
                      href={show.buyLink}
                      className="concert-link mt-3 inline-flex text-sm font-semibold uppercase tracking-[0.24em] md:mt-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Entradas
                    </a>
                  ) : (
                    <span className="concert-status mt-3 md:mt-0">
                      Próximamente
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-4 py-4 text-base text-[#c2bab2] sm:px-5">
            Aún no hay fecha cerrada. Vuelve pronto.
          </p>
        )}
      </motion.div>
    </motion.section>
  );
}

ConcertsSection.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      buyLink: PropTypes.string,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
