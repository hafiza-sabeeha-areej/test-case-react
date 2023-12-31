import Counter from "./Counter";
import { render } from "@testing-library/react";

describe("Counter", () => {
  it("counter displays correct initial Count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = parseInt(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
});
