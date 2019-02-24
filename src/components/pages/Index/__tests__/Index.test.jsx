import React from 'react';
import { shallow } from 'enzyme';

describe('Index', () => {
  const expectedRapName = 'SQWOZ BAB';
  const mockRapNameService = {
    getRapName: () => expectedRapName,
  };
  jest.mock('../../../../services/rap-name', () => mockRapNameService);
  const Index = require('../Index.jsx').default;

  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<Index />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });

  it('should set rapName value to the state', () => {
    // Arrange
    const indexComponent = shallow(<Index />);

    // Act
    indexComponent.instance().handleSubmit();

    // Assert
    expect(indexComponent.state('rapName')).toEqual(expectedRapName);
  });
});
