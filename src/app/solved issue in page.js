import React from 'react';
import Navbar from '../components/molecules/navbar';
import Introduction from '../components/organism/Introduction/index';
import Works from '../components/organism/Works/index';
import Footer from '../components/organism/Footer/index';
import ServiceCard from '@/../../src/components/molecules/serviceCard'
import AccessSite from '../components/organism/AccessSite/index'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/aut/[...nextauth]/route.js/route";
import "./globals.css";
const session = await getServerSession(authOptions);



export default function Home() {
  const session = getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return (
    <div className="bg-white">
      <Navbar />
      <Introduction />
      <ServiceCard />
      <AccessSite />
      <Works />
      <Footer />
    </div>
  );
}
