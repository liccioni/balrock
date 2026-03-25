import { useEffect, useState } from 'react';

export default function GigstarterButton() {
  const BASE_URL = import.meta.env.BASE_URL;
  const hireUsImage = `${BASE_URL}images/contratanos.png`;
  const [scriptStatus, setScriptStatus] = useState('idle');

  useEffect(() => {
    const existingScript = document.getElementById('gigstarter-sdk');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'gigstarter-sdk';
      script.src = 'https://gigstarter.s3.amazonaws.com/sdk.js';
      script.async = true;
      setScriptStatus('loading');
      script.addEventListener('load', () => setScriptStatus('ready'), {
        once: true,
      });
      script.addEventListener('error', () => setScriptStatus('error'), {
        once: true,
      });
      document.body.appendChild(script);
      return undefined;
    }

    setScriptStatus('ready');
  }, []);

  return (
    <div
      className="gigstarter-button"
      data-gigstarter-status={scriptStatus}
      data-slug="balrock"
      data-version="1"
    >
      <a
        href="https://www.gigstarter.es/artists/balrock"
        aria-label="Contrata Balrock en Gigstarter"
        aria-describedby="gigstarter-fallback-copy"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={hireUsImage}
          alt="Contrata Balrock"
        />
      </a>
      <p
        id="gigstarter-fallback-copy"
        className="mt-3 text-sm text-gray-400"
      >
        {scriptStatus === 'error'
          ? 'El widget de Gigstarter no se pudo cargar, pero el enlace de contratación sigue disponible.'
          : 'Si el widget no carga, el enlace de contratación sigue disponible.'}
      </p>
    </div>
  );
}
