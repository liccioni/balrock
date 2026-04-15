const BASE_URL = import.meta.env.BASE_URL;

function galleryFileNumber(number) {
  return number <= 5 ? String(number) : String(number).padStart(2, "0");
}

function buildConcertPhotos(prefix, indices, altBase) {
  return indices.map((number) => ({
    alt: `${altBase} · foto ${number}`,
    src: `${BASE_URL}images/gallery/2025/${prefix}-${galleryFileNumber(number)}.jpg`,
  }));
}

export const images = [
  {
    alt: "Ilustración monstruosa de Balrock emergiendo de la oscuridad",
    src: `${BASE_URL}images/balrock.jpeg`,
  },
  {
    alt: "Balrock tocando en directo bajo luces rojas sobre el escenario",
    src: `${BASE_URL}images/balrock1.jpeg`,
  },
  {
    alt: "Integrantes de Balrock posando juntos antes de un concierto",
    src: `${BASE_URL}images/balrock2.jpeg`,
  },
  {
    alt: "Guitarrista de Balrock interpretando un riff durante el show",
    src: `${BASE_URL}images/balrock3.jpeg`,
  },
  {
    alt: "Balrock actuando frente al público en una sala pequeña",
    src: `${BASE_URL}images/balrock4.jpeg`,
  },
  {
    alt: "Primer plano de la banda durante una actuación en vivo",
    src: `${BASE_URL}images/balrock5.jpeg`,
  },
  {
    alt: "Balrock cerrando el concierto con toda la banda sobre el escenario",
    src: `${BASE_URL}images/balrock6.jpeg`,
  },
];

export const upcomingShows = [
  {
    date: "2026-04-17",
    location: "Barcelona, España",
    venue: "Bar Ceferino",
  },
  {
    date: "2026-05-08",
    location: "Barcelona, España",
    venue: "The Clubhouse Laietana",
  },
  {
    date: "2026-05-29",
    location: "Barcelona, España",
    venue: "Hangar 05",
  },
];

export const videos = [
  {
    src: "https://www.youtube-nocookie.com/embed/z_Qw45eToGM?si=UosVPi7TlCho-8Yw",
    title: "Balrock interpretando Ícaro en directo",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/kEFOoeGVU1M?si=jYBRmvW8BFcj4Q-1",
    title: "Balrock en concierto con guitarra y batería en primer plano",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/lJwzjP6UgZA?si=IsQus9ckxxolzSGQ",
    title: "Actuación en vivo de Balrock desde el público",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/0JuXgXAaOdo?si=GMBc8IVFLl23NNkh",
    title: "Balrock cerrando un tema en directo sobre el escenario",
  },
];

export const concertGallery = [
  {
    city: "Barcelona",
    dateLabel: "Agosto 2025",
    heroImage: `${BASE_URL}images/gallery/2025/agosto-ceferino-2.jpg`,
    sortKey: "2025-08",
    slug: "agosto-ceferino",
    title: "Ceferino",
    venue: "Barcelona · Ceferino",
    photos: buildConcertPhotos(
      "agosto-ceferino",
      [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "Balrock en Ceferino durante agosto de 2025",
    ),
  },
  {
    city: "Barcelona",
    dateLabel: "Febrero 2025",
    heroImage: `${BASE_URL}images/gallery/2025/febrero-hangar05-2.jpg`,
    sortKey: "2025-02",
    slug: "febrero-hangar05",
    title: "Hangar 05",
    venue: "Barcelona · Hangar 05",
    photos: buildConcertPhotos(
      "febrero-hangar05",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "Balrock en Hangar 05 durante febrero de 2025",
    ),
  },
  {
    city: "Barcelona",
    dateLabel: "Mayo 2025",
    heroImage: `${BASE_URL}images/gallery/2025/mayo-hangar05-2.jpg`,
    sortKey: "2025-05",
    slug: "mayo-hangar05",
    title: "Hangar 05",
    venue: "Barcelona · Hangar 05",
    photos: buildConcertPhotos(
      "mayo-hangar05",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "Balrock en Hangar 05 durante mayo de 2025",
    ),
  },
  {
    city: "Badajoz",
    dateLabel: "Octubre 2025",
    heroImage: `${BASE_URL}images/gallery/2025/octubre-badajam2-1.jpg`,
    sortKey: "2025-10-1",
    slug: "octubre-badajam2",
    title: "Badajam 2",
    venue: "Badajoz · Badajam 2",
    photos: buildConcertPhotos(
      "octubre-badajam2",
      [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "Balrock en Badajam 2 durante octubre de 2025",
    ),
  },
  {
    city: "Barcelona",
    dateLabel: "Octubre 2025",
    heroImage: `${BASE_URL}images/gallery/2025/octubre-ceferino-1.jpg`,
    sortKey: "2025-10-2",
    slug: "octubre-ceferino",
    title: "Ceferino",
    venue: "Barcelona · Ceferino",
    photos: buildConcertPhotos(
      "octubre-ceferino",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "Balrock en Ceferino durante octubre de 2025",
    ),
  },
];

export const spotifyEmbedUrl = "";
export const soundcloudProfileUrl = "https://soundcloud.com/balrock-oficial";
export const soundcloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/balrock-oficial&color=%238b0000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true";

export function formatShowDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  const showDate = new Date(Date.UTC(year, month - 1, day));
  const localizedMonth = showDate.toLocaleString("es-ES", {
    month: "long",
    timeZone: "UTC",
  });
  const capitalizedMonth =
    localizedMonth.charAt(0).toUpperCase() + localizedMonth.slice(1);

  return `${day} de ${capitalizedMonth}, ${year}`;
}
