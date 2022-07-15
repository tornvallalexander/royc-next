import React from "react";
import { Center, RingProgress } from "@mantine/core";
import { Text } from "components/typography";
import clsx from "clsx";

type Props = {
  progress: number;
  center?: boolean;
}

function StyledRingProgress({ progress = 0, center = true }: Props) {
  return (
    <RingProgress
      size={280}
      thickness={40}
      roundCaps
      sections={[
        { value: progress, color: "#16a34a" },
      ]}
      label={
        <Center>
          <Text className="text-3xl font-bold">{progress}%</Text>
        </Center>
      }
      classNames={{
        root: clsx("text-green-700", {
          "mx-auto": center,
        })
      }}
    />
  )
}

export { StyledRingProgress };