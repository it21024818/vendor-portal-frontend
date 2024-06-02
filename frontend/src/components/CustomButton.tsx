import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <Button onClick={onClick} variant="contained" color="primary" sx={{ justifyContent: 'center', px: 5, py: 1, mt: 0, fontWeight: 'bold', textTransform: 'none' }}>
    {children}
  </Button>
);

export default CustomButton;
