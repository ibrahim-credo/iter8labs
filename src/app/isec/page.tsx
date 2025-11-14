// app/isec/page.tsx
'use client';

import React from 'react';
import Navbar from '@/Components/Navbar/navbar';
import Footer from '@/Components/Footer/footer';
import ISECPage from '@/Components/ISEC/isec';

export default function ISEC() {
  return (
    <>
      <Navbar />
      <ISECPage />
      <Footer />
    </>
  );
}

