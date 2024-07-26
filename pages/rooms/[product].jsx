// pages/products/[product].js
import React from 'react';
import { useRouter } from 'next/router';
import productData from '../api/products';

const SingleProductPage = () => {
  const router = useRouter();
  const { product: productid } = router.query;
  const id = productid;
  const singleProd = productData[id];
  console.log(singleProd)

  if (!singleProd) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative">
        <img
          alt="Home"
          src={singleProd.image}
          className="h-96 w-full rounded-md object-cover"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{singleProd.title}</h1>
        <p className="text-gray-500">{singleProd.address}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Price: ${singleProd.price}</li>
          <li>Parking: {singleProd.parking}</li>
          <li>Bathrooms: {singleProd.bathroom}</li>
          <li>Bedrooms: {singleProd.bedroom}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleProductPage;
