import { Typography } from "@mui/material";

export default function TabPanel1({
    handleClickKnob,
    newValue,
    newColor,
    icon,
    content
}: React.PropsWithChildren<{
    handleClickKnob: (newValue: number, newColor: string) => void;
    newValue: number;
    newColor: string;
    icon: JSX.Element;
    content: string
}>) {
  return (
    <div className="w-52 h-16 bg-mine-shaft-950 border-2 border-[#885ef6] rounded-lg flex items-center gap-3 px-2 cursor-pointer" onClick={() => handleClickKnob(newValue, newColor)}>
        {icon}
      <Typography variant="h5">{content}</Typography>
    </div>
  );
}
