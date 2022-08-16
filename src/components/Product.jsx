import styled from 'styled-components';
import {Modal} from './Modal';
import {useState} from 'react';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

export default function Product(props) {
  const {product, onBookmark} = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <CameraBox>
      <h2>{product.name}</h2>
      <img
        onClick={() => {
          setModalIsOpen(modalIsOpen => !modalIsOpen);
        }}
        src={product.image}
        alt={product.name}
      ></img>
      <Box>
        <div>${product.price}</div>
        <Bookmark onClick={() => onBookmark(product.id)}>
          {product.bookmarked ? <IoMdHeart /> : <IoIosHeartEmpty />}
          <Modal
            open={modalIsOpen}
            onClose={() => {
              setModalIsOpen(false);
            }}
            onBookmark={onBookmark}
            product={product}
          ></Modal>
        </Bookmark>
      </Box>
    </CameraBox>
  );
}

const Bookmark = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
`;
const CameraBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 1rem;
  width: 20rem;
  height: 20rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  background-color: white;
  &:hover {
    background-color: #bfbfbf;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    margin: 25px;
    align-self: center;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
