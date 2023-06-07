import React, { useState } from 'react';
import { useRouter } from "next/router";
import './styles/Payment.css';
import Image from 'next/image';

const Payment = () => {

  const router = useRouter();
  const { name, price, image } = router.query;
  const [quantity, setQuantity] = useState(1);

  // Calculate the discount amount
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : 0;
  const discount = (parsedPrice * 0.15).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  // Calculate the total by multiplying the price by the quantity and subtracting the discount
  const total = ((parsedPrice * quantity) - parseFloat(discount)).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

// Handle quantity change
const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setQuantity(parseInt(value));
};

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [additionalAddressInfo, setAdditionalAddressInfo] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

// ...

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Construct the WhatsApp message URL with the form data
  const message = `Hola, estoy realizando un pedido. Aquí están los detalles:
    Nombre completo: ${fullName}
    Dirección de e-mail: ${email}
    No. de Cedula: ${cedula}
    Teléfono: ${phone}
    Dirección: ${address}
    Información adicional sobre la dirección: ${additionalAddressInfo}
    Ciudad: ${city}
    Provincia: ${province}
    Método de pago: ${paymentMethod}
    Nombre del producto: ${name}
    Total: $${total}`;

  const whatsappURL = `https://wa.me/+573202529427?text=${encodeURIComponent(message)}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappURL, '_blank');
};

// ...


const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPaymentMethod(e.target.value);
};


  return (

    <div>
          <div className="resume-container">
      <p className="title-container">Resumen del pedido</p>
      
      <div className="product-container">
        <Image src={image as string}  width={100} height={100} alt="producto" className="image-container" />
        <p className="name-container">{name}</p>
        <p className="quantity-container">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </p>
      </div>

      <div>
        <p className="price-container">
          <span>Subtotal:</span>${price}
        </p>
        <p className="discount-container">
          <span>Descuento: </span>15%
        </p>
 
        <p className="shipping-container">
          <span>Envío:</span>$0
        </p>
      </div>
      <div>
        <b className="total-container">
          <span>Total:</span>${total}
        </b>
      </div>
    </div>
    <div className="payment-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Datos del cliente</h2>
        <div>
          <input type="text" placeholder="Nombre completo" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <input type="email" placeholder="Dirección de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="No. de Cedula" value={cedula} onChange={(e) => setCedula(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <h2>Dirección de envío</h2>
        <div>
          <input type="text" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Información adicional (opcional)" value={additionalAddressInfo} onChange={(e) => setAdditionalAddressInfo(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Codigo Postal" value={province} onChange={(e) => setProvince(e.target.value)} />
        </div>
        <h2>Método de envío</h2>
        <div>
          <span>Envio GRATIS</span><span>$0</span> 
        </div>
        <h2>Método de pago</h2>
        <div>
          {/* <div className="method-container">
            <label>
              <p>Pago seguro a través de PayU Latam</p>
              <input type="radio" value="Pago seguro a través de PayU Latam" checked={paymentMethod === 'Pago seguro a través de PayU Latam'} onChange={handlePaymentMethodChange} />          
            </label>
          </div> */}
          <div className="method-container">
            <label>
              <p>Pago contra entrega</p>
              <input type="radio" value="Pago contra entrega" checked={paymentMethod === 'Pago contra entrega'} onChange={handlePaymentMethodChange} />
              <p>Si deseas hacer el pago CONTRA ENTREGA, por favor sigue la siguiente información después de Completar aquí para poder DESPACHAR tu pedido instantáneamente.</p>
            </label>
          </div>
          <div className="method-container">
            <label>
              <p>Transferencia bancaria</p>
              <input type="radio" value="Transferencia bancaria" checked={paymentMethod === 'Transferencia bancaria'} onChange={handlePaymentMethodChange} />
              <p>Termina el proceso y te enviamos al WHATSAPP todos los datos para que puedas realizar TRANSFERENCIA: BANCOLOMBIA NEQUI DAVIVIENDA DAVIPLATA</p>
            </label>
          </div>
        </div>
        <button type="submit">Completar Pedido</button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
