import React from 'react';
import Product from './Product.jsx';

export default function Main(props) {
  const {products} = props;
  return (
    <main className="grid card homeContainer">
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
