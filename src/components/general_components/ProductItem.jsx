import { useState } from 'react';
import '../../styles/main_components_style/ProductItem.scss'



export default function ProductItem({ name, price }) {
  const [mouseProductEnter, setMouseProductEnter] = useState('')

  function handleMouse(event) {
    console.log('mouse enter')
  }

  return(
    <div className="product" onMouseOver={handleMouse}>
          <div className="product-title">
            <h4>{name}</h4>
          </div>
          <div className="product-price">
            <div className="product-coast">{price}</div>
            <div className="product-currency">&#8381;</div>
          </div>
          <div className="product-images">
          </div>
          <a className="product-buy" href="">заказать</a>
        </div>
  );
}