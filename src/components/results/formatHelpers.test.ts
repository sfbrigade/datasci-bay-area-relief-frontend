import {
  formatInterestRate,
  formatDate,
  formatAwardAmount,
  formatReliefType,
} from "./formatHelpers";

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

      it("returns 'No Interest' when interest rate is 0", () => {
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
    expect(formatDate(dateString)).toEqual("6/5/20");
  });
});

describe("formatAwardAmount", () => {
  it("returns a number in its respective US currency representation", () => {
    expect(formatAwardAmount(1)).toEqual("$1");
    expect(formatAwardAmount(1000)).toEqual("$1,000");
    expect(formatAwardAmount(1000000)).toEqual("$1,000,000");
  });

  it("returns 'Amount Unknown' when amount is null", () => {
    expect(formatAwardAmount(null)).toEqual("Amount Unknown");
  });
});

describe("formatReliefType", () => {
  it("returns the relief type followed by the word relief", () => {
    expect(formatReliefType("COVID")).toEqual("COVID relief");
    expect(formatReliefType("Protest Damage")).toEqual("Protest Damage relief");
  });
  it("returns both relief types followed by the word relief if the relief type is both", () => {
    expect(formatReliefType("Both")).toEqual("COVID and Protest Damage relief");
  });
});
