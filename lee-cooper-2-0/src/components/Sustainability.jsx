import React from 'react';
import './Sustainability.css'; 

function Sustainability() {
  return (
    <section className="sustainability-section" id="sustainability">
      <div className="sustainability-content">
        <h2 className="sustainability-headline">
          Crafted Responsibly.<br />
          Denim for a Better Future.
        </h2>
        <p className="sustainability-intro-text">
          At Lee Cooper 2.0, our legacy extends beyond just style. We are deeply committed to pioneering sustainable practices, ensuring our denim not only looks good but does good for the planet and its people.
        </p>

        <div className="sustainability-pillars">
          <div className="pillar-item">
            <h3>Eco-Conscious Materials</h3>
            <p>Utilizing organic cotton, recycled fibers, and innovative sustainable blends to reduce environmental impact from the ground up.</p>
          </div>
          <div className="pillar-item">
            <h3>Water & Energy Efficiency</h3>
            <p>Implementing advanced techniques in our production processes to significantly reduce water consumption and energy footprint.</p>
          </div>
          <div className="pillar-item">
            <h3>Ethical Production</h3>
            <p>Ensuring fair labor practices, safe working conditions, and transparent supply chains for every garment we create.</p>
          </div>
          <div className="pillar-item">
            <h3>Circular Design</h3>
            <p>Exploring initiatives for denim longevity, repair, and recycling, fostering a circular economy for our products.</p>
          </div>
        </div>

        <button className="sustainability-cta">LEARN MORE ABOUT OUR IMPACT</button>
      </div>
    </section>
  );
}

export default Sustainability;