import React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-fit md:w-auto">
      <section className="h-screen w-auto">
        <Navbar />
        {children}
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
