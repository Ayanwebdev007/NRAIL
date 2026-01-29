import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurStory from './components/OurStory/OurStory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        {/* Other sections will be added here */}
      </main>
    </div>
  );
}

export default App;
