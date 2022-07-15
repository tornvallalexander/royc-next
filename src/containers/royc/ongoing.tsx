import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import { LabeledValue } from "components/labeled-value";
import { H5 } from "components/typography";
import { currencyFormatter } from "utils/misc";
import { trpc } from "utils/trpc";

function Ongoing() {
  const res = trpc.useQuery(["dashboard.ongoing"]);
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Ongoing</H5>
      {res?.data?.ongoing?.map((fund, i) => (
        <FundOverview key={fund.name} fund={fund} index={i}>
          <div className="space-y-1">
            <LabeledValue label="Total fund" position="end">
              {currencyFormatter(fund.total_fund)}
            </LabeledValue>
            <LabeledValue label="Unallocated" position="end">
              {currencyFormatter(fund.unallocated)}
            </LabeledValue>
          </div>
        </FundOverview>
      ))}
    </Card>
  )
}

export { Ongoing };
