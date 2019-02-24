import React from 'react';
import { shallow } from 'enzyme';

import TextField from '../TextField.jsx';

describe('[Snapshot] TextField', () => {
  it('should render', () => {
    // Arrange
    const expectedForm = {
      errors: {},
    };
    const expectedField = {
      onChange: () => {},
      onBlur: () => {},
      name: '',
      value: '',
    };

    // Act
    const actualTree = shallow(<TextField field={expectedField} form={expectedForm} />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
