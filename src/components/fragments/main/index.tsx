import * as React from "react";
import Stack from "@mui/material/Stack";
import WavesTop from "@/components/elements/waves/top";
import Biodata from "./biodata";
import MyAvatar from "./myavatar";

export default function Main() {

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      justifyContent={{ sm: "center", md: "justify-around" }}
      alignItems={{ sm: "center", md: "flex-start" }}
      className="flex justify-around items-center w-full h-[674px] md:h-[660px] bg-mine-shaft-950 relative"
    >
      <WavesTop />
      <MyAvatar />
      <Biodata />
    </Stack>
  );
}
