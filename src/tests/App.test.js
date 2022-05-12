import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Shopping Basket button toggles shopping basket", () => {
  render(<App />);
  const shoppingBasketBtn = screen.getByRole("button", {
    name: /shopping basket/i,
  });
  const shoppingBasket = screen.getByTestId("shopping basket");
  const shoppingBasketBackground = screen.getByTestId(
    "shopping basket background"
  );

  expect(shoppingBasket).not.toHaveClass("show-shopping-basket");
  expect(shoppingBasketBackground).not.toHaveClass(
    "show-shopping-basket-background"
  );

  userEvent.click(shoppingBasketBtn);

  expect(shoppingBasket).toHaveClass("show-shopping-basket");
  expect(shoppingBasketBackground).toHaveClass(
    "show-shopping-basket-background"
  );

  userEvent.click(shoppingBasketBtn);

  expect(shoppingBasket).not.toHaveClass("show-shopping-basket");
  expect(shoppingBasketBackground).not.toHaveClass(
    "show-shopping-basket-background"
  );
});
