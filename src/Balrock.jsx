//import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Balrock.css";
import ConcertsSection from "./components/ConcertsSection";
import GigstarterButton from "./GigstarterButton";
import { images, upcomingShows, videos } from "./content/siteContent";

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
        className="relative h-screen bg-cover bg-center banner-background"
        data-testid="hero-banner"
        style={heroBackgroundStyle}
        role="banner"
      >
        <div className="relative z-10 flex flex-col items-center justify-end h-full">
          <motion.h1
            id="hero-title"
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-2xl lg:text-8xl md:text-6xl sm:text-4xl font-bold text-red-800 drop-shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            &quot;Corred Insensatos...&quot;
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-300 mb-32 lg:mb-1 md:mb-10 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Desatando la furia del inframundo.
          </motion.p>
        </div>
      </header>

      <main aria-labelledby="hero-title">
      <section
        aria-labelledby="gallery-heading"
        className="py-16 bg-gray-900"
      >
        <div className="max-w-5xl mx-auto px-4 overflow-hidden">
          <motion.div
            className="flex flex-nowrap space-x-6"
            animate={{ x: [0, -150, -300, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                className="w-full max-w-md h-64 object-cover rounded-xl shadow-xl"
                alt={image.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-labelledby="story-heading" className="py-20 bg-black text-center">
        <motion.h2
          id="story-heading"
          className="text-4xl md:text-6xl text-red-500 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Siente el Fuego, Escucha el Rugido
        </motion.h2>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Balrock trae la furia del inframundo al escenario con riffs poderosos
          y tambores estremecedores.
        </p>
      </section>

      <section aria-labelledby="video-gallery-heading" className="py-16 bg-gray-800 text-center">
        <h2 id="video-gallery-heading" className="text-4xl text-red-500 font-bold">
          Galería de Videos
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                data-cmp-vendor="s30"
                src="about:blank"
                className="cmplazyload w-full h-64"
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
      </section>

      <ConcertsSection shows={upcomingShows} />

       <section aria-labelledby="booking-heading" className="py-16 bg-gray-800 text-center">
        <div className="relative z-10 flex flex-col items-center justify-end h-full">
          <h2 id="booking-heading" className="sr-only">
            Contratación
          </h2>
          <GigstarterButton/>
        </div>
      </section>
      </main>

      <footer className="py-10 bg-gray-900 text-center">
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
