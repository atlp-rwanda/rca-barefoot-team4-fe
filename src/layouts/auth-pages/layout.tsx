import React from 'react';

import Banner from '@/components/atoms/banner';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';

export default function AuthPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen bg-white">
      <Banner position="top" />
      <Banner position="bottom" />
      <section>{children}</section>
    </main>
  );
}
