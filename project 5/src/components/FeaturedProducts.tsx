import React from 'react';
import { ExternalLink } from 'lucide-react';

const products = [
  {
    name: 'Max Tussin DM',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80',
    description: 'Long-lasting cough suppressant & expectorant',
    amazonUrl: 'https://amazon.com',
    walmartUrl: 'https://walmart.com'
  },
  {
    name: 'Max Tussin Night',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80',
    description: 'Nighttime relief for cough & cold symptoms',
    amazonUrl: 'https://amazon.com',
    walmartUrl: 'https://walmart.com'
  },
  {
    name: "Max Tussin Children's",
    image: 'https://images.unsplash.com/photo-1584015907834-d91ecd9a5f3a?auto=format&fit=crop&q=80',
    description: 'Gentle formula for kids 6 years and older',
    amazonUrl: 'https://amazon.com',
    walmartUrl: 'https://walmart.com'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={product.amazonUrl}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon <ExternalLink size={16} />
                  </a>
                  <a 
                    href={product.walmartUrl}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Walmart <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}