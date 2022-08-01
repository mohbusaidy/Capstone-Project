import React from 'react';
import styled from 'styled-components';

export default function Favorites(props) {
  const {favoriteItems, onAdd} = props;
  return (
    <StyledFooter>
      <h3>Favorites</h3>
      <div>{favoriteItems.length === 0 && <div> Favorites empty</div>}</div>
      {favoriteItems.map(item => (
        <div key={item.id}>
          <div>{item.name}</div>
        </div>
      ))}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  border: solid green;
`;
