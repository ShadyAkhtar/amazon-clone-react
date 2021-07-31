import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
// import Product1 from './img/product/product1.jpg';

function Product({id, title, price, rating, image}) {
  const [{basket}, dispatch] = useStateValue();

  console.log("basket contain >>>>", basket);
  const addToBasket = () => {
    // Dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
