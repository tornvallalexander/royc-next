import React from "react";
import type { Metric } from "utils/types";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";
import { Card } from "components/card";

const metrics: Metric[] = [
  {
    name: "Committed capital",
    value: 1295000000,
  },
  {
    name: "Paid-in capital",
    value: 542000000,
  },
  {
    name: "Undrawn capital",
    value: 759000000,
  },
  {
    name: "Investment products",
    value: 43,
  },
];

function FourMetrics() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map(({ name, value }) => {
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