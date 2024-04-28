import * as React from "react";
import Image from "next/image";
import Hero from "@/../public/hero1.jpg";

export default function MyAvatar() {
  return (
    <div className="drop-shadow-purple w-full md:w-1/2 lg:1/3 flex justify-center items-center">
      <Image className="rounded-full w-[350px] md:w-[450px] h-[350px] md:h-[450px]" src={Hero} width={350} height={350} alt="hero" />
    </div>
  );
}