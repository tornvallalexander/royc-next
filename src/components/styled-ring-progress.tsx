import React from "react";
import { Center, RingProgress } from "@mantine/core";
import { Text } from "components/typography";

type Props = {
  progress: number;
}

function StyledRingProgress({ progress = 0 }: Props) {
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
          <div className="">
            <Text className="text-3xl font-bold">{progress}%</Text>
          </div>
        </Center>
      }
      classNames={{
        root: "text-green-700"
      }}
    />
  )
}

export { StyledRingProgress };