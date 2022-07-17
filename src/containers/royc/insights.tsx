import React from "react";
import Image from "next/image";
import { H6, Text } from "components/typography";

const insights = [
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
  {
    title: "Why invest in private markets?",
    estTime: 12,
    featured: false,
    img: ""
  },
]

function Insights() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map(insight => {
          return (
            <Insight key={insight.title} insight={insight} />
          )
        })}
      </div>
    </div>
  )
}

function Insight({ insight }: { insight: any }) {
  return (
    <div className="w-full">
      <div className="rounded-xl max-w-[600px]">
        <Image
          src="https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg"
          alt={insight.title}
          width={1000}
          height={600}
          className="rounded-xl"
        />
      </div>
      <H6 as="p" className="mt-4">
        {insight.title}
      </H6>
      <Text className="text-sm" variant="secondary">
        Learn more - {insight.estTime} mins
      </Text>
    </div>
  )
}

export { Insights };