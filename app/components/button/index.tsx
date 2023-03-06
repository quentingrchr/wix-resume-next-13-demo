"use client";

import Link from "next/link";
import React from "react";

interface IProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  to?: string;
}

export default function Button(props: IProps) {
  const { children, onClick, variant = "primary", to } = props;

  const baseClass =
    "font-semibold py-2 px-4 rounded-2xl min-w-[126px] text-sm border uppercase cursor-pointer transition-all";
  const primaryClass =
    "text-white hover:text-black bg-brand hover:bg-white border-brand";

  function handleClick() {
    console.log("clicked");
    onClick?.();
  }

  if (!!to) {
    if (
      to.startsWith("http") ||
      to.startsWith("mailto") ||
      to.startsWith("www")
    ) {
      return (
        <a
          className={`${
            variant === "primary" ? primaryClass : ""
          } ${baseClass}`}
          href={to}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          className={`${
            variant === "primary" ? primaryClass : ""
          } ${baseClass}`}
          href={to}
        >
          {children}
        </Link>
      );
    }
  } else {
    return (
      <button
        className={`${variant === "primary" ? primaryClass : ""} ${baseClass}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
}
