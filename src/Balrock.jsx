//import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import './Balrock.css';

const images = [
  "/images/balrock1.jpeg",
  "/images/balrock2.jpeg",
  "/images/balrock3.jpeg",
  "/images/balrock4.jpeg",
  "/images/balrock5.jpeg",
  "/images/balrock6.jpeg",
];

export default function BalrockPage() {
  return (
    <div className="bg-black text-gray-300 font-serif">
      {/* Banner */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-red-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
        </motion.h1>
      </section>

      {/* Image Carousel */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: [0, -100, -200, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} className="w-full max-w-sm h-60 object-cover rounded-lg shadow-lg" alt="Balrock performance" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 text-center bg-black">
        <motion.h2 
          className="text-4xl md:text-6xl text-red-600 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          &quot;Corred Insensatos...&quot;
        </motion.h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
        Balrock es una amalgama de cuatro tipos nada corrientes y alocados, a los que algunos llaman &quot;banda&quot;. Está formada por Xavi en la sucututummtrapu (léase batería y coros), Jose Luis en el ninonino (otros le dicen guitarra), Gus, el otro ninonino y voz, y Diego al dumdumdum de cuerdas gruesas, además de algún que otro berrido en los coros.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-red-600 text-3xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-red-600 text-3xl"><FaYoutube /></a>
          <a href="#" className="text-gray-400 hover:text-red-600 text-3xl"><FaFacebook /></a>
        </div>
        <p className="mt-4 text-gray-500">&copy; 2025 Balrock. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
