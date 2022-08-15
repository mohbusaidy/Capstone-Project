import styled from 'styled-components';
import {Modal} from './Modal';
import {useState} from 'react';

export default function Product(props) {
  const {product, onBookmark} = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <CardStyled>
      <CameraBox>
        <h2>{product.name}</h2>
        <img
          onClick={() => {
            setModalIsOpen(modalIsOpen => !modalIsOpen);
          }}
          className="productImage"
          src={product.image}
          alt={product.name}
        ></img>
        <Box>
          <div>${product.price}</div>
          <Bookmark onClick={() => onBookmark(product.id)}>
            {product.bookmarked ? (
              <svg xmlns="http://www.w3.org/2000/svg">
                <path d="m24 39.3-1.15-1.05q-5-4.6-8.25-7.875-3.25-3.275-5.175-5.8Q7.5 22.05 6.75 20.05 6 18.05 6 16.1q0-3.75 2.525-6.275Q11.05 7.3 14.75 7.3q2.75 0 5.1 1.475Q22.2 10.25 24 13.05q1.95-2.9 4.25-4.325 2.3-1.425 5-1.425 3.7 0 6.225 2.525Q42 12.35 42 16.1q0 1.95-.75 3.95t-2.675 4.525q-1.925 2.525-5.175 5.8t-8.25 7.875Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="1">
                <path d="m24 39.3-1.15-1.05q-5-4.6-8.25-7.875-3.25-3.275-5.175-5.8Q7.5 22.05 6.75 20.05 6 18.05 6 16.1q0-3.75 2.525-6.275Q11.05 7.3 14.75 7.3q2.75 0 5.1 1.475Q22.2 10.25 24 13.05q1.95-2.9 4.225-4.325Q30.5 7.3 33.25 7.3q3.7 0 6.225 2.525Q42 12.35 42 16.1q0 1.95-.75 3.95t-2.65 4.5q-1.9 2.5-5.175 5.8t-8.275 7.9Zm0-2.05q4.9-4.5 8.075-7.7 3.175-3.2 5.05-5.575t2.6-4.225q.725-1.85.725-3.65 0-3.15-2.05-5.2-2.05-2.05-5.15-2.05-2.55 0-4.65 1.475-2.1 1.475-3.95 4.575h-1.3q-1.9-3.1-4-4.575t-4.6-1.475q-3.05 0-5.125 2.05T7.55 16.1q0 1.8.725 3.65Q9 21.6 10.85 24t5.05 5.575q3.2 3.175 8.1 7.675Zm0-14.2Z" />
              </svg>
            )}
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
    </CardStyled>
  );
}

const CardStyled = styled.article`
  margin: 1rem;
  max-width: 20rem;
  min-height: 15rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  border: 5px red solid;

  img {
    object-fit: cover;
    width: 8rem;
    /* padding: 20px; */
    height: 8rem;
  }
`;

const Bookmark = styled.button`
  border: none;
  background-color: transparent;
  border: 1px purple solid;
  font-size: 1.2rem;
  /* position: absolute;
  right: 10px;
  top: 10px; */
  svg {
    width: 20px;
    height: 20px;
  }
`;
const CameraBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  /* align-items: center; */

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px green solid;
  p {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0.8em 0;
  }
`;
