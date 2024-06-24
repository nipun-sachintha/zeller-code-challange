import React from "react";
import { render, screen } from "@testing-library/react";
import User from "./User";

describe("User component", () => {
  it("renders user information", () => {
    const user = {
      userName: "John Doe",
      userType: "Admin",
    };

    render(<User {...user} />);

    expect(screen.getByText(user.userName)).toBeInTheDocument();
    expect(screen.getByText(user.userType)).toBeInTheDocument();
  });
});
