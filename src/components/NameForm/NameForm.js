import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import styled from 'styled-components';
import * as Yup from 'yup';

const FormGroup = styled.div`
  min-height: 70px;
  padding-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
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

const initialValues = {
  name: '',
  birthday: new Date(1993, 2, 4),
};

const nameFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .required('Required'),
});

const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        style={{ width: '100%' }}
        keyboard
        name={field.name}
        value={field.value}
        format="dd/MM/yyyy"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={(_, error) => form.setFieldError(field.name, error)}
        onChange={date => form.setFieldValue(field.name, date, true)}
        mask={value =>
          value
            ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
            : []
        }
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};

export default class NameForm extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Formik
          initialValues={initialValues}
          onSubmit={this.props.onSubmit}
          validationSchema={nameFormSchema}
        >
          <Form>
            <FormGroup>
              <Field name="name">
                {({ field, form, other }) => (
                  <TextField
                    style={{ width: '100%' }}
                    label="Name"
                    helperText={form.errors[field.name]}
                    error={Boolean(form.errors[field.name])}
                    {...field}
                    {...other}
                  />
                )}
              </Field>
            </FormGroup>
            <FormGroup>
              <Field
                label="Birthday"
                name="birthday"
                component={DatePickerField}
              />
            </FormGroup>
            <ButtonGroup>
              <Button type="submit" color="primary" variant="contained">
                Get my RAP name
              </Button>
            </ButtonGroup>
          </Form>
        </Formik>
      </MuiThemeProvider>
    );
  }
}