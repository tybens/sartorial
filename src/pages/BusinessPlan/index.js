import React from "react";
import businessPlan from "assets/businessplan.pdf";
import { Typography } from '@material-ui/core'

const BusinessPlan = () => {

  return (
    <div style={{ minHeight: "60vh", display: "flex", justifyContent: "center" }}>
      <a href={businessPlan}>
        <Typography variant="h2">Business Plan</Typography>
      </a>
    </div>
  );
};

export default BusinessPlan;
