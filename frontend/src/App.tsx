import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { fetchProducts } from './redux/slices/productSlice';
import { Container, CssBaseline } from '@mui/material';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
import AddEditProduct from './components/AddEditProduct';
// import FavoriteProducts from './components/FavoriteProducts';
// import SearchResults from './components/SearchResults';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const App: React.FC = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container>
          <Routes> {/* Use Routes directly */}
            {/* <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} /> */}
            <Route path="/add" element={<AddEditProduct />} />
            <Route path="/edit/:id" element={<AddEditProduct />} />
            {/* <Route path="/favorites" element={<FavoriteProducts />} />
            <Route path="/search" element={<SearchResults />} /> */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
