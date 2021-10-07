import React from "react";
import ResultCard from "./ResultCard";
import renderer from "react-test-renderer";
import {ReliefType, SupportType} from "../../types";

describe('ResultCard tests', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(<ResultCard
        id={1}
        name="some test name"
        supportType={SupportType.Grant}
        interestRate={0.01}
        dateAdded={"Wed, 10 Jun 2020 00:00:00 PST"}
        maxAwardAmount={10000}
        reliefType={ReliefType.COVID}
        deadline={"Mon, 15 Jun 2020 00:00:00 PST"}
        deadlineApplicable={"Yes"}
        smallBusiness={true}
        nonProfit={false}
        employs100OrFewer={false}
        employs500OrFewer={false}
        employs750OrFewer={false}
        employs750More={true}
        sanMateoCounty={false}
        contraCostaCounty={false}
        santaClaraCounty={false}
        sfCounty={false}
        alamedaCounty={true}
        hasInterest={true}
        doesNotHaveInterest={false}
        covid19={true}
        protestDamage={false}
        blackOwned={true}
        lgbtq={false}
        public={false}
        private={true}
        spanish={false}
        chinese={false}
        websiteUrl="https://google.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
 });
});
