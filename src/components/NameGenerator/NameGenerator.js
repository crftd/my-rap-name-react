import React, { Component } from 'react';
import styled from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import NameBox from '../NameBox/NameBox';
import NameForm from '../NameForm/NameForm';

const NameGeneratorWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff9f8f',
      main: '#ff6d61',
      dark: '#db413d',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffcd50',
      main: '#f99c17',
      dark: '#c06d00',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default class NameGenerator extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NameGeneratorWrapper>
          <NameForm />
          <NameBox />
        </NameGeneratorWrapper>
      </MuiThemeProvider>
    );
  }
}
