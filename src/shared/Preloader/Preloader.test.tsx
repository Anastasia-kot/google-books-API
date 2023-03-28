import { render, screen } from "@testing-library/react";
import Preloader from "./Preloader";

test("start App with loader", () => {
  render(<Preloader />);
  expect(screen.getByAltText(/loader/i)).toBeInTheDocument();
});
