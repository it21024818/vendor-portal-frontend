import React from 'react';
import { Box, Button, IconButton, InputBase, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchButtonProps {
  imgSrc: string;
  altText: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ imgSrc, altText }) => {
  const theme = useTheme();
  return (
    <Button
      type="submit"
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        px: 5,
        py: 1,
        fontWeight: 'bold',
        color: 'white',
        bgcolor: theme.palette.primary.main,
        borderRadius: '40px',
        '&:hover': {
          bgcolor: theme.palette.primary.dark,
        },
        '@media (max-width: 768px)': {
          px: 2.5,
        },
      }}
    >
      <img loading="lazy" src={imgSrc} alt={altText} style={{ width: 20, height: 20, marginRight: theme.spacing(1) }} />
      <span>Search</span>
    </Button>
  );
}

export const SearchBar: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        gap: 2,
        px: 3,
        py: 1,
        fontSize: '1.25rem',
        bgcolor: '#F7F7F7',
        borderRadius: '40px',
        '@media (max-width: 768px)': {
          flexWrap: 'wrap',
          pl: 2.5,
          maxWidth: '100%',
        },
      }}
    >
      <InputBase
        id="searchInput"
        placeholder="Search for products"
        aria-label="Search for products"
        sx={{
          flex: 1,
          minWidth: 450,
          my: 'auto',
          fontWeight: 'medium',
          color: 'text.secondary',
        }}
      />
      <SearchButton imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5daab6410afc58e66e8eb0710121ba2d1f382c99f224e102c0a1db8611ccc2d5?apiKey=071d2091314e4e458e22e8bb8ec1920c&" altText="Search Icon" />
    </Box>
  );
}
