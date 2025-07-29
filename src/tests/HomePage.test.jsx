import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { default as HomePage } from '../Components/HomePage';

describe("HomePage component", () => {
  it("renders homepage correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage></HomePage>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders title of the homepage", () => {
    render(
      <MemoryRouter>
        <HomePage></HomePage>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", {name: /Welcome to ABc/})).toBeInTheDocument();
  });

  it("does not display cart option in navbar", () => {
    render(
      <MemoryRouter>
        <HomePage></HomePage>
      </MemoryRouter>
    );
    expect(screen.queryByRole("link", {name: /Cart/})).not.toBeInTheDocument();
    expect(screen.getByRole("link", {name: /Home/})).toBeInTheDocument();
  });
});