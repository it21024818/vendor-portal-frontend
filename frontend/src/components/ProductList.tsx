import React from "react";
import { Button, TextField, InputAdornment, IconButton, Paper, Typography, Box, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchBar } from "./SearchBar";

interface Product {
  sku: string;
  imageSrc: string;
  name: string;
  price: string;
}

const products: Product[] = [
  { sku: "#CA25", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/614d02949de64712314bf7255cda2307e0eae6607599d2e23c7b1457859cd400?apiKey=071d2091314e4e458e22e8bb8ec1920c&", name: "Product-name", price: "$24.00" },
  { sku: "#CA34", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2eb1b5d4c73c9f07eb22164354964a5345de279be39b7888c617645954406b5?apiKey=071d2091314e4e458e22e8bb8ec1920c&", name: "Product-name", price: "$24.00" },
  { sku: "#CA35", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/16731353a6aaeaf544a2efab96762568fe2eab4fdb5ba76cd66eaba4845742df?apiKey=071d2091314e4e458e22e8bb8ec1920c&", name: "Product-name", price: "$24.00" },
  { sku: "#CA56", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6348bc4de1c344b9956d7b6a132108184610d45639e6bdaae130ffff607a71fe?apiKey=071d2091314e4e458e22e8bb8ec1920c&", name: "Product-name", price: "$24.00" },
  { sku: "#CA57", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7604a463677af61050e44db4f575cf62bff3d2bf8ad5cd80f1b4ed407621c265?apiKey=071d2091314e4e458e22e8bb8ec1920c&", name: "Product-name", price: "$24.00" }
];

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography>{product.sku}</Typography>
      <img src={product.imageSrc} alt={product.name} style={{ width: 66, height: 66 }} />
      <Typography>{product.name}</Typography>
      <Typography>{product.price}</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton><EditIcon /></IconButton>
      <IconButton><DeleteIcon /></IconButton>
      <IconButton><MoreVertIcon /></IconButton>
    </Box>
  </Box>
);

const MyComponent = () => (
  <Box sx={{ p: 4, bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 4 }}>
    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>PRODUCTS</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
      {/* <TextField
        variant="outlined"
        placeholder="Search for products"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ flex: 1 }}
      /> */}
      <SearchBar />
      <Button variant="contained" color="primary">New Product</Button>
      <IconButton color="primary"><AddIcon /></IconButton>
    </Box>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 4 }}>
      <Typography>SKU</Typography>
      <Typography>IMAGE</Typography>
      <Typography sx={{ flex: 1 }}>PRODUCT NAME</Typography>
      <Typography>PRICE</Typography>
    </Box>
    {products.map(product => (
      <React.Fragment key={product.sku}>
        <ProductItem product={product} />
        <Divider />
      </React.Fragment>
    ))}
  </Box>
);

export default MyComponent;
