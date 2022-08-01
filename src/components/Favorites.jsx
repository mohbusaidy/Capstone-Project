import React from 'react';
import styled from 'styled-components';
import Product from './Product';

export default function Favorites(props) {
  const {favoriteItems, onAdd} = props;
  return (
    <StyledFooter>
      <h3>Favorites</h3>
      <div>{favoriteItems.length === 0 && <div> Favorites empty</div>}</div>
      {favoriteItems.map(product => (
        <Product key={product.id} product={product} onAdd={onAdd} />
      ))}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
`;
