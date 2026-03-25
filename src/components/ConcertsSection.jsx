import PropTypes from "prop-types";
import { formatShowDate } from "../content/siteContent";

export default function ConcertsSection({ shows }) {
  return (
    <section aria-labelledby="concerts-heading" className="pt-4 text-left">
      <h2 id="concerts-heading" className="text-3xl font-bold uppercase text-white md:text-4xl">
        Próximos Conciertos
      </h2>
      <div className="mt-8 max-w-3xl">
        {shows.length > 0 ? (
          <ul className="list-none m-0 p-0">
            {shows.map((show) => (
            <li
              key={`${show.date}-${show.venue}`}
              className="border-b border-white/10 py-5"
            >
              <p className="text-xl font-semibold text-red-300">
                {formatShowDate(show.date)}
              </p>
              <p className="mt-2 text-lg text-gray-300">
                {show.location} - {show.venue}
              </p>
              {show.buyLink ? (
                <p className="mt-3">
                  <a
                    href={show.buyLink}
                    className="text-red-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compra tu entrada
                  </a>
                </p>
              ) : null}
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
