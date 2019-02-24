import React from 'react';
import { shallow } from 'enzyme';
import DatePickerField from '../DatePickerField.jsx';

describe('[Snapshot] DatePickerField', () => {
  it('should render', () => {
    // Arrange
    const expectedForm = {
      errors: {},
    };
    const expectedField = {
      name: 'Birthday',
    };

    // Act
    const actualTree = shallow(<DatePickerField form={expectedForm} field={expectedField} />);
    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
