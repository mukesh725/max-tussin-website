import React from 'react';
import TeamMember from './TeamMember';
import { teamMembers } from './aboutData';

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About MaxTussin</h1>
          <p className="text-lg text-gray-600 mb-6">
            Since 1970, MaxTussin has been dedicated to providing effective relief for families dealing with coughs and colds. Our commitment to quality and safety has made us a trusted name in households across the country.
          </p>
          <p className="text-lg text-gray-600">
            We understand the importance of getting back to health quickly, which is why our products are formulated with carefully selected ingredients that provide fast, effective relief while being gentle on your system.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To provide safe, effective, and accessible relief solutions that help people feel better and get back to their daily lives quickly.
          </p>
        </div>
      </div>
    </div>
  );
}