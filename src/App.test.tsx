import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test('Test the landing page', () => {
    render(
        <Router>
          <App />
        </Router>,
      )
    
    expect(screen.getByText(/Another Key Shop/i)).toBeInTheDocument();
});

test('Test empty cart (0 items)', () => {
    render(
        <Router>
          <App />
        </Router>,
      )
    
    expect(screen.getByText('0 ITEMS')).toBeInTheDocument();
});

