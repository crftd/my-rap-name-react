import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from '../FormGroup.jsx';

describe('[Snapshot] FormGroup', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<FormGroup />);
    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
