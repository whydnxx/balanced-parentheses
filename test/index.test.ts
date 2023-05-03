import { Utility } from "../src/index";

describe("Solution", () => {
  it("should return true for balanced parentheses", () => {
    expect(Utility.isBalanced("()")).toBeTruthy();
    expect(Utility.isBalanced("()()")).toBeTruthy();
    expect(Utility.isBalanced("((()))")).toBeTruthy();
    expect(Utility.isBalanced("(())()")).toBeTruthy();
  });

  it("should return false for unbalanced parentheses", () => {
    expect(Utility.isBalanced(")(")).toBeFalsy();
    expect(Utility.isBalanced("())")).toBeFalsy();
    expect(Utility.isBalanced("((()")).toBeFalsy();
    expect(Utility.isBalanced(")()(")).toBeFalsy();
  });

  it("should return true for empty string", () => {
    expect(Utility.isBalanced("")).toBeTruthy();
  });
});
