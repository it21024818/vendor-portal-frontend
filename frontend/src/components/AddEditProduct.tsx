import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    className?: string;
  }
  interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }

const InputField: React.FC<InputFieldProps> = ({ id, label, type, className }) => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
    <Typography variant="body1">{label}</Typography>
    <TextField id={id} type={type} variant="outlined"       InputProps={{
        sx: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      }} sx={{ flexShrink: 0, maxWidth: '100%', backgroundColor: '#f5f5f5', height: 45, width: 400 }} />
  </Box>
);

const CustomButton: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <Button onClick={onClick} variant="contained" color="primary" sx={{ justifyContent: 'center', px: 3, py: 1, mt: 3, fontWeight: 'bold', textTransform: 'none' }}>
    {children}
  </Button>
);

const MyComponent: React.FC = () => {
  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', p: 5, backgroundColor: 'white' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, width: '100%', maxWidth: 1169 }}>
        <Box component="header" sx={{ display: 'flex', gap: 1, alignItems: 'center', width: '100%' }}>
          <Typography variant="h1" sx={{ flexGrow: 1, fontSize: '2.5rem', fontWeight: 'bold', color: '#333', letterSpacing: '0.3rem' }}>PRODUCTS</Typography>
          <Box component="img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1e07a70d97bc25413f9bba2c6783d69033471c2059e22ba68cdb87164d67e3?apiKey=071d2091314e4e458e22e8bb8ec1920c&" sx={{ width: 37, height: 37 }} alt="" />
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: '0.1rem' }}>Add new product</Typography>
        </Box>
        <form>
          <InputField id="sku" label="SKU" type="text" />
          <Box sx={{ display: 'flex', gap: 2, mt: 3, width: '100%' }}>
            <InputField id="name" label="Name" type="text" />
            <InputField id="qty" label="QTY" type="number" />
          </Box>
          <Typography variant="body1" sx={{ mt: 4 }}>Product Description</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>A small description about the product</Typography>
          <TextField id="description" variant="outlined" multiline rows={4} InputProps={{ sx: { '& .MuiOutlinedInput-notchedOutline': { border: 'none', }, }, }}  sx={{ mt: 2, backgroundColor: '#f5f5f5', width: '100%' }} />
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 4, width: 335 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', color: '#333' }}>
              <Typography variant="body1">Product Images</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>JPEG, PNG, SVG or GIF (Maximum file size 50MB)</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', color: 'primary.main', cursor: 'pointer' }}>
              <Typography variant="body1">Add Images</Typography>
            </Box>
          </Box>
          <CustomButton onClick={() => {}}>
            Add product
          </CustomButton>
        </form>
      </Box>
    </Box>
  );
};

export default MyComponent;
