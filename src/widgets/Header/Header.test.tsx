import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";


const renderWithRouter = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

test("Header components has heading text", () => {
  renderWithRouter(<Header />);
  expect(screen.getByAltText(/Search for books/i)).toBeInTheDocument();
});
