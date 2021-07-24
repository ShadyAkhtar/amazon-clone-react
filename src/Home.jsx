import React from 'react';
import './Home.css';
import bgImage from './img/homeimage.jpg';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={bgImage} alt="home background" className="home__image" />
      </div>
      <div className="home__row">
        {/* Product */}
        <Product/>
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
      </div>
     
    </div>
  )
}

export default Home
