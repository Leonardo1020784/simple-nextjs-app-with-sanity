import React from 'react'
import styles from "./styles/politica.module.css";
import Navbar from '@/components/Navbar';
import Footerlegal from '@/components/Footerlegal';
function Envios() {
  return (
    <div>
      <Navbar/>
    <div className={styles["politica-container"]}>
<strong>POLÍTICAS DE ENVÍO: GARANTÍA Y CAMBIOS</strong><strong>¿Cuándo aplican?</strong><p>Cuando recibes un producto que no compraste por error logístico.</p><p>Cuando el producto cuenta con algún defecto.</p><p>Nuestros productos pasan dos controles de calidad antes de llegar a tus manos, por lo cual no puede llegar ningún accesorio roto. En la foto de la guía que te enviamos antes del pedido, se evidencia tu producto en óptimas condiciones.</p><p>Para realizar un cambio, comunícate con nosotros a nuestras líneas de atención en WhatsApp.</p><p>La solicitud de cambio es válida en un plazo máximo de 48 horas desde el momento en que recibes el paquete.</p><strong>GARANTÍA:</strong><p>¿Qué cubre la garantía?</p><p>Malformaciones en su estructura.</p><p>Cualquier tipo de defecto de fábrica.</p><p><strong>IMPORTANTE:</strong> No aplica en la garantía si se evidencia presión o el accesorio se daña por algún motivo.</p><p>Deberás corroborar que el producto está en perfecto estado una vez llegue a tu destino. De todas formas, si detectas cualquier anomalía con el accesorio que compraste, por favor comunícate con cualquiera de nuestras líneas. Un asesor te ayudará a estudiar el caso y, si es el caso, cambiarte el producto por uno totalmente nuevo.</p><p>Nosotros asumimos el COSTO del envío por ti cuando compraste, te enviamos el producto gratis hasta la puerta de tu casa o trabajo. En caso de tener en cuenta algún cambio, deberás solventar los gastos de ENVÍO.</p><p>Si compraste el producto y en menos de 3 meses se presenta algún defecto antes mencionado, nosotros PAGAMOS el envío de nuestras oficinas a tu casa de nuevo.</p><strong>¿Cuándo se procesará mi pedido?</strong><p>Todos los pedidos se manejan y se envían el mismo día, a más tardar el día siguiente de realizar la compra desde la ciudad de Bogotá. Por favor, espere un tiempo adicional para que su pedido sea procesado durante las vacaciones y las temporadas de rebajas.</p><p>Procesamos pedidos de lunes a sábado. Los pedidos se procesarán dentro de 1-2 días hábiles a partir de la fecha del pedido y se enviarán al día siguiente después del día de procesamiento. Tenga en cuenta que no enviamos los domingos ni festivos.</p><strong>¿Cuánto tiempo llevará recibir mi pedido?</strong><p>Una vez que ejecute su pedido, espere un día hábil para procesarlo. Después de eso, tomará entre 3 y 6 días hábiles para la entrega en todo Colombia.</p><p>Por el momento, debido a la alta demanda de productos, los pedidos están presentando retrasos debido al tratamiento que se le da a la mercancía con sus protocolos de seguridad.</p><p>¡Gracias!</p>    </div>
    <Footerlegal/>
    </div>
  )
}

export default Envios
