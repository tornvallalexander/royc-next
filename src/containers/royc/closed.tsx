import React from "react";
import { Card } from "components/card";
import { FundOverview } from "components/fund-overview";
import { LabeledValue } from "components/labeled-value";
import { H5 } from "components/typography";
import { currencyFormatter } from "utils/misc";
import { trpc } from "utils/trpc";
import { Badge } from "@mantine/core";

function Closed() {
  const res = trpc.useQuery(["dashboard.closed"]);
  return (
    <Card>
      <H5 className="text-green-900 font-medium mb-3">Closed</H5>
      {res?.data?.closed?.map((fund, i) => (
        <FundOverview key={fund.name} fund={fund} index={i}>
          <div className="flex justify-center items-center space-x-2 my-auto">
            <Badge
              className="hidden sm:inline-flex md:hidden lg:inline-flex"
              color="orange"
              variant="filled"
            >
              Info
            </Badge>
            <LabeledValue label="Total fund" position="end">
              {currencyFormatter(fund.total_fund)}
            </LabeledValue>
          </div>
        </FundOverview>
      ))}
    </Card>
  )
}

export { Closed };
