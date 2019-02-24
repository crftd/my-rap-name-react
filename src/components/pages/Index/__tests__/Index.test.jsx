import React from 'react';
import { shallow } from 'enzyme';
import Index from '../Index.jsx';

describe('[Snapshot] Index', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<Index />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
