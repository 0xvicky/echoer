import React from "react";
import {HeroBanner} from "./components";
import {client} from "./lib/client";

const App = ({productData, bannerData}) => {
  const products = ["Product 1e", "Product 2"];
  console.log(productData);
  return (
    <>
      <HeroBanner />
      {console.log(productData)}
      <div className='products-heading'>
        <h2 className=' text-4xl'>Best selling products</h2>
        <p>Speakers of many types</p>
      </div>
      <div className='products-containr'>
        {products.map(product => {
          return product;
        })}
      </div>
      Footer
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {productData, bannerData}
  };
};

export default App;
