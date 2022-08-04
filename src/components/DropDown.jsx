import {useState} from 'react';
import styled from 'styled-components';

export const DropDown = () => {
  const [state, setState] = useState(false);
  const showDropdown = () => {
    setState(true);
  };
  const hideDropdown = () => {
    setState(false);
  };
  return (
    <StyledDrowpdown onClick={showDropdown} onMouseLeave={hideDropdown}>
      Filter for...
      {state ? (
        <ul onClick={showDropdown}>
          <li>Camera Bodys</li>
          <li>Lenses</li>
        </ul>
      ) : null}
    </StyledDrowpdown>
  );
};

const StyledDrowpdown = styled.div`
  background-color: lightgray;
  color: black;
  display: flex;
  justify-content: flex-start;
  width: 20rem;
`;
