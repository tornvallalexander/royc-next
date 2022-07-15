import React from "react";
import type { MetricTotal } from "utils/types";
import { Card } from "components/card";
import { H4, H5, Text } from "components/typography";
import { Progress } from "@mantine/core";
import { trpc } from "utils/trpc";

function ClientCapitalDistributions() {
  const res = trpc.useQuery(["dashboard.distributions"]);
  return (
    <Card>
      <H4 className="mb-4">
        Recent client capital distributions
      </H4>
      <div className="space-y-6">
        {res?.data?.distributions?.map(dist => <Distribution key={dist.name} {...dist} />)}
      </div>
    </Card>
  )
}

function Distribution<T>({ name, value, total }: MetricTotal) {
  return (
    <div className="flex justify-between items-center space-x-4">
      <Text className="rotate-90 shrink-0" variant="secondary">{name}</Text>
      <div className="w-full">
        <Progress
          size="xl"
          radius="xl"
          sections={[
            { value: +((value / total) * 100).toFixed(0), color: "cyan" },
          ]}
        />
      </div>
      <H5
        as="p"
        className="text-gray-500 shrink-0"
        variant="secondary"
      >
        {value}
      </H5>
    </div>
  )
}

export { ClientCapitalDistributions };