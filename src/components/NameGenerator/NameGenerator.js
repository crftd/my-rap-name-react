import React, { Component } from 'react';
import styled from 'styled-components';
import NameBox from '../NameBox/NameBox';
import NameForm from '../NameForm/NameForm';

const NameGeneratorWrapper = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 20px;

  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

export default class NameGenerator extends Component {
  render() {
    return (
      <NameGeneratorWrapper>
        <NameForm />
        <NameBox />
      </NameGeneratorWrapper>
    );
  }
}
