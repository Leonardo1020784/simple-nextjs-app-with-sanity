import React from 'react';
import './styles/Footerlegal.css'; // Import the CSS file for styling
import Link from 'next/link';


function Footerlegal() {
  return (
    <>
      <div className="footer-container2">
        <ul className="footer-links">
          <li>
            <Link href="/envios" className="footer-link">
              Política de envios
            </Link>
          </li>
          <li>
            <Link href="/politica" className="footer-link">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/terminos" className="footer-link">
              Términos y condiciones
            </Link>
          </li>
        </ul>
        <p className="footer-text">
          © Copyright 2023 Lorem Inc. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
}

export default Footerlegal;
