import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GigstarterButton from "../GigstarterButton";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["20%", "-14%"]);
  const panelY = useTransform(scrollYProgress, [0, 1], ["8%", "-4%"]);
  const shouldAnimateIn = import.meta.env.MODE !== "test";

  return (
    <motion.section
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
      initial={shouldAnimateIn ? { opacity: 0, y: 44 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-scene-header">
        <div className="section-scene-copy">
          <p className="section-kicker">
            Contacto
          </p>
          <h2 id="contact-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Entra en contacto.
          </h2>
        </div>
        <motion.div
          className="scene-ghost-word scene-ghost-word--tight"
          style={{ y: ghostY }}
          aria-hidden="true"
        >
          JOIN
        </motion.div>
      </div>
      <motion.div className="mt-8 grid gap-6 md:grid-cols-2" style={{ y: panelY }}>
        <a
          href="mailto:balrockoficial@gmail.com"
          className="contact-panel vinyl-card border border-white/10 px-5 py-6 text-left transition-colors hover:border-[#8b0000]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b0000]">
            Correo
          </p>
          <p className="mt-3 text-lg font-semibold text-[#e3dbd2]">
            balrockoficial@gmail.com
          </p>
        </a>
        <a
          href="https://www.instagram.com/balrockoficial/"
          target="_blank"
          rel="noreferrer"
          className="contact-panel vinyl-card border border-white/10 px-5 py-6 text-left transition-colors hover:border-[#8b0000]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b0000]">
            Instagram
          </p>
          <p className="mt-3 text-lg font-semibold text-[#e3dbd2]">
            @balrockoficial
          </p>
        </a>
      </motion.div>
      <motion.div
        className="contact-booking-panel vinyl-card mt-6 border border-white/10 px-5 py-6 text-center sm:px-6"
        style={{ y: panelY }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b0000]">
          Contratación
        </p>
        <h3 className="band-heading mt-3 text-3xl sm:text-4xl">
          Trae a Balrock.
        </h3>
        <p className="band-copy mx-auto mt-3 max-w-xl text-sm sm:text-base">
          Sala, festival o garito. Si buscas una noche dura y con pegada, hablamos.
        </p>
        <div className="mt-8">
          <GigstarterButton />
        </div>
      </motion.div>
    </motion.section>
  );
}
