// app/pricing/page.tsx
'use client';

import React from 'react';
import Navbar from '@/Components/Navbar/navbar';
import Footer from '@/Components/Footer/footer';
import Pricing from '@/Components/Pricing/pricing';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
}

