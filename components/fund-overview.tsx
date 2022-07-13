import React from "react";
import clsx from "clsx";
import { H6, Text } from "components/typography";
import type { Fund } from "utils/types";

type Props = {
  fund: Fund;
  index: number;
  children: React.ReactNode;
}

function FundOverview({ fund, index, children }: Props) {
  const {
    name,
    type,
    img,
  } = fund;
  return (
    <div key={name} className={clsx(
      "rounded-xl p-4 flex justify-between",
      {
        "bg-slate-100": index % 2 === 0,
      }
    )}>
      <div>
        <H6 className="text-gray-700">
          {name}
        </H6>
        <Text className="text-xs" variant="secondary">{type}</Text>
        <p className="text-xs font-medium text-orange-600">
          read more
        </p>
      </div>
      {children}
    </div>
  )
}

export { FundOverview };