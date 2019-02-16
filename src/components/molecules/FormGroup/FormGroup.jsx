import React from 'react';
import styled from 'styled-components';

const FormGroupWrapper = styled.div`
  min-height: 70px;
  padding-bottom: 10px;
`;

export default class FormGroup extends React.Component {
  render() {
    return <FormGroupWrapper>{this.props.children}</FormGroupWrapper>;
  }
}
