import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Max Tussin provided immediate relief for my persistent cough. I highly recommend it!'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'The nighttime formula helped me get the rest I needed while fighting a cold.'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: "As a mother, I trust Max Tussin for my whole family. It's gentle yet effective."
  }
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}