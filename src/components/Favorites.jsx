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
  width: 20%;
  img {
    max-width: 75%;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  p {
    font-size: 0.5rem;
    line-height: 1.5;
    margin: 0.8em 0;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
