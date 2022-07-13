import React from "react";
import type { PercentageMetric } from "utils/types";
import { Card } from "components/card";
import { LabeledValue } from "components/labeled-value";
import { H4 } from "components/typography";
import { StyledRingProgress } from "components/styled-ring-progress";

const percentageMetrics: PercentageMetric[] = [
  {
    name: "Unfunded capital calls",
    percentage: 0.59,
    first: {
      name: "Clients",
      value: 43,
      total: 61,
    },
    second: {
      name: "Funds",
      value: 43,
      total: 61,
    }
  },
  {
    name: "Unfunded capital calls",
    percentage: 0.14,
    first: {
      name: "Clients",
      value: 43,
      total: 61,
    },
    second: {
      name: "Funds",
      value: 43,
      total: 61,
    }
  }
]

function PercentageMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {percentageMetrics.map(metric => {
        const {
          name,
          percentage,
          first,
          second,
        } = metric;

        return (
          <Card key={name}>
            <H4>
              {name}
            </H4>
            <StyledRingProgress progress={+(percentage * 100).toFixed(0)} />
            <div className="flex justify-between">
              <LabeledValue label={first.name} position="left" size="lg">
                {first.value}/{first.total}
              </LabeledValue>
              <LabeledValue label={second.name} size="lg">
                {second.value}
              </LabeledValue>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export { PercentageMetrics };