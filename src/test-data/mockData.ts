import { ListZellerCustomers } from "../queries/user-queries";

export const mockData = [
  {
    request: {
      query: ListZellerCustomers,
    },
    result: {
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
    }
  }
];

export const errorMocks = [
  {
    request: {
      query: ListZellerCustomers,
    },
    error: new Error("An error occurred"),
  }
];