import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title i.e. Coronavirus casses */}
        <Typography className="infoBox__title" color="tetSecondary">
          {title}
        </Typography>
        {/* e.g. 148K number of cases */}
        <h2 className="infoBox__cases">{cases}</h2>

        <Typography className="infoBox__total" color="tetSecondary">
          {/* 1.2M Total */}
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
