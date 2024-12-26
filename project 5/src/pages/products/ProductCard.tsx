import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  amazonUrl: string;
  walmartUrl: string;
}

export default function ProductCard({ name, image, description, amazonUrl, walmartUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-4">
          <a 
            href={amazonUrl}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon <ExternalLink size={16} />
          </a>
          <a 
            href={walmartUrl}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walmart <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}