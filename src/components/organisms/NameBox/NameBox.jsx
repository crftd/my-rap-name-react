import React, { Component } from 'react';
import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

import rapper from '../../../assets/rapper.svg';

const NameBoxWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: center;
`;

class NameBox extends Component {
  render() {
    return (
      <NameBoxWrapper>
        <Chip
          style={{ height: 'auto' }}
          icon={
            <Avatar
              style={{
                marginTop: 2,
                marginBottom: 2,
                maxHeight: 32,
                maxWidth: 32,
              }}
              src={rapper}
              alt="Rapper image"
            />
          }
          label={this.props.rapName}
          color="secondary"
        />
      </NameBoxWrapper>
    );
  }
}

export default NameBox;
