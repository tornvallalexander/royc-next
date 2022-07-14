import React from "react";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { Card } from "components/card";
import { trpc } from "utils/trpc";

function FourMetrics() {
  const res = trpc.useQuery(["dashboard.four-metrics"]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {res?.data?.metrics?.map(({ name, value }) => {
        return (
          <Card key={name}>
            <LabeledValue
              label={name}
              size="xl"
              position="left"
              reverse
            >
              {currencyFormatter(value, 0)}
            </LabeledValue>
          </Card>
        )
      })}
    </div>
  )
}

export { FourMetrics };