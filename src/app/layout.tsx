// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iter8labs - Your Trusted Platform for SaaS Solutions',
  description: 'iter8labs is a software vendor platform designed to showcase and sell multiple SaaS products that enhance productivity, security, and efficiency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* Subtle background patterns/gradients */}
        <div className="fixed inset-0 -z-10 bg-black">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        {/* Main content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}