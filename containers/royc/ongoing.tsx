import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import type { Fund } from "utils/types";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { H5 } from "components/typography";

const ongoing: Fund[] = [
  {
    name: "Advent International",
    type: "Private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "https://via.placeholder.com/150",
  },
  {
    name: "Advent International GPE X",
    type: "Private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "https://via.placeholder.com/150",
  },
]

function Ongoing() {
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Ongoing</H5>
      {ongoing.map((fund, i) => (
        <FundOverview key={fund.name} fund={fund} index={i}>
          <div className="space-y-1">
            <LabeledValue label="Total fund">
              {currencyFormatter(fund.total_fund)}
            </LabeledValue>
            <LabeledValue label="Unallocated">
              {currencyFormatter(fund.unallocated)}
            </LabeledValue>
          </div>
        </FundOverview>
      ))}
    </Card>
  )
}

export { Ongoing };
