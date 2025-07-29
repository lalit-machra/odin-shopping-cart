import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { default as Cart } from '../Components/Cart';

describe("Cart component", () => {
  it("does not display cart option in navbar", () => {
    render(
      <MemoryRouter>
        <Cart></Cart>
      </MemoryRouter>
    );

    expect(screen.queryByRole("link", {name: /Cart/})).not.toBeInTheDocument();
  });

  it("displays empty cart message when 0 items are in Cart", () => {
    render(
      <MemoryRouter>
        <Cart cartItems={[]}></Cart>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", {name: /cart is empty/})).toBeInTheDocument();
    expect(screen.queryByRole("button", {name: /Pay/})).not.toBeInTheDocument();
  });

  it("displays summary of items when cart is not empty", () => {
    render(
      <MemoryRouter>
        <Cart cartItems={[
          {name: 'Mens Cotton Jacket', price: 55.99, quantity: 2, value: 111.98},
          {name: 'Mens Casual Slim Fit', price: 15.99, quantity: 1, value: 15.99},
          {name: 'Solid Gold Petite Micropave', price: 168, quantity: 3, value: 504}
        ]}>      
        </Cart>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", {name: /Summary/})).toBeInTheDocument();
    expect(screen.getByRole("cell", {name: 'Mens Cotton Jacket'})).toBeInTheDocument();
    expect(screen.getByRole("cell", {name: 'Mens Casual Slim Fit'})).toBeInTheDocument();
    expect(screen.getByRole("cell", {name: 'Solid Gold Petite Micropave'})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /631.97/})).toBeInTheDocument();
  });
});
