import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Noise from "@/components/elements/3D/noise";
import Hero from "@/../public/hero1.jpg";
import Image from "next/image";

export default function AvatarCard() {
  const theme = useTheme();

  return (
    <div className="relative">
      <Card sx={{ display: { xs: "none", lg: "flex" }, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" className="relative mb-4 text-valhalla-500 after:absolute after:-bottom-1 after:left-0 after:w-96 after:h-1 after:bg-valhalla-500">
              About Me
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit labore totam fugiat exercitationem iste quas accusantium molestiae recusandae quam quibusdam tempore, quos, unde et, aut rerum perferendis. Velit vitae laborum, voluptatem, non esse autem maxime consequatur deleniti, fugiat aliquid numquam?
            </Typography>
          </CardContent>
        </Box>
        <Image src={Hero} alt="Hero" width={300} height={300} className="z-10" />
      </Card>
      <Noise />
    </div>
  );
}
