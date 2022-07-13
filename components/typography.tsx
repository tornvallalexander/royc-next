import React, {createElement} from "react"
import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  variant?: "primary" | "secondary";
  className?: string;
  size?: keyof typeof sizes;
  children: React.ReactNode;
};

const textVariants = {
  primary: "text-gray-800",
  secondary: "text-gray-500",
}

const sizes = {
  h1: "leading-tight text-4xl md:text-5xl",
  h2: "leading-tight text-3xl md:text-4xl",
  h3: "text-2xl font-medium md:text-3xl",
  h4: "text-xl font-medium md:text-2xl",
  h5: "text-lg font-medium md:text-xl leading-tight md:leading-normal",
  h6: "text-lg font-medium leading-tight md:leading-normal",
  none: "",
};

function Title({ as, size = "h2", className = "font-medium", ...rest }: Props) {
  const fallback = size === "none" ? "h1" : size
  const Tag = as ?? fallback
  return (
    <Tag
      className={clsx(sizes[size], className)}
      {...rest}
    />
  )
}

function HX({as, ...props}: Props) {
  return <Title as={as} {...props} size="none" />
}

function H1(props: Props) {
  return <Title {...props} size="h1" />
}

function H2(props: Props) {
  return <Title {...props} size="h2" />
}

function H3(props: Props) {
  return <Title {...props} size="h3" />
}

function H4(props: Props) {
  return <Title {...props} size="h4" />
}

function H5(props: Props) {
  return <Title {...props} size="h5" />
}

function H6(props: Props) {
  return <Title {...props} size="h6" />
}

interface ParagraphProps {
  variant?: "primary" | "secondary";
  className?: string;
  prose?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

function Text({
  variant = "primary",
  className = "text-lg",
  prose = true,
  as = "p",
  ...rest
}: ParagraphProps) {
  return createElement(as, {
    className: clsx("leading-snug",
      textVariants[variant],
      {
        "prose prose-light": prose,
      },
      className,
    ),
    ...rest
  })
}

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HX,
  Text,
}
