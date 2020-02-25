describe('Cypress', () => {
  it('visits the app, add, update, delete burger', async () => {
    const newBurgerName = 'Cypress burger';
    const updatedBurgerName = 'update burger';
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
    // here we have everything to be able to access catalog page
    cy.visit('http://localhost:3000/catalog');
    cy.contains('open builder').click();

    // fill form
    cy.get('[data-testid="burger-input"]').type(newBurgerName);
    cy.get('[data-testid="Bacon-more"]').click();
    cy.get('[data-testid="Salad-more"]').click();
    cy.get('[data-testid="Meat-more"]').click();
    cy.get('[data-testid="Salad-less"]').click();
    // here we have name and ingredients of burger
    cy.contains('save').click();
    cy.contains(newBurgerName);

    // need to test updating
    cy.get(`[data-testid="${newBurgerName}-update"]`).click();
    cy.get('[data-testid="burger-input"]').type(updatedBurgerName);
    cy.contains('edit').click();
    cy.contains(updatedBurgerName);
    cy.get(
      `[data-testid="${newBurgerName + updatedBurgerName}-delete"]`,
    ).click();
  });
});
