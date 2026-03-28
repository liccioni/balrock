import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube } from "react-icons/fa";
import "./Balrock.css";
import ConcertsSection from "./components/ConcertsSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import ParallaxDivider from "./components/ParallaxDivider";
import SceneStatement from "./components/SceneStatement";
import SoundCloudSection from "./components/SoundCloudSection";
import VideoSection from "./components/VideoSection";
import {
  concertGallery,
  images,
  soundcloudEmbedUrl,
  soundcloudProfileUrl,
  upcomingShows,
  videos,
} from "./content/siteContent";

const socialLinkClassName =
  "social-link inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-[#b3aba3] transition-colors hover:border-[#8b0000]/80 hover:text-[#e8e1d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b]";

export default function BalrockPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="balrock-page min-h-screen bg-[#090807] text-[#ddd5cc]">
      <div className="texture-overlay" />
      <div className="page-content">
        <HeroSection imageSrc={images[0].src} secondaryImageSrc={images[1].src} />
        <main className="scene-main">
          <ConcertsSection shows={upcomingShows} />
          <SceneStatement
            eyebrow="Entra en escena"
            title="Ruido bajo la piel."
            body="Todo entra denso, oscuro y de frente."
            align="left"
            tone="ember"
          />
          <VideoSection videos={videos} images={images} />
          <ParallaxDivider
            imageSrc={images[3].src}
            altLabel="Balrock en directo como divisor visual"
            variant="ash"
          />
          <SceneStatement
            eyebrow="Siguiente corte"
            title="Noche cerrada. Pulso arriba."
            body="El golpe llega seco. La sala responde."
            align="right"
            tone="ash"
          />
          <GallerySection items={concertGallery} />
          <ParallaxDivider
            imageSrc={images[2].src}
            altLabel="Guitarra de Balrock como divisor visual"
            variant="shard"
          />
          <SoundCloudSection
            embedUrl={soundcloudEmbedUrl}
            profileUrl={soundcloudProfileUrl}
          />
          <SceneStatement
            eyebrow="Último acto"
            title="Entra. Mira. Trae ruido."
            body="Si quieres a Balrock en tu sala, abre la puerta y sube el volumen."
            align="left"
            tone="ember"
          />
          <ContactSection />
        </main>
        <footer className="border-t border-white/10 bg-[#111111]/82 py-14 text-center">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10 lg:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Sigue el ruido
            </p>
            <nav
              aria-label="Redes sociales de Balrock"
              className="mt-8 flex justify-center gap-4"
            >
              <a
                href="https://www.instagram.com/balrockoficial/"
                aria-label="Instagram de Balrock"
                className={socialLinkClassName}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@balrockoficial"
                aria-label="Canal de YouTube de Balrock"
                className={socialLinkClassName}
              >
                <FaYoutube />
              </a>
              <a
                href="https://soundcloud.com/balrock-oficial"
                aria-label="SoundCloud de Balrock"
                className={socialLinkClassName}
              >
                <FaSoundcloud />
              </a>
              <a
                href="https://www.facebook.com/balrockband"
                aria-label="Facebook de Balrock"
                className={socialLinkClassName}
              >
                <FaFacebook />
              </a>
            </nav>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-[#7d746b]">
              &copy; {currentYear} Balrock. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
