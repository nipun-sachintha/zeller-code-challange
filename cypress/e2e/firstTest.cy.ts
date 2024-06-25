
const listZellerCustomersQuery = `
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        email
        id
        name
        role
      }
    }
  }
`;

const mockData = {
  data: {
    listZellerCustomers: {
      "__typename": "TestCustomerFetch",
      "items": [
        {
          "__typename": "TestCustomer",
          "id": 'admin1',
          "email": 'admin@example.com',
          "name": 'Admin User',
          "role": 'ADMIN',
        },
        {
          "__typename": "TestCustomer",
          "id": "manager1",
          "email": "manager@gmail.com",
          "name": "Manager User",
          "role": "MANAGER"
        },
      ]
    }
  }
};

describe('End to end test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('intercepts and mocks a GraphQL API call', () => {
    cy.contains('User Types').should('exist');
    cy.get('input[type="radio"][value="Admin"]').should('be.checked');
    cy.intercept('POST', '/graphql', (req) => {
      if (req.body.query.includes('query ListZellerCustomers')) {
        req.reply({
          statusCode: 200,
          body: mockData,
        });
      }
    }).as('listZellerCustomers');
    cy.wait('@listZellerCustomers').its('response.body.data.listZellerCustomers.items').should('have.length', 2);
    cy.contains('Admin User').should('be.visible');
    cy.get('input[type="radio"][value="Manager"]').click();
    cy.contains('Manager User').should('be.visible');
  });
});
