import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { DonateChunk, DonateToUsButton } from "./Donate.styles";
import React from "react";

export const DonateCard: React.FC = () => {
  return (
    <DonateChunk>
      <Typography
        variant="body2"
      >
        {/*<span>Please click Donate on the next page, </span>*/}
        {/*<span>navigate through the donation instructions, </span>*/}
        {/*<span>select Code For San Francisco, </span>*/}
        {/*<span>and under what inspired you include: "SF Bay Relief".</span>*/}
      </Typography>


    </DonateChunk>
  )
}