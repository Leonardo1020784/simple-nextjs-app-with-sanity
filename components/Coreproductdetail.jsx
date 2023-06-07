import React from 'react';
import './styles/Coreproductdetail.css';

function Coreproductdetail() {
  return (
    <div className="core-product-detail">
      <div className="core-product-detail-content">
        <h2 className="core-product-detail-title">
        ¡Exclusivo para mujeres!
        </h2>
        <p className="core-product-detail-description">
        ✅ ¡DESCUENTO APLICADO AUTOMÁTICAMENTE! PERFUMES DE MARCAS INTERNACIONALES
        </p>
      </div>
      <div className="core-product-detail-features">
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">🌊</span>
          <span className="core-product-detail-feature-text"> <b>RESISTENTE AL AGUA.</b></span>
        </div>
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">💪</span>
          <span className="core-product-detail-feature-text"> <b>IDEAL PARA ENTRENAMIENTOS.</b></span>
        </div>
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">🚫</span>
          <span className="core-product-detail-feature-text"> <b>NO MANCHA LA ROPA.</b> </span>
        </div>
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">🚨</span>
          <span className="core-product-detail-feature-text"> <b>DURACIÓN EXCEPCIONAL.</b> </span>
        </div>
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">🔱</span>
          <span className="core-product-detail-feature-text"> <b>PRODUCTOS EXCLUSIVOS.</b> </span>
        </div>
        <div className="core-product-detail-feature">
          <span className="core-product-detail-feature-icon">🎁</span>
          <span className="core-product-detail-feature-text"> <b> ENVÍO CON EMPAQUE DE CALIDAD.</b><br/> Cada producto llegará a tu puerta en un empaque de calidad, asegurando que tu experiencia desde la entrega sea excepcional. </span>
        </div>
      </div>
    </div>
  );
}

export default Coreproductdetail;
