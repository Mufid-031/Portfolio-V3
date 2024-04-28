import * as React from "react";
import { BaseTextFieldProps, TextField, TextFieldProps, TextFieldVariants } from "@mui/material";

export default function Input({
  id,
  label,
  variant,
}: React.PropsWithChildren<{
  id?: BaseTextFieldProps["id"];
  label?: null | string;
  variant?: TextFieldProps["variant"] | TextFieldVariants;
}>) {
  return <TextField id={id} label={label} variant={variant} />;
}
