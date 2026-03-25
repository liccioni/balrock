import PropTypes from "prop-types";

export default function SpotifySection({ embedUrl }) {
  if (!embedUrl) {
    return null;
  }

  return (
    <section
      aria-labelledby="spotify-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
    >
      <p className="section-kicker">
        Música
      </p>
      <h2 id="spotify-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
        Sube el volumen.
      </h2>
      <div className="spotify-shell vinyl-card mt-8 overflow-hidden border border-white/10">
        <iframe
          src={embedUrl}
          title="Spotify player de Balrock"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </section>
  );
}

SpotifySection.propTypes = {
  embedUrl: PropTypes.string,
};

SpotifySection.defaultProps = {
  embedUrl: "",
};
