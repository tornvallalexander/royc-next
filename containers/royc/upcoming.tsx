import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { H5 } from "components/typography";
import { trpc } from "utils/trpc";

function Upcoming() {
  const res = trpc.useQuery(["dashboard.upcoming"]);
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Upcoming</H5>
      {res?.data?.upcoming?.map((fund, i) => (
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
