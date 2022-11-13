import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

test('Test the home page', () => {
    render(<App />);
    
    expect(screen.getByText(/Another Key Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
});

test('Test the cart default hidden position', () => {
    render(<App />);
    
    expect(screen.getByTestId('cart-popup')).toHaveStyle('none');
});