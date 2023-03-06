"use client";

import React from "react";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button(props: IProps) {
  const { children, onClick } = props;

  function handleClick() {
    console.log("clicked");
    onClick?.();
  }
  return (
    <button
      className="text-white bg-brand hover:bg-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
