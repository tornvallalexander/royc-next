import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

function Card({ children, className, shadow = "md" }: Props) {
  return (
    <div className={clsx(
        "bg-white rounded-xl p-4 min-w-full shadow-md", // need to add this since we are not using the shadow prop anywhere else
        `shadow-${shadow}`,
        className,
      )}>
      {children}
    </div>
  )
}

export { Card };