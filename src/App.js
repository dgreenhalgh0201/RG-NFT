import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, useMediaQuery } from '@mui/material';
import ProductLandingPage from './components/LandingPage';
import MouseGradient from './components/MouseGradient';
import {styled} from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProductPage from './components/ProductPage';

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  
});


const BoldParagraph = styled('p')({
  fontWeight: 'bold',
});

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono, sans-serif',
    /* add additional typography styles if necessary */
  },
});

const App = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <ThemeProvider theme={theme}>
    <MouseGradient />
      <TransparentAppBar position="static">
        <Toolbar>
        <Typography variant={matches ? 'h6' : 'h4'} component="div" sx={{ flexGrow: .05, color: '#E1DE2B', fontWeight: 'bold', textShadow: `1px 1px #ff00ff, -1px -1px #ff00ff, 1px -1px #ff00ff, -1px 1px #ff00ff, 0px 0px 10px #00ffff` }}>
            <Link to="/" style={{ color: '#E1DE2B', textDecoration: 'none', fontWeight: 'bold' }}>
              RG NFT
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: .01, color: '#E1DE2B', fontWeight: 'bold', textShadow: `1px 1px #ff00ff, -1px -1px #ff00ff, 1px -1px #ff00ff, -1px 1px #ff00ff, 0px 0px 10px #00ffff` }}>
              <Link to="/product" style={{ color: '#E1DE2B', fontWeight: 'bold' , textDecoration: 'none'}}>
                Collection
              </Link>
            </Typography>
        </Toolbar>
      </TransparentAppBar>
      <div style={{ position: 'relative' }}>
        <Container sx={{ marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<ProductLandingPage paragraphStyles={BoldParagraph}/>} />
            <Route path="/product" element={<ProductPage paragraphStyles={BoldParagraph}/>} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;