import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import CustomTabList from "./list";
import HtmlIcon from "@/components/elements/icon/html";
import { Typography } from "@mui/material";
import CssIcon from "@/components/elements/icon/css";
import JavaScriptIcon from "@/components/elements/icon/javascript";
import ReactIcon from "@/components/elements/icon/react";
import BootstrapIcon from "@/components/elements/icon/bootstrap";
import TailwindIcon from "@/components/elements/icon/tailwind";
import NextJsIcon from "@/components/elements/icon/nextjs";
import PhpIcon from "@/components/elements/icon/php";
import LaravelIcon from "@/components/elements/icon/laravel";
import TypescriptIcon from "@/components/elements/icon/typescript";
import CustomKnob from "@/components/elements/knob";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [valueKnob, setValueKnob] = React.useState<number>(0);
  const [knobColor, setKnobColor] = React.useState<string>("");

  const handleClickKnob: (newValue: number, newColor: string) => void = (newValue, newColor) => {
    setValueKnob(0);
    setValueKnob(newValue);
    setKnobColor(newColor);
  };

  return (
    <Box sx={{ width: "100%", height: { lg: "100vh" }, typography: "body1", backgroundColor: "#2a2a2a", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "center", lg: "flex-start"} , position: "relative" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", pl: { xs: 0, lg: 10} }}>
          <CustomTabList handleChange={handleChange} value={value} />
        </Box>
        <TabPanel value="1">
          <div className="flex flex-wrap flex-grow gap-4 justify-center w-full lg:w-2/3">
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(90, "#E34F26")}>
              <HtmlIcon />
              <Typography variant="h5">Html</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(80, "#1572B6")}>
              <CssIcon />
              <Typography variant="h5">Css</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(90, "#F0DB4F")}>
              <JavaScriptIcon />
              <Typography variant="h5">JavaScript</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(60, "#7952B3")}>
              <BootstrapIcon />
              <Typography variant="h5">Bootstrap</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(80, "#38BDF8")}>
              <TailwindIcon />
              <Typography variant="h5">Tailwind</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(80, "#61DBFB")}>
              <ReactIcon />
              <Typography variant="h5">React</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(70, "white")}>
              <NextJsIcon />
              <Typography variant="h5">NextJs</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(60, "#777BB3")}>
              <PhpIcon />
              <Typography variant="h5">Php</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(50, "#FF2D20")}>
              <LaravelIcon />
              <Typography variant="h5">Laravel</Typography>
            </div>
            <div className="w-40 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2" onClick={() => handleClickKnob(80, "#3178c6")}>
              <TypescriptIcon />
              <Typography variant="h5">Typescript</Typography>
            </div>
          {valueKnob !== 0 && <CustomKnob value={valueKnob} color={knobColor} />}
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
