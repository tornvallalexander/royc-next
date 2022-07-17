import React from "react";
import { trpc } from "utils/trpc";
import { Card } from "components/card";
import { H4 } from "components/typography";
import { StyledRingProgress } from "components/styled-ring-progress";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";

function UnfundedCapitalCalls() {
  const res = trpc.useQuery(["client.unfunded-capital-calls"]);

  if (typeof res?.data?.unfunded_capital_calls !== "object") {
    return null;
  }

  const {
    percentage,
    clients,
    unfunded_capital: unfunded,
  } = res.data.unfunded_capital_calls;

  return (
    <Card className="flex flex-col">
      <H4>
        Unfunded capital calls
      </H4>
      <div className="lg:mt-auto">
        <StyledRingProgress progress={+(percentage * 100).toFixed(0)} />
        <div className="flex justify-between">
          <LabeledValue label="Clients" size="lg" reverse>
            {clients?.value}/{clients?.total}
          </LabeledValue>
          <LabeledValue label="Unfunded capital" size="lg" position="end" reverse>
            {currencyFormatter(unfunded?.value, 0)}
          </LabeledValue>
        </div>
      </div>
    </Card>
  )
}

export { UnfundedCapitalCalls };