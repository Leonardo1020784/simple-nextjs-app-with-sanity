import React from 'react';
import './styles/Review.css';
import Image from 'next/image';


function Reviews() {
  return (
    <div className="reviews-container">

      <div className="review-card">
        <div className="review-header">
          <div className="review-author">
            <Image src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100" width={100} height={100} alt="review " className="author-image" />
            <div className="author-details">
              <h4 className="author-name">Ana García</h4>
              <span className="author-time">2 days ago</span>
            </div>
          </div>
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="star-icon">
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="rating-value">4.7</span>
          </div>
        </div>
        <div className="review-content">
          <p>El producto que elegí es simplemente exquisito y ha superado mis expectativas. </p>
          <p>Gracias por ofrecer productos de alta calidad y por su atención al detalle. Definitivamente recomendaré su tienda a todos mis amigos.</p>
        </div>
      </div>

      <div className="review-card">
        <div className="review-header">
          <div className="review-author">
            <Image src="https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100" width={100} height={100} alt="review" className="author-image" />
            <div className="author-details">
              <h4 className="author-name">Carolina Sánchez</h4>
              <span className="author-time">5 days ago</span>
            </div>
          </div>
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="star-icon">
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="rating-value">4.5</span>
          </div>
        </div>
        <div className="review-content">
          <p>¡Estoy maravillada con el perfume que adquirí en su tienda!  </p>
          <p>Quería tomar un momento para agradecerles por su excelente servicio y por proporcionarme un producto de tan alta calidad.</p>
        </div>
      </div>

      <div className="review-card">
        <div className="review-header">
          <div className="review-author">
            <Image src="https://images.unsplash.com/photo-1553514029-1318c9127859?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&w=100" width={100} height={100} alt="review" className="author-image" />
            <div className="author-details">
              <h4 className="author-name">Laura Torres</h4>
              <span className="author-time">1 week ago</span>
            </div>
          </div>
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="star-icon">
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="rating-value">4.9</span>
          </div>
        </div>
        <div className="review-content">
          <p>Quiero expresarles mi gratitud por el hermoso regalo que me hicieron.</p>
          <p>Gracias por su pasión por los perfumes y por ofrecer productos que realmente deleitan los sentidos.</p>
        </div>
      </div>

    </div>
  );
}

export default Reviews;
