import React from "react";
import { Button, TextField, InputAdornment, IconButton, Paper, Typography, Box, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarRateIcon from '@mui/icons-material/StarRate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from "./SearchBar";
import CustomButton from "./CustomButton";

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

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleEditClick = (sku: string) => {
    navigate(`/edit/${sku}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 19 }}>
        <Typography>{product.sku}</Typography>
        <img src={product.imageSrc} alt={product.name} style={{ width: 66, height: 66 }} />
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton color="primary" onClick={() => handleEditClick(product.sku)}><EditIcon /></IconButton>
        <IconButton color="primary"><DeleteIcon /></IconButton>
        <IconButton color="primary"><StarRateIcon /></IconButton>
      </Box>
    </Box>
  );
};

const ProductList = () => {
  const navigate = useNavigate();

  const handleNewProductClick = () => {
    navigate('/new');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return (
    <Box sx={{ p: 4, bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>PRODUCTS</Typography>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ marginRight: 'auto' }}>
          <SearchBar />
        </div>
        <CustomButton onClick={handleNewProductClick}>New Product</CustomButton>
        <IconButton
          color="primary"
          style={{ border: '2px solid #1976d2', borderRadius: '4px', marginLeft: '5px' }}
          onClick={handleFavoritesClick}
        >
          <StarRateIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', gap: 20, alignItems: 'center', mt: 4 }}>
        <Typography variant="body1" color="primary" fontWeight="bold">SKU</Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">IMAGE</Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">PRODUCT NAME</Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">PRICE</Typography>
      </Box>

      {products.map(product => (
        <React.Fragment key={product.sku}>
          <ProductItem product={product} />
          <Divider />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ProductList;
