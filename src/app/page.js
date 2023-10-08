import {HeroBanner} from "./components";

export default function Home() {
  const products = ["Product 1", "Product 2"];

  return (
    <>
      <HeroBanner />
      <div>
        <h2>Best selling products</h2>
        <p>Speakers of many types</p>
        <div>
          {products.map(product => {
            return product;
          })}
        </div>
      </div>
      Footer
    </>
  );
}
