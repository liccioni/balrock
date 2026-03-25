import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Balrock.css";
import ConcertsSection from "./components/ConcertsSection";
import GigstarterButton from "./GigstarterButton";
import { images, upcomingShows, videos } from "./content/siteContent";

const primaryCtaClassName =
  "inline-flex items-center justify-center rounded-full border border-[#ff5d3d] bg-[#ff5d3d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a60] hover:border-[#ff7a60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a60] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const secondaryCtaClassName =
  "inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const socialLinkClassName =
  "rounded-full border border-white/10 bg-white/5 p-4 text-2xl text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5d3d]/50 hover:text-[#ff7a60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a60] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";

const revealTransition = { duration: 0.8, ease: "easeOut" };
const revealUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: revealTransition,
};

function rotateFromIndex(items, activeIndex) {
  return items.map((item, index) => ({
    ...item,
    originalIndex: index,
  })).sort((left, right) => {
    const leftDistance = (left.originalIndex - activeIndex + items.length) % items.length;
    const rightDistance = (right.originalIndex - activeIndex + items.length) % items.length;

    return leftDistance - rightDistance;
  });
}

export default function BalrockPage() {
  const pageRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL;
  const currentYear = new Date().getFullYear();
  const featureImage = images[0];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const beastY = useTransform(scrollYProgress, [0, 1], ["2%", "16%"]);
  const beastScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.86, 0.96, 1.04]);
  const beastOpacity = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [0.08, 0.16, 0.14, 0.1]);
  const heroBackgroundStyle = {
    "--banner-desktop": `url('${baseUrl}images/banner-desktop.png')`,
    "--banner-tablet": `url('${baseUrl}images/banner-tablet.png')`,
    "--banner-mobile": `url('${baseUrl}images/banner-mobile.png')`,
  };
  const videoGallery = videos.map((video, index) => ({
    ...video,
    still: images[index % images.length],
  }));
  const orderedVideos = rotateFromIndex(videoGallery, activeVideoIndex);

  return (
    <div ref={pageRef} className="cinematic-shell bg-black text-gray-200">
      <div className="page-atmosphere" aria-hidden="true">
        <motion.div
          className="balrog-presence"
          style={{ y: beastY, scale: beastScale, opacity: beastOpacity }}
        >
          <div className="balrog-horns" />
          <div className="balrog-head" />
          <div className="balrog-shoulders" />
          <div className="balrog-core" />
          <div className="balrog-embers" />
        </motion.div>
      </div>
      <header
        className="relative min-h-screen overflow-hidden bg-cover bg-center banner-background"
        data-testid="hero-banner"
        style={heroBackgroundStyle}
        role="banner"
      >
        <div className="absolute inset-0 hero-veil" />
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 hero-vignette" />
        <div className="relative z-10 flex min-h-screen items-end px-6 py-6 md:px-10 lg:px-16">
          <div className="hero-content max-w-md">
            <h1 id="hero-title" className="sr-only">
              Balrock
            </h1>
            <p className="hero-tagline max-w-sm text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#ffb18f] md:text-[0.8rem]">
              Barcelona • Rock en directo
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a className={primaryCtaClassName} href="#contratacion">
                Contratación
              </a>
              <a className={secondaryCtaClassName} href="#videos">
                Ver videos
              </a>
            </div>
          </div>
        </div>
      </header>

      <main aria-labelledby="hero-title">
        <motion.section
          aria-labelledby="story-heading"
          className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-20 md:py-28"
          {...revealUp}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5d3d]/50 to-transparent" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffb18f]">
                Presencia
              </p>
              <h2
                id="story-heading"
                className="mt-4 text-4xl font-bold uppercase leading-tight text-white md:text-6xl"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Golpe directo desde el inframundo
              </h2>
              <p className="mt-6 max-w-xl text-lg text-gray-300">
                Balrock no entra a escena para ambientar la noche. Entra para
                tensar la sala, apretar el ritmo y dejar claro desde el primer
                compás qué tipo de banda tienes delante.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-white/55">
                <span className="border border-white/10 px-4 py-2">Riffs densos</span>
                <span className="border border-white/10 px-4 py-2">Batería frontal</span>
                <span className="border border-white/10 px-4 py-2">Directo sin tregua</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_35%_25%,rgba(255,93,61,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,200,138,0.18),transparent_28%)] blur-2xl" />
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border border-white/10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={featureImage.src}
                  alt={featureImage.alt}
                  className="h-[28rem] w-full object-cover object-center md:h-[36rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#ffb18f]">
                    Foco caliente
                  </p>
                  <p className="mt-3 max-w-md text-base text-white/80 md:text-lg">
                    Un plano dominante para que la banda se sienta como un acto
                    en vivo, no como una galería más.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          aria-labelledby="gallery-heading"
          className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-16 md:py-20"
          {...revealUp}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffb18f]">
                  Directo
                </p>
                <h2
                  id="gallery-heading"
                  className="mt-3 text-3xl font-bold uppercase text-white md:text-5xl"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Escenario, sudor y volumen.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-gray-400 md:text-base">
                Una franja de movimiento continuo para enseñar la banda donde
                importa: bajo focos rojos, presión alta y público cerca.
              </p>
            </div>
          </div>
          <div className="gallery-viewport">
            <motion.div
              className="flex w-max gap-5 px-6 md:px-10 lg:px-16"
              animate={{ x: ["0%", "-33%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {[...images, ...images].map((image, index) => (
                <motion.img
                  key={`${image.src}-${index}`}
                  src={image.src}
                  className="h-72 w-[18rem] shrink-0 rounded-[1.75rem] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.35)] md:h-80 md:w-[24rem]"
                  alt={image.alt}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ duration: 0.35 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="videos"
          aria-labelledby="video-gallery-heading"
          className="relative overflow-hidden border-t border-white/10 bg-[#090909] py-16 text-center md:py-22"
          {...revealUp}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,93,61,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffb18f]">
              Prueba
            </p>
            <h2
              id="video-gallery-heading"
              className="mt-3 text-4xl font-bold uppercase text-white md:text-6xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Mira cómo suena el escenario.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
              Aquí no hay promesa abstracta. Hay banda, volumen y directo real.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-white/45">
              <span>Vault audiovisual</span>
              <span className="h-px w-10 bg-white/15" />
              <span>Selecciona un disparo y entra</span>
            </div>
            <div className="video-vault mt-12">
              <div className="video-showcase-grid">
                <motion.article
                  key={orderedVideos[0].src}
                  className="video-feature"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="video-feature-backdrop" />
                  <div className="video-feature-frame">
                    <iframe
                      data-cmp-vendor="s30"
                      src="about:blank"
                      className="cmplazyload h-[18rem] w-full md:h-[30rem] xl:h-[34rem]"
                      title={orderedVideos[0].title}
                      width="560"
                      height="315"
                      data-cmp-src={orderedVideos[0].src}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-feature-copy">
                    <p className="text-[0.65rem] uppercase tracking-[0.34em] text-[#ffb18f]">
                      Clip destacado
                    </p>
                    <p className="mt-3 text-xl text-white md:text-2xl">
                      {orderedVideos[0].title}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm text-white/60 md:text-base">
                      Un frente principal siempre visible para que el visitante
                      explore sin perder el vídeo activo.
                    </p>
                  </div>
                </motion.article>
                <div className="video-rail" aria-label="Selector de videos de Balrock">
                  {orderedVideos.slice(1).map((video, slotIndex) => (
                    <button
                      key={video.src}
                      type="button"
                      onClick={() => setActiveVideoIndex(video.originalIndex)}
                      className={`video-rail-card video-rail-card-${slotIndex + 1}`}
                    >
                      <div
                        className="video-rail-image"
                        style={{ backgroundImage: `url('${video.still.src}')` }}
                        aria-hidden="true"
                      />
                      <div className="video-rail-copy">
                        <p className="video-rail-kicker">Vault {slotIndex + 1}</p>
                        <p className="video-rail-title">{video.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative overflow-hidden border-t border-white/10 bg-black py-16 md:py-22"
          id="contratacion"
          {...revealUp}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,93,61,0.1),transparent_28%)]" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
            <div className="finale-intro">
              <div>
                <p className="finale-kicker">Cierre</p>
                <h2
                  className="finale-heading"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Fechas abiertas y contratación directa.
                </h2>
              </div>
              <p className="finale-copy">
                La salida de la página tiene que dejar una ruta clara: dónde
                toca la banda, qué salas ya están activas y cómo llevarla al
                próximo escenario.
              </p>
            </div>

            <div className="finale-grid mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="concerts-shell">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffb18f]">
                  Agenda actual
                </p>
                <ConcertsSection shows={upcomingShows} />
              </div>
              <section
                aria-labelledby="booking-heading"
                className="booking-panel flex flex-col justify-between rounded-[2rem] p-8 text-center"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffb18f]">
                    Booking
                  </p>
                  <h2
                    id="booking-heading"
                    className="mt-3 text-3xl font-bold uppercase text-white md:text-4xl"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Lleva a Balrock a tu sala.
                  </h2>
                  <p className="mt-4 text-base text-gray-300">
                    Si quieres una descarga de escenario sin rodeos, el enlace
                    de contratación está listo aunque el widget externo falle.
                  </p>
                  <div className="booking-points mt-8">
                    <span>Rider directo</span>
                    <span>Respuesta rápida</span>
                    <span>Booking abierto</span>
                  </div>
                </div>
                <div className="mt-10">
                  <GigstarterButton />
                  <p className="booking-note mt-5 text-sm text-white/45">
                    Si el widget tarda, el contacto sigue disponible desde las
                    redes oficiales.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-[#050505] py-14 text-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/35">
            Sigue el ruido
          </p>
          <nav
            aria-label="Redes sociales de Balrock"
            className="mt-8 flex justify-center gap-4"
          >
            <motion.a
              href="https://www.instagram.com/balrockoficial/"
              aria-label="Instagram de Balrock"
              className={socialLinkClassName}
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@balrockoficial"
              aria-label="Canal de YouTube de Balrock"
              className={socialLinkClassName}
              whileHover={{ scale: 1.1 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/balrockband"
              aria-label="Facebook de Balrock"
              className={socialLinkClassName}
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook />
            </motion.a>
          </nav>
          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-gray-500">
            &copy; {currentYear} Balrock. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
