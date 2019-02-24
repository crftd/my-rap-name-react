import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '../ButtonGroup.jsx';

describe('[Snapshot] ButtonGroup', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<ButtonGroup />);
    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
