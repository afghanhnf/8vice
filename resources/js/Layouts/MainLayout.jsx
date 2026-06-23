import React, { useEffect } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
  useEffect(() => {
    // If the legacy JS needs to be re-initialized on route change,
    // we can dispatch a custom event or call a function here.
  }, []);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
