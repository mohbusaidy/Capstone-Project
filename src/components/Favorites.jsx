import React from 'react';
import styled from 'styled-components';
import Product from './Product';

export default function Favorites(props) {
  const {favoriteItems, onAdd, onBookmark, bookmarked, id} = props;
  return (
    <StyledArticle>
      <h3>Favorites</h3>
      <div>{favoriteItems.length === 0 && <div> Favorites empty</div>}</div>
      {favoriteItems.map(product => (
        <Product key={product.id} product={product}>
          onAdd={onAdd}
        </Product>
      ))}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-flow: row wrap;
`;
