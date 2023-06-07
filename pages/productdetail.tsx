import { useRouter } from "next/router";
import { useRef, RefObject } from "react";
import styles from "./styles/productDetail.module.css";
import Coreproductdetail from "../components/Coreproductdetail";
import Countdown from "../components/Countdownmkt";
import Reviews from "../components/Reviews";
import Whatsapp from "../components/Whatsapp";
import Payment from "../components/Payment";
import Navbar from "@/components/Navbar";
import Footerlegal from "@/components/Footerlegal";
import Image from 'next/image';

function ProductDetail() {
  const router = useRouter();
  const { name, price, image, image2, image3, details } = router.query;

  const paymentRef = useRef<HTMLDivElement>(null);

  const handleBuy = () => {
    paymentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className={styles["product-container"]}>
        <h1 className={styles["product-title"]}>{name}</h1>
        <Image src={image as string} alt="perfumes" width={1000} height={1000} className={styles["product-image"]} />
        <div className={styles["product-details"]}>
          <p className={styles["product-price"]}>
            <b>${price}</b>
          </p>
        </div>
        <button onClick={handleBuy} className={styles["buy-button"]}>
          Pagar Ahora
        </button>
        <p className={styles["product-description"]}>
          <b>Detalles:</b> {details}
        </p>
      </div>
      <div className={styles["product-image-container"]}>
        <Image src={image2 as string} alt="perfumes" width={1000} height={1000} className={styles["product-image-core"]} />
        <Image src={image3 as string} alt="perfumes" width={1000} height={1000} className={styles["product-image-core"]} />
      </div>
      <Coreproductdetail />
      <Countdown />
      <Reviews />
      <Whatsapp />
      <div ref={paymentRef}>
        <Payment />
      </div>
      <Footerlegal />
    </div>
  );
}

export default ProductDetail;
