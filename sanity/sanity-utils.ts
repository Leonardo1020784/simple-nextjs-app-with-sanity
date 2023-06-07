import { createClient, groq } from "next-sanity";
import { client } from "./lib/client";
import clientConfig from './config/client-config'
import { Banner } from "./types/Banner";
import { Product } from "./types/Product";


export async function getBanner(): Promise<Banner[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "banner"]{
        _id,
        _createdAt,
        buttonText,
        smallText,
        midText,
        largeText1,
        Description,
        desc,
        "image": image.asset->url,
        "image2": image2.asset->url
      }`
    )
  }

  export async function getProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "product"]{
        _id,
        _createdAt,
        price,
        name,
        details,
        "image": image.asset->url,
        "image2": image2.asset->url,
        "image3": image3.asset->url,
        url
      }`
    )
  }
