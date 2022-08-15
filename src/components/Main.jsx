import Product from './Product.jsx';
import styled from 'styled-components';

export default function Main(props) {
  const {products, onBookmark, onFilter, filter, onSortChange, sortLowToHigh} = props;

  return (
    <main>
      <Buttons>
        <Button onClick={() => onFilter('body')} filter={filter}>
          Body
        </Button>
        <Button onClick={() => onFilter('lens')} filter={filter}>
          Lens
        </Button>
        <Button onClick={onSortChange} disabled={sortLowToHigh}>
          Low To High
        </Button>
        <Button onClick={onSortChange} disabled={!sortLowToHigh}>
          High To Low
        </Button>
      </Buttons>
      <StyledSection>
        {products.map(product => (
          <Product key={product.id} product={product} onBookmark={onBookmark} filter={filter}></Product>
        ))}
      </StyledSection>
    </main>
  );
}

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  font-size: 16px;
  padding: 1.5px 5px;
`;

const StyledSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
`;
