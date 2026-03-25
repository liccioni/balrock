export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section-frame mx-auto w-full max-w-6xl px-5 py-18 sm:px-6 md:px-10 lg:px-16"
    >
      <p className="section-kicker">
        Sobre la banda
      </p>
      <h2 id="about-heading" className="band-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
        Fuerte. Seco. Sin rodeos.
      </h2>
      <p className="band-copy mt-5 max-w-xl">
        Balrock entra pesado. Balrock pega de frente.
      </p>
    </section>
  );
}
