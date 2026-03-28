import PropTypes from "prop-types";

export default function SoundCloudSection({ embedUrl, profileUrl }) {
  if (!embedUrl || !profileUrl) {
    return null;
  }

  return (
    <section
      aria-labelledby="soundcloud-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="section-scene-header">
        <div className="section-scene-copy">
          <p className="section-kicker">SoundCloud</p>
          <h2 id="soundcloud-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Escucha los temas.
          </h2>
          <p className="band-copy mt-4 max-w-2xl">
            Si quieres seguir dentro del ruido, aquí están los cortes para darle al play sin salir de la web.
          </p>
        </div>
        <div className="scene-ghost-word scene-ghost-word--tight" aria-hidden="true">
          AUDIO
        </div>
      </div>

      <div className="soundcloud-shell vinyl-card mt-8 overflow-hidden border border-white/10">
        <iframe
          src={embedUrl}
          title="SoundCloud player de Balrock"
          loading="lazy"
          allow="autoplay"
        />
      </div>

      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="soundcloud-link mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.24em]"
      >
        Abrir perfil en SoundCloud
      </a>
    </section>
  );
}

SoundCloudSection.propTypes = {
  embedUrl: PropTypes.string,
  profileUrl: PropTypes.string,
};

SoundCloudSection.defaultProps = {
  embedUrl: "",
  profileUrl: "",
};
