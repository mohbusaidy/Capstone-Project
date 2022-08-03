import React from 'react';
import styled from 'styled-components';
import {NoBookmarkIcon} from './NoBookmarkIcon';
import {BookmarkIcon} from './BookmarkIcon';

export default function Product(props) {
  const {product, onAdd} = props;
  return (
    <CardStyled>
      <img className="productImage" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
    </CardStyled>
  );
}

const CardStyled = styled.article`
  margin: 1rem;
  max-width: 20rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.8em 0;
  }
`;
// @media (max-width: 600px) {
//   .grid {
//     width: 100%;
//     flex-direction: column;
//   }

const Bookmark = styled.button`
  width: 50px;
  fill: 1;
  background-color: transparent;
`;
