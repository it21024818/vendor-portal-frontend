import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { addProduct, editProduct } from '../redux/slices/productSlice';
import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { Product } from "../types/Product";
import { AddAPhoto, Delete, Star, StarBorder } from "@mui/icons-material";

// Component for adding or editing a product
const AddEditProduct: React.FC = () => {
  // Get the product ID from the URL params
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.products);

  // State variables to manage the product data and images
  const [product, setProduct] = useState<Product>({
    id: '',
    sku: '',
    quantity: 0,
    name: '',
    images: [],
    description: '',
    featuredImage: ''
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>('');

  // Fetch existing product data when editing
  useEffect(() => {
    if (id) {
      const existingProduct = products.find(p => p.id === id);
      if (existingProduct) {
        setProduct(existingProduct);
        setPreviewImages(existingProduct.images);
        setMainImage(existingProduct.featuredImage);
      }
    }
  }, [id, products]);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files!);
    setSelectedFiles([...selectedFiles, ...files]);

    const filePreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...filePreviews]);
  };

  // Show file input dialog when clicking on Add Images
  const handleAddImagesClick = () => {
    document.getElementById('fileInput')?.click();
  };

  // Delete image from preview
  const handleImageDelete = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);

    const updatedPreviews = previewImages.filter((_, i) => i !== index);
    setPreviewImages(updatedPreviews);
  };

  // Select main image from preview
  const handleMainImageSelect = (image: string) => {
    setMainImage(image);
  };

  // Handle input change for product details
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prepare updated product data
    const updatedProduct = {
      ...product,
      images: previewImages,
      featuredImage: mainImage
    };

    // Dispatch action to add or edit product
    if (id) {
      dispatch(editProduct(updatedProduct) as any);
    } else {
      dispatch(addProduct(updatedProduct) as any);
    }

    // Navigate back to products list
    navigate('/');
  };

  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', p: 5, backgroundColor: 'white' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, width: '100%', maxWidth: 1169 }}>
        <Box component="header" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', letterSpacing: '0.3rem', mr: 2 }}>PRODUCTS</Typography>
          <Box component="img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1e07a70d97bc25413f9bba2c6783d69033471c2059e22ba68cdb87164d67e3?apiKey=071d2091314e4e458e22e8bb8ec1920c&" sx={{ width: 37, height: 37, mr: 1 }} alt="" />
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: '0.1rem' }}>{id ? 'Edit' : 'Add'} Product</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <InputField id="sku" label="SKU" type="text" name="sku" value={product.sku} onChange={handleChange} />
          <Box sx={{ display: 'flex', gap: 2, mt: 3, width: '100%' }}>
            <InputField id="name" label="Name" type="text" name="name" value={product.name} onChange={handleChange} />
            <InputField id="quantity" label="QTY" type="number" name="quantity" value={product.quantity} onChange={handleChange} />
          </Box>
          <Typography variant="body1" sx={{ mt: 4 }}>Product Description</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>A small description about the product</Typography>
          <TextField id="description" name="description" variant="outlined" multiline rows={4} value={product.description} onChange={handleChange} InputProps={{ sx: { '& .MuiOutlinedInput-notchedOutline': { border: 'none', }, }, }}  sx={{ mt: 2, backgroundColor: '#f5f5f5', width: '100%' }} />
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 4, width: 335 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', color: '#333' }}>
              <Typography variant="body1">Product Images</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>JPEG, PNG, SVG or GIF (Maximum file size 50MB)</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', width: 150 }}>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                multiple
                style={{ display: 'none' }}
              />
              <Typography
                onClick={handleAddImagesClick}
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Add Images
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
            {previewImages.map((image, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <Box component="img" src={image} alt={`Preview ${index}`} sx={{ width: 100, height: 100, objectFit: 'cover' }} />
                <IconButton onClick={() => handleImageDelete(index)} sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}>
                  <Delete />
                </IconButton>
                <IconButton onClick={() => handleMainImageSelect(image)} sx={{ position: 'absolute', bottom: 0, right: 0, color: 'yellow' }}>
                  {mainImage === image ? <Star /> : <StarBorder />}
                </IconButton>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <CustomButton onClick={() => handleSubmit} type="submit">
              {id ? 'Save changes' : 'Add Product'}
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddEditProduct;
