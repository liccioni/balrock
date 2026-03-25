import PropTypes from "prop-types";

export default function HeroSection({ imageSrc }) {
  return (
    <header
      className="hero-photo relative isolate flex min-h-screen items-end overflow-hidden bg-[#090807]"
      data-testid="hero-banner"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-end px-5 pb-10 pt-24 sm:px-6 md:px-10 md:pb-14 lg:px-16 lg:pb-18">
        <div className="max-w-md">
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
        </div>
      </div>
    </header>
  );
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
