import React from 'react';
import Navbar from '../components/molecules/navbar';
import Introduction from '../components/organism/Introduction/index';
import Finance from '../components/organism/Finance/index';
import Works from '../components/organism/Works/index';
import Footer from '../components/organism/Footer/index';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Introduction />
      <Finance />
      <Works />
      <Footer />
    </div>
  );
}
