import Product from './Product.jsx';
import styled from 'styled-components';

export default function Main(props) {
  const {products, onBookmark} = props;
  return (
    <main>
      <StyledSection>
        {products.map(product => (
          <Product key={product.id} product={product} onBookmark={onBookmark}></Product>
        ))}
      </StyledSection>
    </main>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
