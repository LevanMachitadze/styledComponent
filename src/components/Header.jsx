import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: cyan;
  color: yellow;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
};

export default Header;
