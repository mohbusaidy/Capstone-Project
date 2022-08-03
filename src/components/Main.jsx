import React from 'react';
import Product from './Product.jsx';
import styled from 'styled-components';


export default function Main(props) {
  const {products, onAdd, bookmarked, id, onBookmark} = props;
  return (
    <main>
      <StyledSection>
        {products.map(
          product =>
            <Product key={product.id} product={product} onAdd={onAdd}></Product> /
           
        )}
      
      </StyledSection>
      
    </main>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
