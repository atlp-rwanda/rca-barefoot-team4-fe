import React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>
        <Navbar />
        {children}
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
