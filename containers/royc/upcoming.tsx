import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import type { Fund } from "utils/types";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { H5 } from "components/typography";

const upcoming: Fund[] = [
  {
    name: "Insight Partners XII",
    type: "Growth Equity",
    total_fund: 250000000,
    unallocated: 44600000,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
  },
  {
    name: "Brookfield Strategic Real Estate Partners VI",
    type: "Real Estate private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
  },
  {
    name: "Advent International",
    type: "Private Equity",
    total_fund: 200000000,
    unallocated: 44600000,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
  },
]

function Upcoming() {
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Upcoming</H5>
      {upcoming.map((fund, i) => (
        <FundOverview key={fund.name} fund={fund} index={i}>
          <div className="space-y-1">
            <LabeledValue label="Total fund">
              {currencyFormatter(fund.total_fund)}
            </LabeledValue>
          </div>
        </FundOverview>
      ))}
    </Card>
  )
}

export { Upcoming };
