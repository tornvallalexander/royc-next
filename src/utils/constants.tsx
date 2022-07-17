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

enum ROUTES {
  HOME = "/",
  ROYC = "/royc",
  ROYC_STATISTICS = "/royc/statistics",
  ROYC_SAVED = "/royc/saved",
  ROYC_GROUPS = "/royc/groups",
  ROYC_SETTINGS = "/royc/settings",
  ROYC_CHARTS = "/royc/charts",
}

const menuLinks: MenuLink[] = [
  {
    name: "Dashboard",
    to: ROUTES.HOME,
    icon: (props) => <TemplateIcon {...props} />,
    position: "top",
  },
  {
    name: "Statistics",
    to: ROUTES.ROYC_STATISTICS,
    icon: (props) => <TrendingUpIcon {...props} />,
    position: "top",
  },
  {
    name: "Charts",
    to: ROUTES.ROYC_CHARTS,
    icon: (props) => <ChartPieIcon {...props} />,
    position: "top",
  },
  {
    name: "Groups",
    to: ROUTES.ROYC_GROUPS,
    icon: (props) => <UserGroupIcon {...props} />,
    position: "top",
  },
  {
    name: "Settings",
    to: ROUTES.ROYC_SETTINGS,
    icon: (props) => <AdjustmentsIcon {...props} />,
    position: "bottom",
  },
  {
    name: "Saved",
    to: ROUTES.ROYC_SAVED,
    icon: (props) => <FolderIcon {...props} />,
    position: "bottom",
  },
]

export {
  ROUTES,
  menuLinks,
}