import React from 'react';
import Navbar from '../components/molecules/navbar';
import Introduction from '../components/organism/Introduction/index';
import Works from '../components/organism/Works/index';
import Footer from '../components/organism/Footer/index';
import ServiceCard from '@/../../src/components/molecules/serviceCard'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Introduction />
      <ServiceCard />
      <Works />
      <Footer />
    </div>
  );
}
