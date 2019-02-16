import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

export default ({ field, form, ...other }) => {
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
