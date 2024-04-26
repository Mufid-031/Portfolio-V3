import * as React from "react";
import Image from "next/image";
import Hero from "@/../public/hero1.jpg";

export default function MyAvatar() {
  return (
    <div className="drop-shadow-purple">
      <Image className="rounded-full" src={Hero} width={450} height={450} alt="hero" />
    </div>
  );
}