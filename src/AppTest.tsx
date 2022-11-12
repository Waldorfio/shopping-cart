import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Main App test", () => {

  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });


});