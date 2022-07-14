import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import type { Fund } from "utils/types";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { H5 } from "components/typography";
import { Badge } from "@mantine/core";

const closed: Fund[] = [
  {
    name: "Insight Partners XII",
    type: "Growth Equity",
    total_fund: 250000000,
    unallocated: 44600000,
    img: "",
  },
  {
    name: "Brookfield Strategic Real Estate Partners VI",
    type: "Real Estate private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "",
  },
  {
    name: "Advent International",
    type: "Private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "",
  },
]

function Closed() {
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Closed</H5>
      {closed.map((fund, i) => (
        <FundOverview key={fund.name} fund={fund} index={i}>
          <div className="flex justify-center items-center space-x-2">
            <Badge color="orange" variant="filled">
              Info
            </Badge>
            <LabeledValue label="Total fund">
              {currencyFormatter(fund.total_fund)}
            </LabeledValue>
          </div>
        </FundOverview>
      ))}
    </Card>
  )
}

export { Closed };
