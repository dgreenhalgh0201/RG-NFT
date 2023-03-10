import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
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
  return (
    <ThemeProvider theme={theme}>
    <Router basename='/RG-NFT'>
    <MouseGradient />
      <TransparentAppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: .01, color: '#E1DE2B', fontWeight: 'bold', textShadow: `1px 1px #ff00ff, -1px -1px #ff00ff, 1px -1px #ff00ff, -1px 1px #ff00ff, 0px 0px 10px #00ffff` }}>
            <Link to="/RG-NFT" style={{ color: '#E1DE2B', textDecoration: 'none', fontWeight: 'bold' }}>
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
            <Route path="/RG-NFT" element={<ProductLandingPage paragraphStyles={BoldParagraph}/>} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;