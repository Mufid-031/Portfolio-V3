import * as React from "react";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function CustomCircularProgress(props: CircularProgressProps & { top: number; value: number; newColor: string }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: props.top,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: props.color, fontWeight: "bold", fontSize: "1.5rem" }}>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularProgressWithLabel({ top, value, color }: React.PropsWithChildren<{ top: number; value: number; color: string }>) {
  return (
    <div className="flex justify-center w-full lg:w-1/2">
      <CustomCircularProgress size={200} thickness={8} top={top} newColor={color} sx={{ color: color }} value={value} />
    </div>
  );
}
