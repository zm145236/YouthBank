import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Features } from './components/Sections/Features';
import { Steps } from './components/Sections/Steps';
import { Wallet } from './components/Sections/Wallet';
import { Community } from './components/Sections/Community';
import { FAQ } from './components/Sections/FAQ';
import { Footer } from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Wallet />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;