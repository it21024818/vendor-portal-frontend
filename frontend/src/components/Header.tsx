import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Box style={{ marginRight: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#000' }} onClick={handleClick}>
            ADMIN <ArrowDropDownIcon />
          </Box>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Box style={{ position: 'relative', display: 'inline-block' }}>
            <Avatar alt="User Profile" src="/path/to/profile.jpg" style={{ width: 40, height: 40, backgroundColor: '#0000ff' }} />
            <span style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, backgroundColor: '#00ff00', borderRadius: '50%', border: '2px solid white' }}></span>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
