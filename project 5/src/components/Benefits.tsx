import React from 'react';
import { Clock, Shield, Leaf, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Fast Acting Relief',
    description: 'Feel better quickly with our rapid-action formula'
  },
  {
    icon: Shield,
    title: 'Clinically Proven',
    description: 'Tested and trusted by healthcare professionals'
  },
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Made with carefully selected natural ingredients'
  },
  {
    icon: ThumbsUp,
    title: 'Long Lasting',
    description: 'Up to 12 hours of continuous symptom relief'
  }
];

export default function Benefits() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Max Tussin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-blue-50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}