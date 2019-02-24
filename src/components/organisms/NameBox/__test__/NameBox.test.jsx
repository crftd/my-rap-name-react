import React from 'react';
import { shallow } from 'enzyme';
import NameBox from '../NameBox.jsx';

describe('[Snapshot] NameBox', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<NameBox />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
