import React from "react";
import Link from "next/link";
import {urlFor} from "../lib/client";

const HeroBanner = ({
  heroBanner: {
    buttonText,
    midText,
    smallText,
    largeText,
    largeText2,
    product,
    description,
    image
  }
}) => {
  console.log(image);
  return (
    <>
      <div className='hero-banner-container'>
        <p className='beats-solo'>{smallText}</p>
        <h3 className=''>{midText}</h3>
        <img
          src={urlFor(image)}
          alt='headphones'
          className='hero-banner-image'
        />
        <div>
          <Link href='/product/ID'>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
