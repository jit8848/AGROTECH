import React from 'react';
import HeroSlider from './Heroslider';
import ProductList from './Productlist';
import TrendingProducts from './TrendingProduct';
import BannerAd from './Bannerad';
import '../styles/Homepage.css';

const Homepage = () => (
  <div className="homepage">
    <HeroSlider />
    <ProductList />
    <TrendingProducts />
    <BannerAd imageUrl="../assets/image1.jpg" linkUrl="/special-offer" text="Special Offer: 20% off on selected products!" />
  </div>
);

export default Homepage;
