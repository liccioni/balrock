import GigstarterButton from "../GigstarterButton";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
    >
      <p className="section-kicker">
        Contacto
      </p>
      <h2 id="contact-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
        Únete al ruido.
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <a
          href="mailto:balrockoficial@gmail.com"
          className="vinyl-card border border-white/10 px-5 py-6 text-left transition-colors hover:border-[#8b0000]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
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
          className="vinyl-card border border-white/10 px-5 py-6 text-left transition-colors hover:border-[#8b0000]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b0000]">
            Instagram
          </p>
          <p className="mt-3 text-lg font-semibold text-[#e3dbd2]">
            @balrockoficial
          </p>
        </a>
      </div>
      <div className="vinyl-card mt-6 border border-white/10 px-5 py-6 text-center sm:px-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#8b0000]">
          Contratación
        </p>
        <h3 className="band-heading mt-3 text-3xl sm:text-4xl">
          Trae a Balrock.
        </h3>
        <p className="band-copy mx-auto mt-3 max-w-xl text-sm sm:text-base">
          Sala, festival o garito. Si hay volumen, entramos.
        </p>
        <div className="mt-8">
          <GigstarterButton />
        </div>
      </div>
    </section>
  );
}
