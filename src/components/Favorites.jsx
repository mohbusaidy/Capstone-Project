import styled from 'styled-components';
import Product from './Product';

export default function Favorites(props) {
  const {favoriteItems, onBookmark} = props;
  return (
    <StyledSection>
      <h2>Favorites</h2>
      <StyledArticle>
        <div>{favoriteItems.length === 0 && <div> Favorites empty</div>}</div>
        {favoriteItems &&
          favoriteItems.map(product => <Product key={product.id} product={product} onBookmark={onBookmark}></Product>)}
      </StyledArticle>
    </StyledSection>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-flow: row wrap;
  color: black;

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    margin: 12.5px;
    align-self: center;
  }
  p {
    font-size: 1.5rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
`;
