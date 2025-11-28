import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  lang?: string;
}

export function SEO({
  title = "Nicolás Lundin — Senior Product Designer & Design Systems Specialist",
  description = "Senior Product Designer & Design Systems Specialist from Santiago, Chile. I craft scalable products and design systems, combining holistic UX vision with technical precision to bridge the gap between design and engineering.",
  path = "",
  lang = "en"
}: SEOProps) {
  const url = `https://nlund.in${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export { HelmetProvider };
