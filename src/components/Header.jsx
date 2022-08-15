import styled from 'styled-components';

export default function Header() {
  return <DigitalStyled>Digital Portrait</DigitalStyled>;
}

const DigitalStyled = styled.h1`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
