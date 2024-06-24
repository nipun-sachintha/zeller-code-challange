import React from "react";
import { render, screen } from "@testing-library/react";
import UserIcon from "./UserIcon";

it("renders the first character passed as a prop", () => {
  render(<UserIcon firstChar="A" />);
  const userIconElement = screen.getByTestId("user-icon");
  expect(userIconElement.textContent).toBe("A");
});
