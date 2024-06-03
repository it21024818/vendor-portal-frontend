import React, { ChangeEvent } from "react";
import { TextField, Typography, Box } from "@mui/material";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  className,
  required
}) => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
    <Typography variant="body1">{label}</Typography>
    <TextField
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      InputProps={{
        sx: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      }}
      sx={{ flexShrink: 0, maxWidth: '100%', backgroundColor: '#f5f5f5', height: 45, width: 400 }}
      required={required}
    />
  </Box>
);

export default InputField;
