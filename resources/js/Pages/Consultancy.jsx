import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Consultancy() {
  return (
    <MainLayout>
      <Head title="8vice - Consultancy" />
      <section className="section section--white">
        <div className="container">
          <h1 className="t-h1">Consultancy Page</h1>
          <p className="t-body-lg">This page has been mapped to React. Content from legacy_html needs to be transferred here.</p>
        </div>
      </section>
    </MainLayout>
  );
}
