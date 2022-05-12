import { render, screen } from "../test-utils/testing-library-utils";
import { ItemCard } from "../ItemCard";

test("Add to Basket button displayed in Quantity is 0", () => {
  render(<ItemCard name="" price={0} description="" image="" quantity={0} />);

  const addToBasketBtn = screen.getByRole("button", { name: /add to basket/i });
  expect(addToBasketBtn).toBeInTheDocument();
});

test("Quantity buttons displayed if quantity is greater than 0", () => {
  render(<ItemCard name="" price={0} description="" image="" quantity={1} />);

  const decrementBtn = screen.getByRole("button", { name: "decrement" });
  expect(decrementBtn).toBeInTheDocument();

  const incrementBtn = screen.getByRole("button", { name: "increment" });
  expect(incrementBtn).toBeInTheDocument();

  const addToBasketBtnDisappeared = screen.queryByRole("button", {
    name: /add to basket/i,
  });
  expect(addToBasketBtnDisappeared).not.toBeInTheDocument();
});

