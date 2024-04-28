import { TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import React from "react";

export default function CustomTabList({ handleChange }: React.PropsWithChildren<{ handleChange: (event: React.SyntheticEvent, newValue: string) => void }>) {
  return (
    <TabList sx={{ backgroundColor: "#2a2a2a", color: "#885ef6" }} onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </TabList>
  );
}
