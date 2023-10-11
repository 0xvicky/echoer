"use client";

import React from "react";
import {HeroBanner} from "./components";
import {client} from "./lib/client";

const fetchData = async () => {
  const query = '*[_type == "product"]';
  const productData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {productData, bannerData}
  };
};

const App = async () => {
  const products = ["product1", "product2"];
  const {
    props: {productData, bannerData}
  } = await fetchData();
  console.log(productData);
  console.log(bannerData);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2 className=' text-4xl'>Best selling products MID TEXT</h2>
        <p>Speakers of many types</p>
      </div>
      <div className='products-container'>
        {products.map(product => {
          return product;
        })}
      </div>
      Footer
    </>
  );
};

export default App;
