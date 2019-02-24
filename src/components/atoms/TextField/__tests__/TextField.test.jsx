import React from 'react';
import renderer from 'react-test-renderer';

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
    const actualTree = renderer.create(<TextField field={expectedField} form={expectedForm} />).toJSON();

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
