import styled from 'styled-components';
import {GiPhotoCamera} from 'react-icons/gi';

export default function Header() {
  return (
    <DigitalStyled>
      <GiPhotoCamera />
      Digital Potrait
    </DigitalStyled>
  );
}

const DigitalStyled = styled.h1`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: white;
`;
