import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

function Card({ children, className, shadow = "lg" }: Props) {
  return (
    <div className={clsx(
        "bg-white rounded-xl p-4 min-w-full",
        `shadow-${shadow}`,
        className,
      )}>
      {children}
    </div>
  )
}

export { Card };