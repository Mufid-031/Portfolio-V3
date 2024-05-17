import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import CustomTabList from "./list";
import TabPanel1 from "./tabpanel1";
import CircularProgressWithLabel from "@/components/elements/circularprogress";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLaravel, FaNpm, FaReact } from "react-icons/fa6";
import { BsGit } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPnpm, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function LabTabs() {
  const [value, setValue] = React.useState<string>("1");

  const handleChange : (event: React.SyntheticEvent, newValue: string) => void = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [valueKnob, setValueKnob] = React.useState<number>(0);
  const [knobColor, setKnobColor] = React.useState<string>("");

  const handleClickKnob: (newValue: number, newColor: string) => void = (newValue, newColor) => {
    setValueKnob(0);
    setTimeout(() => {
      setValueKnob(newValue);
      setKnobColor(newColor);
    }, 500);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "100vh" },
        typography: "body1",
        backgroundColor: "#2a2a2a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", lg: "flex-start" },
        position: "relative",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", pl: { xs: 0, lg: 10 } }}>
          <CustomTabList handleChange={handleChange} value={value} />
        </Box>
        <TabPanel value="1">
          <div className={`flex flex-wrap ${valueKnob === 0 ? "justify-start" : "justify-center"} w-full`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full lg:w-1/2 pl-11">
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={90} newColor="#E34F26" icon={<FaHtml5 color="#E34F26" size={"3.2rem"} />} content="Html" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={85} newColor="#1572B6" icon={<FaCss3Alt color="#1572B6" size={"3.2rem"} />} content="Css" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#F0DB4F" icon={<RiJavascriptFill color="#F0DB4F" size={"3.2rem"} />} content="Javascript" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={60} newColor="#7952B3" icon={<FaBootstrap color="#7952B3" size={"3.2rem"} />} content="Bootstrap" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#38BDF8" icon={<SiTailwindcss color="#38BDF8" size={"3.2rem"} />} content="Tailwind" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#61DBFB" icon={<FaReact color="#61DBFB" size={"3.2rem"} />} content="React" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={70} newColor="#ffffff" icon={<SiNextdotjs color="#000000" size={"3.2rem"} />} content="Next.js" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={60} newColor="#777BB3" icon={<SiPhp color="#777BB3" size={"3.2rem"} />} content="Php" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={50} newColor="#FF2D20" icon={<FaLaravel color="#FF2D20" size={"3.2rem"} />} content="Laravel" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={70} newColor="#3178c6" icon={<SiTypescript color="#3178c6" size={"2.4rem"} />} content="Typescript" />
            </div>
            <CircularProgressWithLabel top={-100} value={valueKnob} color={knobColor} />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className={`flex flex-wrap ${valueKnob === 0 ? "justify-start" : "justify-center"} w-full`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full lg:w-1/2 pl-11">
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#CB3837" icon={<FaNpm color="#CB3837" size={"3.2rem"} />} content="Npm" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={70} newColor="#F69220" icon={<SiPnpm color="#F69220" size={"2.6rem"} />} content="Pnpm" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={90} newColor="#F05032" icon={<BsGit color="#F05032" size={"2.9rem"} />} content="Git" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={60} newColor="#ffffff" icon={<FaGithub color="#000" size={"3.2rem"} />} content="Github" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#4DB33D" icon={<SiMongodb color="#4DB33D" size={"3.2rem"} />} content="MongoDB" />
              <TabPanel1 handleClickKnob={handleClickKnob} newValue={80} newColor="#00758F" icon={<SiMysql color="#00758F" size={"3.2rem"} />} content="MySql" />
            </div>
            <CircularProgressWithLabel top={0} value={valueKnob} color={knobColor} />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
