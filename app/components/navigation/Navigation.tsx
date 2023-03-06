"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Item from "./Item";

interface ILink {
  label: string;
  to: string;
  target?: string;
}

interface IProps {
  items: ILink[];
}

export default function Navigation({ items }: IProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      <ul className="flex flex-row justify-center align-middle gap-6">
        {items.map((item) => (
          <li key={item.to}>
            <Item
              label={item.label}
              to={item.to}
              target={item.target || "_blank"}
              isActive={pathname === item.to}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
