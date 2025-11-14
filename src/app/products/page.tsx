// app/products/page.tsx
'use client';

import React from 'react';
import Navbar from '@/Components/Navbar/navbar';
import Footer from '@/Components/Footer/footer';
import ProductShowcase from '@/Components/Products/products';

export default function Products() {
  return (
    <>
      <Navbar />
      <ProductShowcase />
      <Footer />
    </>
  );
}

