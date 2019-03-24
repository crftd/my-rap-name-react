describe('Get rap name', () => {
  it('should give me my Rap Name when I fill the form', () => {
    // Arrange
    const expectedDefaultRapName = 'Lil pimp';
    const expectedRealName = 'Crash';
    cy.visit('https://crftd.github.io/my-rap-name-react/');
    cy.get('input[name="name"]').type(expectedRealName);

    // Act
    cy.get('form').submit();

    // Assert
    cy.get('[data-testid="rap-name"]').should('not.contain', expectedDefaultRapName);
  });
});
