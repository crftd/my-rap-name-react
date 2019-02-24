import React from 'react';
import { shallow } from 'enzyme';
import NameForm from '../NameForm.jsx';

describe('[Snapshot] NameForm', () => {
  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<NameForm />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });
});
