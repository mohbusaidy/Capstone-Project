import Product from './Product.jsx';
import styled from 'styled-components';

export default function Main(props) {
  const {products, onBookmark, onFilter, filter, onSortChange, sortLowToHigh} = props;

  return (
    <main>
      <StyledSection>
        <ul>
          <button onClick={() => onFilter('body')} filter={filter}>
            Body
          </button>
          <button onClick={() => onFilter('lens')} filter={filter}>
            Lens
          </button>
          <button onClick={onSortChange} disabled={sortLowToHigh}>
            Low To High
          </button>
          <button onClick={onSortChange} disabled={!sortLowToHigh}>
            High To Low
          </button>
        </ul>
        {products.map(product => (
          <Product key={product.id} product={product} onBookmark={onBookmark} filter={filter}></Product>
        ))}
      </StyledSection>
    </main>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
