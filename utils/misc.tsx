import { menuLinks } from "utils/constants";
import type { MenuLink } from "utils/types";

function getPositionedLinks() {
  const { topMenuLinks, bottomMenuLinks } = menuLinks.reduce((acc, link) => {
    acc[link.position === "top" ? "topMenuLinks" : "bottomMenuLinks"].push(link);
    return acc;
  }, { topMenuLinks: [], bottomMenuLinks: [] } as Record<string, MenuLink[]>);

  return { topMenuLinks, bottomMenuLinks };
}

function currencyFormatter(val: number, accuracy = 1) {
  return Math.abs(Number(val)) >= 1.0e+6
      ? (Math.abs(Number(val)) / 1.0e+6).toFixed(accuracy) + " MSEK"
      : Math.abs(Number(val)) >= 1.0e+3
        ? (Math.abs(Number(val)) / 1.0e+3).toFixed(accuracy) + " KSEK"
        : Math.abs(Number(val));
}

export {
  getPositionedLinks,
  currencyFormatter,
}