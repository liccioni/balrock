import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection({ imageSrc, secondaryImageSrc }) {
  const isArtworkHero = imageSrc.includes("balrock.jpeg");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const baseImageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const baseImageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const railY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "24deg"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.85, 0.45, 0.12]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  return (
    <header
      ref={heroRef}
      className={`hero-photo ${isArtworkHero ? "hero-photo--artwork" : ""} relative isolate flex min-h-screen items-end overflow-hidden bg-[#090807]`}
      data-testid="hero-banner"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      {isArtworkHero && secondaryImageSrc ? (
        <motion.div
          className="hero-backdrop-base hero-backdrop-base--artwork"
          style={{
            backgroundImage: `url('${secondaryImageSrc}')`,
            y: baseImageY,
            scale: baseImageScale,
          }}
          aria-hidden="true"
        />
      ) : null}
      <motion.div
        className={`hero-backdrop-motion ${isArtworkHero ? "hero-backdrop-motion--artwork" : ""}`}
        style={{ backgroundImage: `url('${imageSrc}')`, y: imageY, scale: imageScale }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-noise-orbit"
        style={{ rotate: orbitRotate }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-glow-band"
        style={{ y: glowY, opacity: glowOpacity }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-end px-5 pb-10 pt-24 sm:px-6 md:px-10 md:pb-14 lg:px-16 lg:pb-18">
        <motion.div
          initial={shouldAnimateIn ? { opacity: 0, y: 34 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: copyY }}
          className={`hero-copy-stack max-w-md ${isArtworkHero ? "hero-copy-stack--artwork" : ""}`}
        >
          <p className="section-kicker">
            Hard Rock desde Barcelona
          </p>
          <h1 className="band-heading mt-4 text-6xl sm:text-7xl md:text-8xl">
            Balrock
          </h1>
          <p className="hero-tagline mt-4 max-w-sm text-sm sm:text-base">
            DURO. CRUDO. BALROCK.
          </p>
          <div className="mt-8">
            <a
              href="#live-video"
              className="inline-flex items-center justify-center border border-[#8b0000] bg-[#8b0000] px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] text-[#efe7de] transition-colors hover:bg-[#9e0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
            >
              Ver directo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={shouldAnimateIn ? { opacity: 0, x: 28 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: railY }}
          className={`hero-scene-rail ${isArtworkHero ? "hero-scene-rail--artwork" : ""}`}
        >
          <span>Barcelona</span>
          <span>Riffs densos</span>
          <span>Directo</span>
          <span>Noche cerrada</span>
        </motion.div>
      </div>
    </header>
  );
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  secondaryImageSrc: PropTypes.string,
};
