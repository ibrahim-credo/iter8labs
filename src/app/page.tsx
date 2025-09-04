// app/page.tsx
'use client';

import React from 'react';
import Navbar from '@/Components/Navbar/navbar';
import Hero from '@/Components/Hero/hero';
import Features from '@/Components/Features/features';
import ProductShowcase from '@/Components/Products/products';
import CallToAction from '@/Components/CallToAction/calltoaction';
import Footer from '@/Components/Footer/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <Features />
        <ProductShowcase />
        
        {/* Add Trust Indicators section here if needed */}
        {/* <TrustIndicators /> */}
        
        {/* Add Pricing section here if needed */}
        {/* <Pricing /> */}
        
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}