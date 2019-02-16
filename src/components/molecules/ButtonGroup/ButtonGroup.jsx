import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class ButtonGroup extends React.Component {
  render() {
    return <ButtonGroupWrapper>{this.props.children}</ButtonGroupWrapper>;
  }
}
