import PropTypes from "prop-types";
import { formatShowDate } from "../content/siteContent";

export default function ConcertsSection({ shows }) {
  return (
    <section aria-labelledby="concerts-heading" className="pt-4 text-left">
      <h2
        id="concerts-heading"
        className="text-3xl font-bold uppercase text-white md:text-4xl"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        Próximos Conciertos
      </h2>
      <p className="mt-4 max-w-2xl text-base text-gray-400">
        Salas confirmadas, primeras entradas activas y una lectura más limpia
        para cerrar la página con intención.
      </p>
      <div className="mt-8 max-w-3xl">
        {shows.length > 0 ? (
          <ul className="concert-list list-none m-0 p-0">
            {shows.map((show) => (
              <li
                key={`${show.date}-${show.venue}`}
                className="concert-item"
              >
                <div className="concert-date-lockup">
                  <p className="concert-date">{formatShowDate(show.date)}</p>
                  <p className="concert-label">Escenario confirmado</p>
                </div>
                <div className="concert-meta">
                  <p className="concert-venue">{show.venue}</p>
                  <p className="concert-location">{show.location}</p>
                </div>
                <div className="concert-action">
                  {show.buyLink ? (
                    <a
                      href={show.buyLink}
                      className="concert-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Compra tu entrada
                    </a>
                  ) : (
                    <span className="concert-status">Próximamente</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-400">
            No hay conciertos anunciados por ahora. Vuelve pronto para ver
            nuevas fechas.
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
