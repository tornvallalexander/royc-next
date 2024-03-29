import React from "react";
import clsx from "clsx";
import { H6, Text } from "components/typography";
import type { Fund } from "utils/types";
import Image from "next/image";

type Props = {
  fund: Fund;
  index: number;
  children: React.ReactNode;
  justify?: "top" | "center" | "bottom";
}

function FundOverview({ fund, index, children, justify = "top" }: Props) {
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
      <div className="flex justify-between">
        <div className="hidden lg:inline-block shrink-0">
          <Image
            src={img || "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png"}
            width={140}
            height={80}
            alt=""
          />
        </div>
        <div className="lg:ml-3 mr-6 lg:mr-12">
          <H6 className="text-gray-700">
            {name}
          </H6>
          <Text className="text-xs" variant="secondary">{type}</Text>
          <p className="text-xs font-medium text-orange-600">
            read more
          </p>
        </div>
      </div>
      <div className={clsx(
        "shrink-0 flex flex-col", `justify-${justify}`
      )}>
        {children}
      </div>
    </div>
  )
}

export { FundOverview };