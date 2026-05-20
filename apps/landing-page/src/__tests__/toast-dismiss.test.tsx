import { render, screen, act } from "@testing-library/react";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";

describe("toast", () => {
  it("shows a close button", () => {
    render(<Toaster />);
    act(() => {
      toast({ description: "Hello" });
    });
    const close = screen.getByRole("button");
    expect(close).toBeVisible();
  });
});
