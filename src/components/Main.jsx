import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 20px;
  text-align: center;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const Main = () => {
  return (
    <MainContainer>
      <p>Main Content</p>
    </MainContainer>
  );
};

export default Main;
