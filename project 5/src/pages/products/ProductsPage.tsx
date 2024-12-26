import React from 'react';
import ProductCard from './ProductCard';
import { products } from './productsData';

export default function ProductsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Products</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover our range of trusted cough and cold relief products, designed to help you and your family feel better.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}