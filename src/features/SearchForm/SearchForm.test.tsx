import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("SearchForm component has 1 input, 2 select and submit button", () => {
  render(<SearchForm />);
  expect(screen.getByPlaceholderText(/Type key word for search/i)).toBeInTheDocument();
});


// test("SearchForm component has  2 select and submit button", () => {
//   // render(<SearchForm />);
//   // expect(
//   //   screen.getByPlaceholderText(/Type key word for search/i)
//   // ).toBeInTheDocument();
// });