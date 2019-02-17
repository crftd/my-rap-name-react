import rapName, {
  getRapName,
  getRandomInt,
  functions,
  RAP_NAMES,
} from '../rap-name';

describe('rap-name', () => {
  describe('getRapName', () => {
    const expectedRandomInt = 4;
    const expectedRapName = RAP_NAMES[expectedRandomInt];
    beforeAll(() => {
      functions.getRandomInt = () => expectedRandomInt;
    });

    test('default', () => {
      // Arrange

      // Act
      const actualRapName = rapName();

      // Assert
      expect(actualRapName).toEqual(expectedRapName);
    });

    test('getRapName', () => {
      // Arrange

      // Act
      const actualRapName = getRapName();

      // Assert
      expect(actualRapName).toEqual(expectedRapName);
    });
  });

  describe('getRandomInt', () => {
    test('0', () => {
      // Arrange
      const expectedInt = 0;
      const expectedMaxInt = 5;
      const expectedRandomNumber = 0;
      const mockMath = Object.create(global.Math);
      mockMath.random = jest.fn(() => expectedRandomNumber);
      global.Math = mockMath;

      // Act
      const actualInt = getRandomInt(expectedMaxInt);

      // Assert
      expect(actualInt).toEqual(expectedInt);
    });

    test('max', () => {
      // Arrange
      const expectedInt = 7;
      const expectedMaxInt = 7;
      const expectedRandomNumber = 1;
      const mockMath = Object.create(global.Math);
      mockMath.random = jest.fn(() => expectedRandomNumber);
      global.Math = mockMath;

      // Act
      const actualInt = getRandomInt(expectedMaxInt);

      // Assert
      expect(actualInt).toEqual(expectedInt);
    });
  });
});
