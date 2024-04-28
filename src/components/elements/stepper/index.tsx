import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Connector from "./conector";
import QontoStepIcon from "./icon";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CustomizedSteppers() {
  React.useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
    });
  }, []);

  return (
    <Stack sx={{ width: "100%", height: "250vh", alignItems: "center", paddingTop: "60px", bgcolor: "#2a2a2a", color: "white" }} spacing={4}>
      <Stepper orientation="vertical" activeStep={4} connector={<Connector />} sx={{ display: { xs: "none", lg: "block" } }}>
        <Step data-aos="zoom-in"></Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-left" data-aos-delay="300" className="w-[650px] h-[350px] bg-slate-100 absolute -top-40 left-16 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-right" data-aos-delay="300" className="w-[650px] h-[350px] bg-slate-100 absolute -top-40 right-16 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-left" data-aos-delay="600" className="w-[650px] h-[350px] bg-slate-100 absolute -top-40 left-16 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-right" data-aos-delay="600" className="w-[650px] h-[350px] bg-slate-100 absolute -top-40 right-16 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in"></Step>
      </Stepper>
      <Stepper orientation="vertical" activeStep={4} connector={<Connector />} sx={{ display: { xs: "block", lg: "none" } }}>
        <Step data-aos="zoom-in"></Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-left" data-aos-delay="300" className="w-[450px] h-[300px] bg-slate-100 absolute top-10 -left-52 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-right" data-aos-delay="300" className="w-[450px] h-[300px] bg-slate-100 absolute top-10 -left-52 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-left" data-aos-delay="600" className="w-[450px] h-[300px] bg-slate-100 absolute top-10 -left-52 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in">
          <StepLabel className="relative" StepIconComponent={QontoStepIcon}>
            <div data-aos="fade-right" data-aos-delay="600" className="w-[450px] h-[300px] bg-slate-100 absolute top-10 -left-52 rounded-lg"></div>
          </StepLabel>
        </Step>
        <Step data-aos="zoom-in"></Step>
      </Stepper>
    </Stack>
  );
}
