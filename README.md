# Balrock Oficial

Sitio oficial de Balrock construido con React, Vite y Tailwind CSS. El proyecto
se despliega en GitHub Pages y usa el dominio personalizado
`https://balrockoficial.com/`.

## Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Playwright + Vitest para validación

## Primeros pasos

Instala dependencias:

```bash
npm ci
```

Inicia el entorno local:

```bash
npm run dev
```

La app arranca con Vite y queda disponible en la URL que muestre la terminal.

## Comandos útiles

- `npm run dev`: servidor local con recarga en caliente
- `npm run lint`: validación estática con ESLint
- `npm run test:unit`: pruebas unitarias con Vitest
- `npm run build`: build de producción
- `npm run preview`: vista previa local del build
- `npm run test:smoke`: smoke tests Playwright sobre el sitio renderizado
- `npm run test:smoke:base-path`: smoke test de despliegue bajo `/balrock/`
- `npm run test`: cadena completa de validación local
- `npm run ci`: alias de validación pensado para CI

Si Playwright necesita navegadores localmente:

```bash
npx playwright install chromium
```

## Dónde editar el contenido

La mayor parte del contenido editable del sitio vive en:

- [`src/content/siteContent.js`](src/content/siteContent.js): conciertos, imágenes de galería y videos
- [`src/Balrock.jsx`](src/Balrock.jsx): estructura principal de la landing
- [`src/components/ConcertsSection.jsx`](src/components/ConcertsSection.jsx): renderizado de conciertos
- [`src/GigstarterButton.jsx`](src/GigstarterButton.jsx): bloque de contratación y fallback de Gigstarter

Recursos estáticos:

- [`public/images/`](public/images/): imágenes de banda, banners y creatividades
- [`public/favicon.ico`](public/favicon.ico): favicon del sitio

## Cambios frecuentes

### Actualizar conciertos

Edita `upcomingShows` en [`src/content/siteContent.js`](src/content/siteContent.js).

Formato esperado:

```js
{
  date: "2026-04-17",
  location: "Barcelona, España",
  venue: "Bar Ceferino",
  buyLink: "https://..."
}
```

Notas:

- `date` se guarda en formato ISO `YYYY-MM-DD`
- `buyLink` es opcional
- si no hay conciertos, deja `upcomingShows` como `[]` y el sitio mostrará el
  estado vacío automáticamente

### Actualizar videos

Edita `videos` en [`src/content/siteContent.js`](src/content/siteContent.js).

Cada video necesita:

- `src`: URL del embed de YouTube no-cookie
- `title`: título descriptivo para accesibilidad

### Actualizar imágenes

Edita `images` en [`src/content/siteContent.js`](src/content/siteContent.js) y
añade o reemplaza los archivos correspondientes en [`public/images/`](public/images/).

Cada imagen necesita:

- `src`: ruta al archivo
- `alt`: descripción útil de la imagen

### Actualizar textos SEO y metadatos

Edita [`index.html`](index.html).

Ahí viven:

- `lang="es"`
- `<title>`
- meta description
- canonical
- Open Graph
- Twitter card

## Integraciones externas

Las integraciones de terceros activas están documentadas en:

- [`docs/third-party-integrations.md`](docs/third-party-integrations.md)

Incluye propósito, dependencia operativa y comportamiento esperado si fallan.

## Validación antes de abrir PR

Ejecuta:

```bash
npm run lint
npm run test
```

Esto cubre:

- pruebas unitarias de contenido y componentes
- smoke tests desktop/mobile
- verificación de despliegue con base path
- comprobaciones básicas de accesibilidad

## Despliegue

- El despliegue a GitHub Pages se hace desde `main`
- El dominio personalizado está definido en [`CNAME`](CNAME) como `balrockoficial.com`
- El workflow de CI y validación está en [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
- El workflow de deploy está en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## Mantenimiento

- Mantén conciertos, videos e imágenes en `src/content/siteContent.js` para no
  dispersar contenido editable por toda la app
- Si cambias texto visible, enlaces principales o metadatos, revisa también los
  smoke tests en [`tests/smoke.spec.js`](tests/smoke.spec.js)
- Si añades una integración externa nueva, documenta su propósito y fallback en
  [`docs/third-party-integrations.md`](docs/third-party-integrations.md)
- Mantén el trabajo en una rama y mediante pull request; no desarrolles
  directamente sobre `main`
