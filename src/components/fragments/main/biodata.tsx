import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function Biodata() {
  return (
    <div className="w-full flex justify-center md:w-1/3">
      <div>
        <Typography variant="h3" className="text-2xl md:text-3xl text-valhalla-500">
          Hello I{"'"}m
        </Typography>
        <Typography variant="h2" className="text-4xl md:text-5xl text-white">
          Ahmad Mufid Risqi
        </Typography>
        <span className="text-4xl md:text-5xl text-white">I{"'"}m a</span>
        <TypeAnimation sequence={[" Developer", 2000, " Programmer", 2000, " fullstack", 2000]} speed={30} repeat={Infinity} className="text-4xl md:text-5xl text-valhalla-500" />
      </div>
    </div>
  );
}
