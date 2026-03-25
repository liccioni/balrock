import { useEffect } from 'react';

export default function GigstarterButton() {

  const BASE_URL = import.meta.env.BASE_URL;
  const hireUsImage = `${BASE_URL}images/contratanos.png`;

  useEffect(() => {
    const existingScript = document.getElementById('gigstarter-sdk');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'gigstarter-sdk';
      script.src = '//gigstarter.s3.amazonaws.com/sdk.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="gigstarter-button" data-slug="balrock" data-version="1">
      <a
        href="https://www.gigstarter.es/artists/balrock"
        aria-label="Contrata Balrock en Gigstarter"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={hireUsImage}
          alt="Contrata Balrock"
        />
      </a>
    </div>
  );
}
