import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
});

const MobileNavbarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

const LinkContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Link = styled(Button)({
  margin: '0 1rem',
  padding: '0.5rem 1rem'
});

const Icon = styled('img')({
  width: '8rem',
  padding: '0'
});

const MobileMenu = styled('div')({
  position: 'absolute',
  top: '7.3rem',
  left: 0,
  right: 0,
  background: '#d9e2b5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  zIndex: 999,
});

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <AppBar position="static">

      {/* ----------------------- DESKTOP MENU ------------------------- */}

      <NavbarContainer sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "inherit", xl: "inherit" },
      }}>
        <LinkContainer>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}
          >Home</Link>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}>About Us</Link>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}>Membership</Link>
        </LinkContainer>
        <Icon sx={{ padding: '0 2rem' }} src="elmwood-park-logo.webp" alt="Elmwood Park Community League Icon" />
        <LinkContainer>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}>Amenities</Link>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}>Events</Link>
          <Link href='#' color="inherit" disableRipple sx={{
            ':hover, :active, :focus': {
              bgcolor: 'secondary.main',
              color: '#ffffff',
              borderRadius: '5rem',
            },
          }}>Contact Us</Link>
        </LinkContainer>
      </NavbarContainer>

      {/* ----------------------- MOBILE MENU ------------------------- */}

      <MobileNavbarContainer sx={{
        display: { xs: "inherit", sm: "inherit", md: "inherit", lg: "none", xl: "none" },
      }}>
        <Link href='index.js'><Icon src="elmwood-park-logo.webp" alt="Elmwood Park Community League Icon" /></Link>
        <IconButton
          onClick={toggleMobileMenu}
          color="inherit" >

          {showMobileMenu ? <CloseIcon sx={{ fontSize: 50 }} /> : <MenuIcon sx={{ fontSize: 50 }} />}
        </IconButton>
        {showMobileMenu && (
          <MobileMenu>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}
            >Home</Link>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>About Us</Link>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Membership</Link>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Amenities</Link>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Events</Link>
            <Link href='#' color="inherit" disableRipple sx={{
              margin: '0.5rem',
              ':hover, :active, :focus': {
                bgcolor: 'secondary.main',
                color: '#ffffff',
                borderRadius: '5rem',
              },
            }}>Contact Us</Link>
          </MobileMenu>
        )}
      </MobileNavbarContainer>
    </AppBar>
  );
};

export default Navbar;
