// src/components/ProductShowcase.jsx
import React from 'react';
import './ProductShowcase.css';

// Dummy Product Data - UPDATED WITH backImageUrl FOR ALL PRODUCTS
const products = [
  {
    id: 1,
    name: 'Rebel Fit Denim',
    price: '€99.99',
    imageUrl: 'https://picsum.photos/seed/denim_f1/400/500', // Front view
    backImageUrl: 'https://picsum.photos/seed/denim_b1/400/500', // Back view
  },
  {
    id: 2,
    name: 'Urban Explorer Jacket',
    price: '€149.99',
    imageUrl: 'https://picsum.photos/seed/jacket_f2/400/500',
    backImageUrl: 'https://picsum.photos/seed/jacket_b2/400/500',
  },
  {
    id: 3,
    name: 'Heritage Straight Jeans',
    price: '€89.99',
    imageUrl: 'https://picsum.photos/seed/jeans_f3/400/500',
    backImageUrl: 'https://picsum.photos/seed/jeans_b3/400/500',
  },
  {
    id: 4,
    name: 'Iconic Graphic Tee',
    price: '€39.99',
    imageUrl: 'https://picsum.photos/seed/tee_f4/400/500',
    backImageUrl: 'https://picsum.photos/seed/tee_b4/400/500',
  },
  {
    id: 5,
    name: 'Vintage Wash Shorts',
    price: '€59.99',
    imageUrl: 'https://picsum.photos/seed/shorts_f5/400/500',
    backImageUrl: 'https://picsum.photos/seed/shorts_b5/400/500',
  },
  {
    id: 6,
    name: 'Distressed Denim Shirt',
    price: '€79.99',
    imageUrl: 'https://picsum.photos/seed/shirt_f6/400/500',
    backImageUrl: 'https://picsum.photos/seed/shirt_b6/400/500',
  },
];

function ProductShowcase() {
  return (
    <section className="product-showcase-section" id="products">
      <div className="product-showcase-content">
        <h2 className="product-showcase-headline">
          The New Collection.<br />
          Unleash Your Edge.
        </h2>

        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                {/* Two images for the hover effect */}
                <img src={product.imageUrl} alt={`${product.name} - Front`} className="product-image front-image" />
                {product.backImageUrl && (
                  <img src={product.backImageUrl} alt={`${product.name} - Back`} className="product-image back-image" />
                )}
                <button className="view-360-btn">360°</button>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="product-cta">SHOP NOW</button>
            </div>
          ))}
        </div>

        <button className="view-all-products-cta">VIEW ALL NEW ARRIVALS</button>
      </div>
    </section>
  );
}

export default ProductShowcase;