import React from 'react';
import '../styles/BannerAd.css';

const BannerAd = ({ imageUrl, linkUrl, text }) => (
  <div className="banner-ad" style={{ backgroundImage: `url(${imageUrl})` }}>
    <a href={linkUrl} className="banner-link">
      {text}
    </a>
  </div>
);

export default BannerAd;
