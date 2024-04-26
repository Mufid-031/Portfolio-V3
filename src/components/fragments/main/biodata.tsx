import { TypeAnimation } from "react-type-animation";

export default function Biodata() {
  return (
    <div className="w-1/3">
      <h3 className="text-3xl text-valhalla-500">Hello I{"'"}m</h3>
      <h2 className="text-5xl text-white">Ahmad Mufid Risqi</h2>
      <span className="text-5xl text-white">I{"'"}m a</span><TypeAnimation sequence={[" Developer", 2000, " Programmer", 2000, " fullstack", 2000]} speed={30} repeat={Infinity} style={{ fontSize: "3em", color: "#885ef6" }} />
    </div>
  );
}
