import { Button } from "@mui/material";
import React from "react";

type PrimaryButtonProps = {
  text: string;
};

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ width: 150, fontSize: 12, fontWeight: 600 }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
