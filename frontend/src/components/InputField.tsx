import React from "react";
import { TextField, Typography, Box } from "@mui/material";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, className }) => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
    <Typography variant="body1">{label}</Typography>
    <TextField id={id} type={type} variant="outlined" InputProps={{
        sx: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      }} sx={{ flexShrink: 0, maxWidth: '100%', backgroundColor: '#f5f5f5', height: 45, width: 400 }} />
  </Box>
);

export default InputField;
