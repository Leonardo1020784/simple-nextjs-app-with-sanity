"use client";

import React from 'react';

const Gtm = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-T8V3J5X`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Gtm;
