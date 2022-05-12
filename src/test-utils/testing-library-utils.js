import { render } from "@testing-library/react";
import { AppProvider } from "../context";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: AppProvider, ...options });

// re-export everything
export * from "@testing-library/react";

//override render method
export { renderWithContext as render };
