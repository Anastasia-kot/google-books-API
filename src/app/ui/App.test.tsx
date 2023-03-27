// import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

  test("start App with loader", () => {
    renderWithRouter(<App />);
    screen.debug();

    expect(screen.getByAltText(/loader/i)).toBeInTheDocument();
  });

 