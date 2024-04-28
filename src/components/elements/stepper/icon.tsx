import { StepIconProps, styled } from "@mui/material";
import { Check } from "@mui/icons-material";

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  justifyContent: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 25,
    border: "1px solid currentColor",
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  "& .QontoStepIcon-circle": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

export default function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}
