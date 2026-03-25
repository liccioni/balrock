import PropTypes from "prop-types";
import { formatShowDate } from "../content/siteContent";

export default function ConcertsSection({ shows }) {
  return (
    <section aria-labelledby="concerts-heading" className="py-16 bg-black-800 text-center">
      <h2 id="concerts-heading" className="text-4xl text-red-500 font-bold">
        Próximos Conciertos
      </h2>
      <div className="mt-8 max-w-3xl mx-auto">
        {shows.length > 0 ? (
          <ul className="list-none m-0 p-0">
            {shows.map((show) => (
            <li
              key={`${show.date}-${show.venue}`}
              className="py-4 border-b border-gray-600"
            >
              <p className="text-xl text-gray-300 font-semibold">
                {formatShowDate(show.date)}
              </p>
              <p className="text-lg text-gray-400">
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
