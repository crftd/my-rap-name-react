import React from 'react';
import { shallow } from 'enzyme';
import Singleton from '../Singleton.jsx';

describe('[Snapshot] Singleton', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<Singleton />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
