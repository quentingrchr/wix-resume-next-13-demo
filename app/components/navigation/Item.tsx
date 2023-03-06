import isExternalLink from "@/app/utils/isExternalLink";
import Link from "next/link";
import React from "react";

interface IProps {
  label: string;
  to: string;
  target: string;
  isActive: boolean;
}

export default function Item({ label, to, isActive }: IProps) {
  const className = `hover:text-brand font-avenir font-light text-sm uppercase ${
    isActive ? "text-brand" : "text-black"
  }`;
  if (isExternalLink(to)) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  } else {
    return (
      <Link className={className} href={to}>
        {label}
      </Link>
    );
  }
}
