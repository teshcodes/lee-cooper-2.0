import React from 'react';
import './Heritage.css';
import FadeInOnScroll from './FadeInOnScroll';

function Heritage() {
  return (
    <section className="heritage-section" id="heritage">
      <FadeInOnScroll>
        <div className="heritage-content">
          <h2 className="heritage-headline">
            Originals Since 1908.<br />
            A Legacy Forged in Denim.
          </h2>
          <p className="heritage-text">
            Born in East London, Lee Cooper isn't just a brand; it's a testament to over a century of innovation, rebellion, and authentic craftsmanship. From workwear essentials to iconic denim, our journey is woven with the fabric of British history. We've clothed generations of dreamers, doers, and revolutionaries, always pushing boundaries while honoring our roots.
          </p>
          <p className="heritage-text">
            Every stitch tells a story of quality, comfort, and unwavering spirit. We carry forward a legacy that champions individuality and the enduring power of genuine denim. Discover the spirit that has defined us for over a hundred years.
          </p>
          <button className="heritage-cta">EXPLORE OUR HISTORY</button>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

export default Heritage;