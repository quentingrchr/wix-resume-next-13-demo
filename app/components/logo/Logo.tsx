import React from "react";
import Bullet from "../bullet/Bullet";

export default function Logo() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Bullet size="sm" />
      <h1 className="text-2xl font-black">Jade Aubrey</h1>
      <span className="mt-[5px]">/</span>
      <h2 className="uppercase text-lg mt-[5px]">Chef de projet</h2>
    </div>
  );
}
