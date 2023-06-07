import React from 'react';

function Head() {
  const imageUrl = './images/regalosparamama.webp';
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Regalos Para Mama",
    description: "Una tienda online con una exclusiva selección de regalos para mama",
    image: {
      "@type": "ImageObject",
      src: imageUrl,
      alt: "Regalos para mama"
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        query: "regalos para mama"
      }
    ]
  };

  const scriptText = JSON.stringify(structuredData);

  return (
    <div>
      <title>Regalos Para Mama</title>
      <meta name="title" content="Regalos Para Mama" />
      <meta name="description" content="Una tienda online con una exclusiva selección de regalos para Mamá. Encuentra el regalo perfecto para cualquier ocasión." />
      <meta name="keywords" content="regalos para mama, dia de la madre, regalos de cumpleaños para mama, detalles para mama, regalo para un amiga, regalos para mama de aniversario" />
      <meta name="author" content="CiriusJS" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content="Regalos Para Mama" />
      <meta property="og:description" content="Una tienda online con una exclusiva selección de regalos para mama. Encuentra el regalo perfecto para cualquier ocasión." />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Regalos para mama" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://regalos-para-mama.vercel.app/" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Regalos Para Mama" />
      <meta name="twitter:description" content="Una tienda online con una exclusiva selección de regalos para mamá. Encuentra el regalo perfecto para cualquier ocasión." />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: scriptText }}
      />
    </div>
  );
}

export default Head;
