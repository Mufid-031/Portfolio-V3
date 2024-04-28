import Navbar from "@/components/fragments/navbar";
import CustomizedSteppers from "@/components/elements/stepper";
import AvatarCard from "@/components/fragments/avatarcard";
import LabTabs from "@/components/fragments/tab";

export default function About() {
  return (
    <>
      <Navbar />
      <AvatarCard />
      <CustomizedSteppers />
      <LabTabs />
    </>
  );
}
