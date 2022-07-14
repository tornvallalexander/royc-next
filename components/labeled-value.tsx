import React from "react";
import { Text } from "components/typography";
import clsx from "clsx";

type Props = {
  label: string;
  children: React.ReactNode;
  position?: "left" | "right" | "center";
  reverse?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

function LabeledValue(props: Props) {
  const {
    label,
    children,
    position = "right",
    reverse = false,
    size = "sm",
  } = props;

  return (
    <div className={clsx("flex", `text-${position}`, {
      "flex-col": !reverse,
      "flex-col-reverse": reverse,
    })}>
      <Text
        className={clsx("font-medium", {
          "text-lg": size === "md",
          "text-2xl": size === "lg",
          "text-4xl font-bold": size === "xl",
        })}
        variant="green"
      >
        {children}
      </Text>
      <Text
        className={clsx({
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-lg": size === "xl",
        })}
        variant="secondary"
      >
        {label}
      </Text>
    </div>
  );
}

export { LabeledValue };