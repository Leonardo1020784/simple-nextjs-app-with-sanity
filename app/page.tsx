import Core from '../components/Core'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'
import { getBanner, getProducts } from "../sanity/sanity-utils"
import Image from 'next/image';
import Link from "next/link";
import Head from '../components/Head'

export default async function Home() {
  const banner = await getBanner();
  const products = await getProducts();
  return (
    <>
    <Head/>
      <Navbar />

      <div>
      {banner.map((banner) => (
            <div className='m-3' key={banner._id}>
              <div className="hero-banner-container">
                <div>
                  <p className="beats-solo">{banner.smallText}</p>
                  <h1 className="text-slate-100	">{banner.midText}</h1>
                  <Image src={banner.image} alt="perfumes" width={450} height={450} className="hero-banner-image" />
                  <div>
                <button type="button">{banner.buttonText}</button>
                <div className="desc">
                <p>{banner.desc}</p>
              </div>
            </div>
          </div>
        </div> 
        <div>
        <Image src={banner.image2} alt="perfumes" width={800} height={600}  className="hero-banner-image2" />
        </div>
        </div>
      ))}
      </div>

      <div className="p-10">
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">NUESTROS PRODUCTOS</h2>
      <p className="mt-3 text-lg dark:text-gray-400 text-center">¡Encuentra el obsequio perfecto para sorprender a mamá!</p>
    </div>
    <div className="products-container">

    <div className="product-card-container">
      <div className="product-card-grid">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/productdetail?name=${encodeURIComponent(
              product.name
            )}&price=${product.price}&image=${encodeURIComponent(
              product.image
            )}&image2=${encodeURIComponent(
              product.image2
            )}&image3=${encodeURIComponent(
              product.image3
            )}&details=${encodeURIComponent(product.details)}`}
          >
            <div className="product-card">
              <Image
                src={product.image}
                alt="product"
                width={700} height={700} 
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <p className="invisible">${product.details}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <Core />

    <div className="product-card-container">
      <div className="product-card-grid">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/productdetail?name=${encodeURIComponent(
              product.name
            )}&price=${product.price}&image=${encodeURIComponent(
              product.image
            )}&image2=${encodeURIComponent(
              product.image2
            )}&image3=${encodeURIComponent(
              product.image3
            )}&details=${encodeURIComponent(product.details)}`}
          >
            <div className="product-card">
              <Image
                src={product.image}
                alt="product"
                width={700} height={700} 
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <p className="invisible">${product.details}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <div className='m-5'>
    <Whatsapp/>
    </div>

    </div>

    <Footer />
    </>
  )
}
