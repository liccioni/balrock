const BASE_URL = import.meta.env.BASE_URL;

export const images = [
  `${BASE_URL}images/balrock1.jpeg`,
  `${BASE_URL}images/balrock2.jpeg`,
  `${BASE_URL}images/balrock3.jpeg`,
  `${BASE_URL}images/balrock4.jpeg`,
  `${BASE_URL}images/balrock5.jpeg`,
  `${BASE_URL}images/balrock6.jpeg`,
];

export const upcomingShows = [
  {
    date: "2026-04-17",
    location: "Barcelona, España",
    venue: "Bar Ceferino",
  },
];

export const videos = [
  "https://www.youtube-nocookie.com/embed/z_Qw45eToGM?si=UosVPi7TlCho-8Yw",
  "https://www.youtube-nocookie.com/embed/kEFOoeGVU1M?si=jYBRmvW8BFcj4Q-1",
  "https://www.youtube-nocookie.com/embed/lJwzjP6UgZA?si=IsQus9ckxxolzSGQ",
  "https://www.youtube-nocookie.com/embed/0JuXgXAaOdo?si=GMBc8IVFLl23NNkh",
];

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
