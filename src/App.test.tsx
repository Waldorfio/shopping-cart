import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Home from "./Home";

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

test('Test image (github logo)', () => {
    render(
        <Router>
          <App />
        </Router>,
      )
    
    expect(screen.getByAltText('github-logo')).toHaveAttribute('src', 'github-logo.png')
});

test('Test image (game banner)', () => {
    render(
        <Router>
            <App />
                <Home />
        </Router>,
      )
    
    expect(screen.getByAltText('game-banner')).toHaveAttribute('src', 'frontshop.PNG')
});

