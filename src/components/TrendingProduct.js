import React from 'react';
import '../styles/TrendingProducts.css';

const trendingProducts = [
    { id: 1, name: 'Organic Tomatoes', price: '$30 / kg', imageUrl: require('../assets/tomato.webp') },
  { id: 2, name: 'Organic Tomatoes', price: '$30 / kg', imageUrl: require('../assets/tomato.webp') },
  { id: 3, name: 'Organic Tomatoes', price: '$30 / kg', imageUrl: require('../assets/tomato.webp') },
  { id: 4, name: 'Organic Tomatoes', price: '$30 / kg', imageUrl: require('../assets/tomato.webp') },
  { id: 5, name: 'Organic Tomatoes', price: '$30 / kg', imageUrl: require('../assets/tomato.webp') },
];

const TrendingProducts = () => (
  <div className="trending-products">
    <h2>Trending Products</h2>
    <div className="products">
      {trendingProducts.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TrendingProducts;
