import type React from "react";

type Fund = {
  name: string;
  type: string;
  total_fund: number;
  unallocated: number;
  img: string;
}

type Metric = {
  name: string;
  value: number;
}

type MetricTotal = {
  name: string;
  value: number;
  total: number;
}

type PercentageMetric = {
  name: string;
  percentage: number;
  first: MetricTotal;
  second: MetricTotal;
}

type MenuLink = {
  name: string;
  to: string;
  icon: React.ElementType;
  position: "top" | "bottom";
}

export type {
  Fund,
  Metric,
  PercentageMetric,
  MetricTotal,
  MenuLink,
}