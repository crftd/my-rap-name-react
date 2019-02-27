import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup, act, fireEvent, waitForElement } from 'react-testing-library';

import 'jest-dom/extend-expect';

describe('Index', () => {
  const expectedRapName = 'SQWOZ BAB';
  const mockRapNameService = {
    getRapName: () => expectedRapName,
  };
  jest.mock('../../../../services/rap-name', () => mockRapNameService);
  const Index = require('../Index.jsx').default;

  afterEach(cleanup);

  it('should render', () => {
    // Arrange

    // Act
    const actualTree = shallow(<Index />);

    // Assert
    expect(actualTree).toMatchSnapshot();
  });

  it('should set rap name on successful submit', async () => {
    // Arrange
    const expectedRealName = 'Pimp';
    const IndexComponent = render(<Index />);
    fireEvent.change(IndexComponent.container.querySelector('input[name="name"]'), {
      target: { value: expectedRealName },
    });

    // Act
    act(() => {
      fireEvent.submit(IndexComponent.container.querySelector('form'));
    });

    // Assert
    const actualRapNameComponent = await waitForElement(() => IndexComponent.getByText(expectedRapName));
    expect(actualRapNameComponent).toHaveTextContent(expectedRapName);
  });
});
