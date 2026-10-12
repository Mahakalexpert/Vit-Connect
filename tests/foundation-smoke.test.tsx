import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";
import { AppShell } from "@/components/layout/app-shell";

describe("Milestone 1 foundation smoke", () => {
  it("renders landing experience with explicit prototype messaging", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "VIT Pune Campus Hub - Foundation Build" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Development-only states")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Sign in prototype/i })).toHaveAttribute(
      "href",
      "/sign-in",
    );
  });

  it("renders authenticated shell navigation and main content", () => {
    render(
      <AppShell currentPath="/app/dashboard">
        <div>Dashboard content</div>
      </AppShell>,
    );

    expect(screen.getByRole("navigation", { name: "Sidebar" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Authenticated Shell/i })).toBeInTheDocument();
    expect(screen.getByText("Dashboard content")).toBeInTheDocument();
  });
});
