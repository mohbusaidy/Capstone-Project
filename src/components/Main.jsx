import Product from './Product.jsx';
import styled from 'styled-components';
import {IoIosCamera} from 'react-icons/io';
import {BsSortDown} from 'react-icons/bs';
import {BsSortUpAlt} from 'react-icons/bs';
import {RiCameraLensFill} from 'react-icons/ri';

export default function Main(props) {
  const {products, onBookmark, onFilter, filter, onSortChange, sortLowToHigh} = props;

  return (
    <main>
      <Buttons>
        <Button onClick={() => onFilter('body')} filter={filter}>
          <IoIosCamera />
        </Button>
        <Button onClick={() => onFilter('lens')} filter={filter}>
          <RiCameraLensFill />
        </Button>
        <Button onClick={onSortChange} disabled={sortLowToHigh}>
          <BsSortUpAlt />
        </Button>
        <Button onClick={onSortChange} disabled={!sortLowToHigh}>
          <BsSortDown />
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
  font-size: 30px;
  padding: 1.5px 5px;
  background-color: transparent;
  border: none;
  color: white;
  &:hover {
    background-color: #595959;
  }
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
