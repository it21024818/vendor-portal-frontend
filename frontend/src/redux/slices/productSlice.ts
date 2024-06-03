import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import { Product } from '../../types/Product';

// Define the shape of the products state
interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state for products
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Async action creator to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api.get('/products');
  return response.data;
});

// Async action creator to add a product
export const addProduct = createAsyncThunk('products/addProduct', async (product: Product) => {
  const response = await api.post('/products', product);
  return response.data;
});

// Async action creator to edit a product
export const editProduct = createAsyncThunk('products/editProduct', async (product: Product) => {
  const response = await api.put(`/products/${product.sku}`, product);
  return response.data;
});

// Define the product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}, // No additional reducers for now
  extraReducers: builder => {
    builder
      // Handling pending state for fetchProducts
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      // Handling successful fetchProducts
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      // Handling failed fetchProducts
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      // Handling pending state for addProduct
      .addCase(addProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      // Handling successful addProduct
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      // Handling failed addProduct
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to add product';
      })
      // Handling pending state for editProduct
      .addCase(editProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      // Handling successful editProduct
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        // Update the product in the state with the edited one
        const index = state.products.findIndex(p => p.sku === action.payload.sku);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      // Handling failed editProduct
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to edit product';
      });
  },
});

export default productSlice.reducer;
