import React from 'react';
import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

import rapper from '../../../assets/rapper.svg';

const NameBoxWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: center;
`;

export default ({ rapName }) => (
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
      label={rapName}
      color="secondary"
    />
  </NameBoxWrapper>
);
