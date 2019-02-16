import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

import FormGroup from '../../molecules/FormGroup/FormGroup.jsx';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup.jsx';
import DatePickerField from '../../atoms/DatePickerField/DatePickerField.jsx';
import TextField from '../../atoms/TextField/TextField.jsx';

const initialValues = {
  name: '',
  birthday: new Date(1993, 2, 4),
};

const nameFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .required('Required'),
});

export default class NameForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={nameFormSchema}
      >
        <Form>
          <FormGroup>
            <Field name="name" component={TextField} />
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
    );
  }
}
