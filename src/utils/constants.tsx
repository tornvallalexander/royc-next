import React from "react";
import {
  AdjustmentsIcon,
  ChartPieIcon,
  FolderIcon,
  TemplateIcon,
  TrendingUpIcon,
  UserGroupIcon
} from "@heroicons/react/outline";
import type { MenuLink } from "utils/types";

const menuLinks: MenuLink[] = [
  {
    name: "Dashboard",
    to: "royc",
    icon: (props) => <TemplateIcon {...props} />,
    position: "top",
  },
  {
    name: "Statistics",
    to: "statistics",
    icon: (props) => <TrendingUpIcon {...props} />,
    position: "top",
  },
  {
    name: "Charts",
    to: "charts",
    icon: (props) => <ChartPieIcon {...props} />,
    position: "top",
  },
  {
    name: "Groups",
    to: "groups",
    icon: (props) => <UserGroupIcon {...props} />,
    position: "top",
  },
  {
    name: "Settings",
    to: "settings",
    icon: (props) => <AdjustmentsIcon {...props} />,
    position: "bottom",
  },
  {
    name: "Saved",
    to: "saved",
    icon: (props) => <FolderIcon {...props} />,
    position: "bottom",
  },
]

enum ROUTES {
  HOME = "/",
  ROYC = "/royc",
  ROYC_STATISTICS = "/royc/statistics",
  ROYC_ANALYTICS = "/royc/analytics",
  ROYC_GROUPS = "/royc/groups",
  ROYC_SETTINGS = "/royc/settings",
  ROYC_CHARTS = "/royc/charts",
}

export {
  ROUTES,
  menuLinks,
}