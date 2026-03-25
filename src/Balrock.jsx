//import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Balrock.css";
import ConcertsSection from "./components/ConcertsSection";
import GigstarterButton from "./GigstarterButton";
import { images, upcomingShows, videos } from "./content/siteContent";

export default function BalrockPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-gray-200 font-sans">
      <section className="relative h-screen bg-cover bg-center banner-background">
        <div className="relative z-10 flex flex-col items-center justify-end h-full">
          <motion.h1
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
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 overflow-hidden">
          <motion.div
            className="flex flex-nowrap space-x-6"
            animate={{ x: [0, -150, -300, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                className="w-full max-w-md h-64 object-cover rounded-xl shadow-xl"
                alt="Presentación de Balrock"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black text-center">
        <motion.h2
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

      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-4xl text-red-500 font-bold">Galería de Videos</h2>
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
                title={`Balrock Video ${index + 1}`}
                width="560"
                height="315"
                data-cmp-src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      <ConcertsSection shows={upcomingShows} />

       <section className="py-16 bg-gray-800 text-center">
        <div className="relative z-10 flex flex-col items-center justify-end h-full">
          <GigstarterButton/>
        </div>
      </section>

      <footer className="py-10 bg-gray-900 text-center">
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://www.instagram.com/balrockoficial/"
            className="text-gray-400 hover:text-red-500 text-3xl"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@balrockoficial"
            className="text-gray-400 hover:text-red-500 text-3xl"
            whileHover={{ scale: 1.1 }}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/balrockband"
            className="text-gray-400 hover:text-red-500 text-3xl"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook />
          </motion.a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          &copy; {currentYear} Balrock. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
