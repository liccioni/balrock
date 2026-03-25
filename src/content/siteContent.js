const BASE_URL = import.meta.env.BASE_URL;

export const images = [
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

export const spotifyEmbedUrl = "";

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
