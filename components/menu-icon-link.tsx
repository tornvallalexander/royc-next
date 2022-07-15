import React from "react"
import clsx from "clsx";
import type { MenuLink } from "utils/types";
import Link from 'next/link';
import { useLocation } from 'react-use';

type Props = MenuLink;

function MenuIconLink(props: Props) {
  const {
    to,
    name,
    icon: Icon,
  } = props;

  const location = useLocation();
  const isSelected = location?.pathname?.includes(to);

  return (
    <Link
      key={name}
      href={to}
    >
      <div
        className={clsx(
          "cursor-pointer group flex items-center md:justify-center px-2 py-2 font-medium rounded-md",
          {
            "bg-gray-100 text-gray-900": isSelected,
            "text-gray-600 hover:bg-gray-50 hover:text-gray-900": !isSelected,
          })
        }
      >
        <Icon
          className={clsx(
            "w-8 mr-3 md:mr-0",
            {
              "text-green-700": isSelected,
              "text-gray-400 group-hover:text-gray-500": !isSelected,
            }
          )}
          aria-hidden="true"
        />
        <span className="md:hidden">
        {name}
      </span>
      </div>
    </Link>
  )
}

export { MenuIconLink }