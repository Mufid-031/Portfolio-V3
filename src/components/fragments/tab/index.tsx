import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import CustomTabList from "./list";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", backgroundColor: "#2a2a2a", color: "#885ef6", }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomTabList handleChange={handleChange} value={value} />
        </Box>
        <TabPanel value="1">
          <div className="flex flex-wrap flex-grow gap-4 justify-center">
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
            <div className="w-40 h-16 bg-slate-500 border-valhalla-500 drop-shadow-valhalla rounded-lg"></div>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
