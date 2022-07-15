import React from "react";
import { trpc } from "utils/trpc";
import { Card } from "components/card";
import { H4 } from "components/typography";
import { StyledRingProgress } from "components/styled-ring-progress";
import { LabeledValue } from "components/labeled-value";
import { currencyFormatter } from "utils/misc";

function ClientTargetAllocations() {
  const res = trpc.useQuery(["dashboard.client-target-allocations"]);

  if (typeof res?.data?.client_target_allocations !== "object") {
    return null;
  }

  const {
    percentage,
    client_with_target: client,
    unallocated_capital: unalloc,
  } = res.data.client_target_allocations;

  return (
    <Card className="flex flex-col">
      <H4>
        Client target allocations committed
      </H4>
      <div className="lg:mt-auto">
        <StyledRingProgress progress={+(percentage * 100).toFixed(0)} />
        <div className="flex justify-between">
          <LabeledValue label="Client with target" size="lg" reverse>
            {client?.value}/{client?.total}
          </LabeledValue>
          <LabeledValue label="Unallocated capital" size="lg" position="end" reverse>
            {currencyFormatter(unalloc?.value, 0)}
          </LabeledValue>
        </div>
      </div>
    </Card>
  )
}

export { ClientTargetAllocations };