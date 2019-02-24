import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from 'material-ui-pickers';
import DatePickerField from '../DatePickerField.jsx';

describe('DatePickerField', () => {
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

  it('should set date value on change', () => {
    // Arrange
    const mockForm = {
      setFieldValue: jest.fn(),
      errors: {},
    };

    const expectedFieldName = 'Birthday';
    const expectedField = {
      name: expectedFieldName,
    };

    const expectedDate = '01/01/2000';
    const wrapper = shallow(<DatePickerField form={mockForm} field={expectedField} />);
    const DatePickerNode = wrapper.find(DatePicker);

    // Act
    DatePickerNode.simulate('change', expectedDate);

    // Assert
    expect(mockForm.setFieldValue).toHaveBeenCalledWith(expectedFieldName, expectedDate, true);
  });

  it('should set error on error', () => {
    // Arrange
    const mockForm = {
      setFieldError: jest.fn(),
      errors: {},
    };
    const expectedFieldName = 'Birthday';
    const expectedField = {
      name: expectedFieldName,
    };
    const expectedErrorMessage = 'Oops...';
    const wrapper = shallow(<DatePickerField form={mockForm} field={expectedField} />);
    const DatePickerNode = wrapper.find(DatePicker);

    // Act
    DatePickerNode.simulate('error', new Error(expectedErrorMessage), expectedErrorMessage);

    // Assert
    expect(mockForm.setFieldError).toHaveBeenCalledWith(expectedFieldName, expectedErrorMessage);
  });
});
