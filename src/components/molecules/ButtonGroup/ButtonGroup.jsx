import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ children }) => <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
