import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import ProductsPage from './pages/products/ProductsPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  // Simple routing based on URL path
  const path = window.location.pathname;

  const getContent = () => {
    switch (path) {
      case '/products':
        return <ProductsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <Benefits />
            <FeaturedProducts />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <Layout>
      {getContent()}
    </Layout>
  );
}

export default App;