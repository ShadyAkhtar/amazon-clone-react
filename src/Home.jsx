import React from 'react';
import './Home.css';
import bgImage from './img/homeimage.jpg';
import Product from './Product';
import productImg1 from './img/product/product1.jpg';
import productImg2 from './img/product/product2.jpg';
import productImg3 from './img/product/product3.jpg';
import productImg4 from './img/product/product4.jpg';
import productImg5 from './img/product/product5.jpg';
import productImg6 from './img/product/product6.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={bgImage} alt="home background" className="home__image" />
        <div className="home__row">
          {/* Product */}
          <Product
            id="1286468"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image={productImg1}
            rating={5}
          />
          {/* Product */}
          <Product
            id="18786454"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={239}
            image={productImg2}
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="14594631"
            title="Fitbit Smartwatch with Tools for Heart Health, Stress Management
          "
            price={228.95}
            image={productImg3}
            rating={3}
          />
          {/* Product */}
          <Product
            id="1453265"
            title="Xbox Elite Wireless Controller Series 2 - Black"
            price={126.99}
            image={productImg5}
            rating={4}
          />
          {/* Product */}
          <Product 
          id="14564646"
          title="
          Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
          price={649.99}
          image={productImg6}
          rating={5}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="1272177"
            title="
            SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
            price={49.99}
            image={productImg4}
            rating={4}
          />
        </div>

      </div>
    </div>
  )
}

export default Home
