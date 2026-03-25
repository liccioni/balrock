//import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Balrock.css";
import ConcertsSection from "./components/ConcertsSection";
import GigstarterButton from "./GigstarterButton";
import { images, upcomingShows, videos } from "./content/siteContent";

const primaryCtaClassName =
  "inline-flex items-center justify-center rounded-full border border-red-500 bg-red-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all hover:bg-red-400 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const secondaryCtaClassName =
  "inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";
const socialLinkClassName =
  "text-gray-300 hover:text-red-400 text-3xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-sm";

export default function BalrockPage() {
  const baseUrl = import.meta.env.BASE_URL;
  const currentYear = new Date().getFullYear();
  const heroBackgroundStyle = {
    "--banner-desktop": `url('${baseUrl}images/banner-desktop.png')`,
    "--banner-tablet": `url('${baseUrl}images/banner-tablet.png')`,
    "--banner-mobile": `url('${baseUrl}images/banner-mobile.png')`,
  };

  return (
    <div className="bg-black text-gray-200 font-sans">
      <header
        className="relative min-h-screen overflow-hidden bg-cover bg-center banner-background"
        data-testid="hero-banner"
        style={heroBackgroundStyle}
        role="banner"
      >
        <div className="absolute inset-0 hero-veil" />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative z-10 flex min-h-screen items-end px-6 py-10 md:px-10 lg:px-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-300 md:text-sm">
              Barcelona • Rock en directo
            </p>
            <motion.h1
            id="hero-title"
            style={{ fontFamily: "'Cinzel', serif" }}
              className="max-w-2xl text-5xl font-bold uppercase leading-none text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[7.5rem]"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            >
              Balrock
            </motion.h1>
            <p className="mt-5 max-w-xl text-lg font-semibold text-red-200 md:text-2xl">
              &quot;Corred Insensatos...&quot;
            </p>
            <p className="mt-4 max-w-2xl text-base text-gray-200 md:text-lg">
              Riffs poderosos, tambores estremecedores y un directo pensado para
              incendiar la sala desde el primer golpe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={primaryCtaClassName} href="#contratacion">
                Contratación
              </a>
              <a className={secondaryCtaClassName} href="#videos">
                Ver videos
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.2em] text-gray-300">
              <span>Directo feroz</span>
              <span>Rock de escenario</span>
              <span>Booking abierto</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main aria-labelledby="hero-title">
      <section
        aria-labelledby="gallery-heading"
        className="border-t border-white/10 bg-[#080808] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-300">
                Directo
              </p>
              <h2
                id="gallery-heading"
                className="mt-3 text-3xl font-bold uppercase text-white md:text-5xl"
              >
                Escenario, sudor y volumen.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-gray-400 md:text-base">
              Una franja visual para enseñar a la banda donde importa: frente al
              público, con toda la presión del escenario encima.
            </p>
          </div>
          <motion.div
            className="flex flex-nowrap gap-5 overflow-hidden"
            animate={{ x: [0, -80, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                className="h-72 w-[18rem] shrink-0 rounded-2xl object-cover shadow-2xl shadow-black/40 md:h-80 md:w-[22rem]"
                alt={image.alt}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.35 }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="story-heading"
        className="border-t border-white/10 bg-black py-20 text-center md:py-24"
      >
        <motion.h2
          id="story-heading"
          className="text-4xl font-bold uppercase text-red-400 md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Golpe directo desde el inframundo
        </motion.h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Balrock no entra a escena para ambientar la noche. Entra para tensar
          la sala, apretar el ritmo y dejar claro desde el primer compás qué
          tipo de banda tienes delante.
        </p>
      </section>

      <section
        id="videos"
        aria-labelledby="video-gallery-heading"
        className="border-t border-white/10 bg-[#111111] py-16 text-center md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-300">
          Prueba
        </p>
        <h2
          id="video-gallery-heading"
          className="mt-3 text-4xl font-bold uppercase text-white md:text-6xl"
        >
          Mira cómo suena el escenario.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
          Aquí no hay promesa abstracta. Hay banda, volumen y directo real.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <iframe
                data-cmp-vendor="s30"
                src="about:blank"
                className="cmplazyload h-64 w-full md:h-80"
                title={video.title}
                width="560"
                height="315"
                data-cmp-src={video.src}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-black py-16 md:py-20"
        id="contratacion"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-300">
              Fechas
            </p>
            <ConcertsSection shows={upcomingShows} />
          </div>
          <section
            aria-labelledby="booking-heading"
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-black/30"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-300">
                Booking
              </p>
              <h2
                id="booking-heading"
                className="mt-3 text-3xl font-bold uppercase text-white md:text-4xl"
              >
                Lleva a Balrock a tu sala.
              </h2>
              <p className="mt-4 text-base text-gray-300">
                Si quieres una descarga de escenario sin rodeos, el enlace de
                contratación está listo aunque el widget externo falle.
              </p>
            </div>
            <div className="mt-8">
              <GigstarterButton/>
            </div>
          </section>
        </div>
      </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090909] py-10 text-center">
        <nav aria-label="Redes sociales de Balrock" className="flex justify-center space-x-8">
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
        <p className="mt-4 text-gray-500 text-sm">
          &copy; {currentYear} Balrock. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
