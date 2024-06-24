import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";
import { errorMocks, mockData } from "./test-data/mockData";

test("renders app with admin type checked", async () => {
  render(
    <MockedProvider mocks={mockData} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(screen.getByText(/user types/i)).toBeInTheDocument();
  expect(
    screen.getByRole("radio", {
      name: /admin/i,
    })
  ).toBeChecked();
  expect(await screen.findByText(/admin user/i)).toBeInTheDocument();
  expect(screen.getByText(/admin users/i)).toBeInTheDocument();
});

test("render users based on the user type", async () => {
  render(
    <MockedProvider mocks={mockData} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const managerRadioBtn = screen.getByRole("radio", {
    name: /manager/i,
  });
  expect(await screen.findByText(/admin user/i)).toBeInTheDocument();
  expect(managerRadioBtn).not.toBeChecked();
  fireEvent.click(managerRadioBtn);
  expect(await screen.findByText(/manager user/i)).toBeInTheDocument();
  expect(screen.getByText(/manager users/i)).toBeInTheDocument();
  expect(managerRadioBtn).toBeChecked();
});

test("displays data fetching error", async () => {
  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(
    await screen.findByText(
      /We encountered an issue\. please try again later\./i
    )
  ).toBeInTheDocument();
});
