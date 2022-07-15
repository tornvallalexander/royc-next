import React from "react";
import { LabeledValue } from "components/labeled-value";
import { Card } from "components/card";
import { H4 } from "components/typography";
import type { Metric } from "utils/types";
import { ThemeIcon } from "@mantine/core";
import { UserIcon } from "@heroicons/react/outline";

const subscriptions: Metric[] = [
  {
    name: "Indicated interest",
    value: 58,
  },
  {
    name: "Started processes",
    value: 41,
  },
  {
    name: "Indicated commitments",
    value: 2040203029,
  },
];

function SubscriptionProcess() {
  return (
    <Card>
      <H4 className="mb-4">
        Subscription process
      </H4>
      <div className="-mt-3">
        {subscriptions.map(sub => <Subscription key={sub.name} {...sub} />)}
      </div>
    </Card>
  )
}

function Subscription({ name, value }: Metric) {
  return (
    <div className="flex items-baseline space-x-3 space-y-3">
      <ThemeIcon className="bg-orange-100" size="xl">
        <UserIcon className="p-1 text-orange-500" />
      </ThemeIcon>
      <LabeledValue
        label={name}
        size="md"
        reverse
      >
        {value}
      </LabeledValue>
    </div>
  )
}

export { SubscriptionProcess };
