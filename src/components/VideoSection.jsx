import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function VideoSection({ videos, images }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const sectionRef = useRef(null);
  const videoGallery = videos.map((video, index) => ({
    ...video,
    still: images[index % images.length],
    originalIndex: index,
  }));
  const activeVideo = videoGallery[activeVideoIndex];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);
  const vaultY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const railY = useTransform(scrollYProgress, [0, 1], ["10%", "-6%"]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  return (
    <motion.section
      ref={sectionRef}
      id="live-video"
      aria-labelledby="video-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
      initial={shouldAnimateIn ? { opacity: 0, y: 44 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-scene-header">
        <div className="section-scene-copy">
          <p className="section-kicker">
            Videos
          </p>
          <h2 id="video-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            El escenario habla.
          </h2>
          <p className="band-copy mt-4 max-w-xl">
            Le das al play. Lo sientes.
          </p>
        </div>
        <motion.div className="scene-ghost-word" style={{ y: ghostY }} aria-hidden="true">
          LIVE
        </motion.div>
      </div>
      <motion.div
        className="video-vault vinyl-card mt-8 overflow-hidden border border-white/10"
        style={{ y: vaultY }}
      >
        <div className="video-vault-glow" aria-hidden="true" />
        <div className="video-stage-header">
          <p className="video-rail-kicker">Corte {activeVideo.originalIndex + 1}</p>
          <p className="video-stage-note">Toca un corte y sigue dentro del escenario.</p>
        </div>
        <div className="video-showcase-grid">
          <motion.article
            key={activeVideo.src}
            className="video-feature"
            initial={shouldAnimateIn ? { opacity: 0, y: 18, scale: 0.985 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.article>
          <motion.div
            className="video-rail"
            style={{ y: railY }}
            aria-label="Selector de videos de Balrock"
          >
            {videoGallery.map((video) => {
              const isActive = video.originalIndex === activeVideoIndex;

              return (
                <motion.button
                  key={video.src}
                  type="button"
                  onClick={() => setActiveVideoIndex(video.originalIndex)}
                  aria-pressed={isActive}
                  className={`video-rail-card ${isActive ? "is-active" : ""}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.985 }}
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
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
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
