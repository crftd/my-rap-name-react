import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({ field, form, ...other }) => (
  <TextField
    style={{ width: '100%' }}
    label="Name"
    helperText={form.errors[field.name]}
    error={Boolean(form.errors[field.name])}
    {...field}
    {...other}
  />
);
