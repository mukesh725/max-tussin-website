import React from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

export default function Navigation({ className = '', onClick }: NavigationProps) {
  return (
    <nav className={className}>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-600 hover:text-blue-600 font-medium"
          onClick={onClick}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}