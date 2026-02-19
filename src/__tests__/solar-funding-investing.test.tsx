import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SolarFundingInvesting from "@/components/SolarFundingInvesting";

const { insertMock, toastMock } = vi.hoisted(() => ({
  insertMock: vi.fn(),
  toastMock: vi.fn(),
}));

vi.mock("@/lib/supabase", () => ({
  createClient: () => ({
    from: () => ({
      insert: insertMock,
    }),
  }),
}));

vi.mock("@/hooks/use-toast", () => ({
  toast: toastMock,
}));

describe("Solar Funding and Investing section", () => {
  beforeEach(() => {
    insertMock.mockResolvedValue({ error: null });
    insertMock.mockClear();
    toastMock.mockClear();
  });

  test("renders both investor CTAs", () => {
    render(<SolarFundingInvesting />);

    expect(screen.getByText(/future feature/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /show your interest as an investor/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add me to the waitlist/i })
    ).toBeInTheDocument();
  });

  test("submits managed service profile to investor_signups", async () => {
    const user = userEvent.setup();
    render(<SolarFundingInvesting />);

    await user.click(
      screen.getByRole("button", { name: /show your interest as an investor/i })
    );

    await user.type(screen.getByLabelText(/full name/i), "Ada Investor");
    await user.type(screen.getByLabelText(/^email$/i), "ada@example.com");
    await user.type(screen.getByLabelText(/organization/i), "Impact Capital");
    await user.type(screen.getByLabelText(/geographic area of interest/i), "West Africa");
    await user.type(screen.getByLabelText(/estimated ticket size/i), "$100,000");

    await user.click(screen.getByRole("button", { name: /submit investor profile/i }));

    expect(insertMock).toHaveBeenCalledWith(
      expect.objectContaining({
        signup_type: "managed_service",
        email: "ada@example.com",
        full_name: "Ada Investor",
        geographic_area: "West Africa",
      })
    );
  });

  test("submits waitlist email using the same table", async () => {
    const user = userEvent.setup();
    render(<SolarFundingInvesting />);

    await user.click(screen.getByRole("button", { name: /add me to the waitlist/i }));
    await user.type(screen.getByLabelText(/^email$/i), "bond@example.com");
    await user.click(screen.getByRole("button", { name: /join solar bond waitlist/i }));

    expect(insertMock).toHaveBeenCalledWith(
      expect.objectContaining({
        signup_type: "solar_bond_waitlist",
        email: "bond@example.com",
        notes: "Solar Bond waitlist",
      })
    );
  });
});
