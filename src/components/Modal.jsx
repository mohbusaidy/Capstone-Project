import styled from 'styled-components';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoMdHeart} from 'react-icons/io';

export function Modal({open, onClose, onBookmark, product}) {
  return (
    open && (
      <StyledModal>
        <CardStyled>
          <CloseButton
            onClick={() => {
              onClose();
            }}
          >
            X
          </CloseButton>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name}></img>
          <BoxModal>
            <div>${product.price}</div>

            <Bookmark Click={() => onBookmark(product.id)}>
              {product.bookmarked ? <IoMdHeart /> : <IoIosHeartEmpty />}
            </Bookmark>
          </BoxModal>
          <Description>{product.description}</Description>
        </CardStyled>
      </StyledModal>
    )
  );
}

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #262626;
  color: white;
  overflow-y: scroll;
  animation: animatefront 0.9s;
  @keyframes animatefront {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const CardStyled = styled.article`
  margin: 1rem;
  width: 20rem;
  height: 20rem;
  padding: 1.5rem;
  text-align: left;
  color: black;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  position: relative;
  background-color: white;

  img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    margin: 25px;
    align-self: center;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;
const BoxModal = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
const Bookmark = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  bottom: 1px;
`;
export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 50px;
  &:hover {
    background: red;
  }
`;

const Description = styled.p`
  position: absolute;
  left: 3px;
  color: white;
`;
