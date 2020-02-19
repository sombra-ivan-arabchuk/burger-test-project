describe('Cypress', () => {
  it('visits the app', () => {
    Cypress.Commands.add('login', () => {
      localStorage.setItem('token', 'asdfasdf');
      const ingredients = [
        {
          key: 'salad',
          detailedInfo: {
            calories: 420,
            sodium: 1640,
            vitaminA: 300,
            vitaminC: 240,
          },
        },
        {
          key: 'meat',
          detailedInfo: {
            calories: 63.93,
            sodium: 19.89,
            vitaminA: 0,
            vitaminC: 0,
          },
        },
        {
          key: 'cheese',
          detailedInfo: {
            calories: 113.12,
            sodium: 182.84,
            vitaminA: 6.96,
            vitaminC: 0,
          },
        },
        {
          key: 'bacon',
          detailedInfo: {
            calories: 44.39,
            sodium: 177.63,
            vitaminA: 0,
            vitaminC: 0,
          },
        },
      ];

      localStorage.setItem('ingredients', JSON.stringify(ingredients));
      localStorage.setItem(
        'user',
        JSON.stringify({ email: 'test@gmail.com', name: 'IVan' }),
      );
    });
    cy.visit('http://localhost:3000');
    cy.login();
    cy.reload();
    cy.visit('http://localhost:3000/catalog');
    cy.contains('open builder').click();
    cy.contains('more').click();
    cy.contains('more').click();
    cy.contains('more').click();
    cy.contains('more').click();
    cy.contains('save').click();
    cy.contains('close').click();
  });
});
