import React from 'react';
import './Hero.css'; 

function Hero() {
  return (
    <section className="hero-section">
      {}
      <div className="hero-background">
        {}
      </div>

      <div className="hero-content">
        {}
        <h1 className="hero-headline">
          Authentic Spirit.<br />
          New Collection.
        </h1>

        {/* Call to Action */}
        <button className="hero-cta">SHOP NEW COLLECTION</button>
      </div>
    </section>
  );
}

export default Hero;