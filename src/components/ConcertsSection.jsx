import PropTypes from "prop-types";
import { formatShowDate } from "../content/siteContent";

export default function ConcertsSection({ shows }) {
  return (
    <section
      aria-labelledby="concerts-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 text-left sm:px-6 md:px-10 lg:px-16"
    >
      <p className="section-kicker">
        Próximos conciertos
      </p>
      <h2 id="concerts-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
        Próximos conciertos
      </h2>
      <div className="concerts-panel vinyl-card mt-8 max-w-4xl border border-white/10">
        {shows.length > 0 ? (
          <ul className="list-none m-0 p-0">
            {shows.map((show) => (
              <li key={`${show.date}-${show.venue}`} className="gig-row px-4 py-4 sm:px-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
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
            No hay conciertos anunciados por ahora. Vuelve pronto.
          </p>
        )}
      </div>
    </section>
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
