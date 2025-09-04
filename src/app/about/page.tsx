// app/about/page.tsx
'use client';

import React from 'react';
import Navbar from '@/Components/Navbar/navbar';
import Footer from '@/Components/Footer/footer';
// Import the AboutUs component (save the artifact code as a separate component file)
import AboutUs from '@/Components/Aboutus/about'; 

export default function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
}