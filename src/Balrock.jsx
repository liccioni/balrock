//import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import './Balrock.css';

const BASE_URL = import.meta.env.BASE_URL;
const bannerUrl = `url('${BASE_URL}images/banner.png')`

const images = [
  `${BASE_URL}images/balrock1.jpeg`,
  `${BASE_URL}images/balrock2.jpeg`,
  `${BASE_URL}images/balrock3.jpeg`,
  `${BASE_URL}images/balrock4.jpeg`,
  `${BASE_URL}images/balrock5.jpeg`,
  `${BASE_URL}images/balrock6.jpeg`,
];

export default function BalrockPage() {
    return (
      <div className="bg-black text-gray-200 font-sans">
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ 
            backgroundImage: bannerUrl 
        }}
        >
          
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10">
            <motion.h1
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-xl md:text-8xl font-bold text-red-800 drop-shadow-2xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              &quot;Corred Insensatos...&quot;
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Desatando la furia del inframundo.
            </motion.p>
          </div>
        </section>
  
        <section className="py-16 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              className="flex space-x-6"
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
            Balrock trae la furia del inframundo al escenario con riffs poderosos y tambores estremecedores.
          </p>
        </section>
  
        <footer className="py-10 bg-gray-900 text-center">
          <div className="flex justify-center space-x-8">
            <motion.a href="https://www.instagram.com/balrockoficial/" className="text-gray-400 hover:text-red-500 text-3xl" whileHover={{ scale: 1.1 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" className="text-gray-400 hover:text-red-500 text-3xl" whileHover={{ scale: 1.1 }}>
              <FaYoutube />
            </motion.a>
            <motion.a href="https://www.facebook.com/balrockband" className="text-gray-400 hover:text-red-500 text-3xl" whileHover={{ scale: 1.1 }}>
              <FaFacebook />
            </motion.a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">&copy; 2025 Balrock. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }