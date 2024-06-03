import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    products: productReducer, // Combine reducers, 'products' state handled by productReducer
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;
