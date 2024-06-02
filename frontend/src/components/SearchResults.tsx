import * as React from "react";
import { Box, Container, Typography, Divider, IconButton, Avatar } from "@mui/material";
import { SearchBar } from "./SearchBar";
import CustomButton from "./CustomButton";
import StarRateIcon from '@mui/icons-material/StarRate';

type Product = {
  id: number;
  code: string;
  name: string;
  description: string;
};

const products: Product[] = [
  { id: 1, code: "#CA25", name: "Product-name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo." },
  { id: 2, code: "#CA34", name: "Product-name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo." },
  { id: 3, code: "#CA56", name: "Product-name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo." },
  { id: 4, code: "#CA57", name: "Product-name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo." },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Box component="article" sx={{ display: 'flex', flexDirection: 'column', mt: 3, width: '100%', maxWidth: '1004px' }}>
      <Box component="section" sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'start', flexWrap: { xs: 'wrap', md: 'nowrap' }, width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'start' }}>
          <Typography variant="body2" sx={{ color: 'blue' }}>{product.code}</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>{product.name}</Typography>
        </Box>
        <IconButton sx={{ alignSelf: 'end', mt: 1 }}>
          <Avatar 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d59c5cecb488031cb305b885c63e69ab92c02685ac37b35be4f8a62d74d74c6?apiKey=071d2091314e4e458e22e8bb8ec1920c&" 
            alt={`${product.name} thumbnail`} 
            sx={{ width: 32, height: 32 }} 
          />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>{product.description}</Typography>
      <Divider sx={{ mt: 3, width: '100%' }} />
    </Box>
  );
}

function SearchResults() {
  return (
    <Container component="main" sx={{ display: 'flex', flexDirection: 'column', pt: 4, pb: 5, bgcolor: 'white' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>PRODUCTS</Typography>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ marginRight: 'auto' }}>
              <SearchBar />
          </div>
          <CustomButton onClick={() => {}}>New Product</CustomButton>
          <IconButton color="primary" style={{ border: '2px solid #1976d2', borderRadius: '4px', marginLeft: '5px' }}><StarRateIcon /></IconButton>
      </Box>
      <Typography variant="h5" sx={{ mt: 3, textAlign: 'left' }}>4 results found for ‘Books’</Typography>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default SearchResults;
