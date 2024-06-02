import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode; // This can handle any valid React node
  className?: string;
  type?: "button" | "submit" | "reset"; // Optional type property for button
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button", // Default to "button"
}) => (
  <Button
    onClick={onClick}
    type={type} // Include the type property
    variant="contained"
    color="primary"
    sx={{
      justifyContent: 'center',
      px: 5,
      py: 1,
      mt: 0,
      fontWeight: 'bold',
      textTransform: 'none',
    }}
    className={className}
  >
    {children}
  </Button>
);

export default CustomButton;
