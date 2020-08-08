import {formatInterestRate, formatDate} from "./formatHelpers";

describe("formatInterestRate", () => {
  describe("when the support type is a grant", () => {
    it("returns 'No Interest'", () => {
      expect(formatInterestRate(null, "Grant")).toEqual("No Interest");
    });
  });

  describe("when the support type is a loan", () => {
    describe("when the interest rate is a number", () => {
      it("returns the interest rate as a percentage and the word 'Interest' when the interest rate is nonzero", () => {
        expect(formatInterestRate(0.01, "Loan")).toEqual("1% Interest");
        expect(formatInterestRate(0.0375, "Loan")).toEqual("3.75% Interest");
      });

      it("returns'No Interest' when interest rate is 0", () => {
        expect(formatInterestRate(0, "Loan")).toEqual("No Interest");
      });
    });

    describe("when the interest rate is null", () => {
      it("returns 'Unknown", () => {
        expect(formatInterestRate(null, "Loan")).toEqual("Unknown");
      });
    });
  });
});

describe("formatDate", () => {
  it("returns a date with format M/D/YY", () => {
    const dateString = "Fri, 05 Jun 2020 00:00:00 GMT";

    // TODO: Set timezone in tests so result doesn't depend on local timezone
    expect(formatDate(dateString)).toEqual("6/4/20");
  });
});
