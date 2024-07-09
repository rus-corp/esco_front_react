import { useEffect, useState } from 'react';
import '../../styles/main_components_style/ProductList.scss'

import ProductItem from './ProductItem';

import { getMainPageProducts } from '../../api/api';





export default function ProductList() {
  const [productsList, setProducts] = useState([])

  useEffect(() => {
    getMainPageProducts().then((response) => {setProducts(response.data)}).catch(
      error => console.log('Product error', error)
    );
  }, [])

  return(
    <section className="main-page-product-list">
      <div className="product-list">
        {productsList.map((product) => (
          <ProductItem key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}