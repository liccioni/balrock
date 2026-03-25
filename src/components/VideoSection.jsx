import PropTypes from "prop-types";
import { useState } from "react";

export default function VideoSection({ videos, images }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoGallery = videos.map((video, index) => ({
    ...video,
    still: images[index % images.length],
    originalIndex: index,
  }));
  const activeVideo = videoGallery[activeVideoIndex];

  return (
    <section
      id="live-video"
      aria-labelledby="video-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
    >
      <p className="section-kicker">
        Videos
      </p>
      <h2 id="video-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
        El escenario habla.
      </h2>
      <p className="band-copy mt-4 max-w-xl">
        Le das al play. Lo sientes.
      </p>
      <div className="video-vault vinyl-card mt-8 overflow-hidden border border-white/10">
        <div className="video-stage-header">
          <p className="video-rail-kicker">Directo</p>
          <p className="video-stage-note">Selecciona un corte y sigue dentro del escenario.</p>
        </div>
        <div className="video-showcase-grid">
          <article key={activeVideo.src} className="video-feature">
            <div className="video-feature-frame">
              <iframe
                key={activeVideo.src}
                data-cmp-vendor="s30"
                src="about:blank"
                className="cmplazyload aspect-video w-full bg-black"
                title={activeVideo.title}
                data-cmp-src={activeVideo.src}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-feature-copy">
              <p className="video-rail-kicker">Ahora suena</p>
              <p className="mt-3 text-lg font-medium text-[#e3dbd2] md:text-xl">
                {activeVideo.title}
              </p>
            </div>
          </article>
          <div className="video-rail" aria-label="Selector de videos de Balrock">
            {videoGallery.map((video) => {
              const isActive = video.originalIndex === activeVideoIndex;

              return (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveVideoIndex(video.originalIndex)}
                aria-pressed={isActive}
                className={`video-rail-card ${isActive ? "is-active" : ""}`}
              >
                <div
                  className="video-rail-image"
                  style={{ backgroundImage: `url('${video.still.src}')` }}
                  aria-hidden="true"
                />
                <div className="video-rail-copy">
                  <p className="video-rail-kicker">Corte {video.originalIndex + 1}</p>
                  <p className="video-rail-title">{video.title}</p>
                </div>
              </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

VideoSection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
