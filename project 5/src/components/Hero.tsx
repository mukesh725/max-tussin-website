import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-50 to-green-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Breathe Easy with Max Tussin
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Experience fast, effective relief with our trusted family of cough medicines. 
            Backed by science, trusted by families.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Learn More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}