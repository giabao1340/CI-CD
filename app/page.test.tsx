// app/page.test.tsx
import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("@/pages/index.module.css", () => ({}));

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Welcome to Next.js!",
  );
});

it("Have Create Next App in documentation", async () => {
  render(<Page />);
  expect(await screen.findByText("Create Next App")).toBeInTheDocument();
});
