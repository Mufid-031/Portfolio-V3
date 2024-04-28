import { TabList } from "@mui/lab";
import { styled, Tab, Tabs } from "@mui/material";
import React from "react";

const CustomIndicator = styled(TabList)<{ indicatorColor: string }>(({ indicatorColor }) => ({
  "& .MuiTabList-root": {
    color: "#885ef6",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: indicatorColor,
  },
}));

export default function CustomTabList({ handleChange, value }: React.PropsWithChildren<{ handleChange: (event: React.SyntheticEvent, newValue: string) => void; value: string }>) {
  return (
    <Tabs sx={{ display : "flex", justifyContent: "center"}} value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
      <Tab sx={{color: "white"}} value="1" label="Skills" />
      <Tab sx={{color: "white"}} value="2" label="Tools" />
    </Tabs>
  );
}
