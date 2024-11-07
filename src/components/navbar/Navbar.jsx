import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import logoCompleted from '../../../public/images/logowhiteCompletedsgv.svg';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Función para hacer scroll hacia las secciones
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logoCompleted} alt="GoGlobal Logo" style={{ height: '40px' }} />
      <List>
        {/* Home - Navega a la ruta '/' */}
        <ListItem button key="Home" component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {/* Quienes Somos - Realiza un scroll hacia la sección con id "about" */}
        <ListItem button key="Quienes Somos" onClick={() => scrollToSection('about')}>
          <ListItemText primary="Quienes Somos" />
        </ListItem>
        {/* Destinations - Navega a la ruta '/destinations' */}
        <ListItem button key="Destinos" component={Link} to="/destinations">
          <ListItemText primary="Destinos" />
        </ListItem>
        {/* Blog - Realiza un scroll hacia la sección con id "blog" */}
        <ListItem button key="Blog" onClick={() => scrollToSection('blog')}>
          <ListItemText primary="Blog" />
        </ListItem>
        {/* Contact - Realiza un scroll hacia la sección con id "contact" */}
        <ListItem button key="Contact" onClick={() => scrollToSection('contact')}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', bgcolor: 'rgba(0, 0, 0, 0.7)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: 'auto' }}>
        {/* Logo a la izquierda */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoCompleted} alt="GoGlobal Logo" style={{ height: '40px' }} />
        </Box>

        {/* Menú desplegable a la derecha en pantallas pequeñas */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {/* Enlace a Home */}
          <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>

          {/* Enlace a Quienes Somos con scroll */}
          <span
            style={{ margin: '0 10px', color: 'white', cursor: 'pointer' }}
            onClick={() => scrollToSection('about')}
          >
            Quienes Somos
          </span>

          {/* Enlace a Destinations */}
          <Link to="/destinations" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Destinos</Link>

          {/* Enlace a Blog con scroll */}
          <span
            style={{ margin: '0 10px', color: 'white', cursor: 'pointer' }}
            onClick={() => scrollToSection('blog')}
          >
            Blog
          </span>

          {/* Enlace a Contact con scroll */}
          <span
            style={{ margin: '0 10px', color: 'white', cursor: 'pointer' }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </span>

          <Typography variant="h6" sx={{ ml: 2 }}>👤</Typography>
        </Box>

        {/* Icono de menú en pantallas pequeñas */}
        <IconButton
          color="inherit"
          edge="end" // Cambio aquí para mover el icono a la derecha
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Menú desplegable */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
