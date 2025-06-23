// src/components/FadeInOnScroll.jsx
import React, { useRef, useEffect, useState } from 'react';

const FadeInOnScroll = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  // Log whenever the component renders
  console.log('FadeInOnScroll: Component rendered. Current isVisible state:', isVisible);

  useEffect(() => {
    // Log when the useEffect hook runs
    console.log('FadeInOnScroll: useEffect triggered. domRef.current:', domRef.current);

    const observer = new IntersectionObserver(entries => {
      // Log when the IntersectionObserver callback fires
      console.log('FadeInOnScroll: IntersectionObserver callback fired. Entry:', entries[0]);

      if (entries[0].isIntersecting) {
        // Log if the element is intersecting
        console.log('FadeInOnScroll: Element IS intersecting! Setting isVisible to true.');
        setVisible(true);
        // We only need to observe once, so disconnect after it's visible
        observer.unobserve(domRef.current);
      } else {
        // Log if the element is NOT intersecting (e.g., scrolled out of view)
        console.log('FadeInOnScroll: Element is NOT intersecting.');
      }
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    const currentRef = domRef.current; // Capture current value for cleanup
    if (currentRef) {
      observer.observe(currentRef);
    } else {
      console.warn('FadeInOnScroll: WARNING! domRef.current is NULL when trying to observe.');
    }

    return () => {
      // Log when the cleanup function runs
      console.log('FadeInOnScroll: Observer cleanup function triggered.');
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;