# Zeller Customers Application

This application displays Zeller customers categorized by their user type.

## Getting Started

### Prerequisites

1. Node > v14 and < v20
2. React v17 or above

### Running App in Development Mode

1. Create an `.env` file in the root directory. Add following env variables and replace with actual values related to AWS AppSync app.

```
REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT=<AWS_APPSYNC_GRAPHQL_ENDPOINT>
REACT_APP_AWS_APPSYNC_REGION=<AWS_APPSYNC_REGION>
REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE=<AWS_APPSYNC_AUTHENTICATION_TYPE>
REACT_APP_AWS_APPSYNC_API_KEY=<AWS_APPSYNC_API_KEY>

```

2. Run `npm install` to install the dependencies to the local node_modules folder.
3. Run `npm start` to run the app in the development mode and Open http://localhost:3000 to view it in the browser.

### Run Tests

1. Run `npm test` to execute the test runner in the interactive watch mode.
2. Run `npx cypress open` to execute end to end test

### Build App for Production

1. Run `npm run build` to build the app for production. The build files will be generated in the `build` folder.

### Approach and Functionality

This web application sends query request to GraphQL API hosted in AWS to retrieve the list of Zeller customers and displays the customers on UI based on their role(admin or manager). As the approach use react functional components with react hooks to ensure scalability and reusability.

Main functionalities of the project can be described as follows:

1. Re usable components of the project are found in the directory src/modules/common
2. UI components are developed in reusable manner using material UI framework
3. Api services like Apallo Client are found in the driectory src/service
4. Global state is managed by react context and response from graphql api is handled globally in src/contexts
5. Graphql queries which used to fetch users are can be found in src/queries
6. Constants and Types which are used in this project are defined in src/constants and src/types respectively
7. Unit tests are developed for user component to check events and functionality
