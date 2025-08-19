
import React from "react";
import Card from "./_Card/Card";



export interface IProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
    next: {
      revalidate: 120,
    },
  });
  return res.json();
}

export default async function AllProducts() {
  // Fetch products مباشرة
  const allProducts: IProducts[] = await getProducts();

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-4 min-h-[95vh] bg-white dark:bg-black">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-white tracking-tight relative">
          <span className="inline-block relative z-10">All Products</span>
          <span className="absolute bottom-0 left-[50%] w-24 h-1 bg-gradient-to-r from-white to-main rounded-full transform -translate-x-1/2"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 gap-6">
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <div
                key={product.id}
                className="bg-transparent rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:shadow-black/50 border border-b-black dark:border-black transition-shadow dark:hover:shadow-main duration-300"
              >
                <Card product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}