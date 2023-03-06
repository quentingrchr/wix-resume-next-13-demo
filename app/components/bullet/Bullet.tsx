import React from "react";

interface IProps {
  size?: "sm" | "md" | "lg";
}

export default function Bullet({ size = "md" }: IProps) {
  const sizesMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };
  return <span className={`bg-brand block ${sizesMap[size]}`}></span>;
}
