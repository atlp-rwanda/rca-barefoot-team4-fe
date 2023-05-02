import React from 'react';

import Banner from '@/components/atoms/banner';

export default function AuthPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-fit bg-white md:w-auto">
      <Banner position="top" />
      <Banner position="bottom" />
      <section>{children}</section>
    </main>
  );
}
