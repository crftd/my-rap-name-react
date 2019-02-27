import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  background: url(${props => props.backgroundUrl}) repeat 50% 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainWrapper = styled.main`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

export default ({ background, children }) => (
  <Background backgroundUrl={background}>
    <FlexContainer>
      <MainWrapper>{children}</MainWrapper>
    </FlexContainer>
  </Background>
);
