import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

const HeroSection = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: 'rgba(0, 0, 0, 0)',
  textAlign: 'center',
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(1, 4),
  background: `linear-gradient(45deg, #00ffff, #ff00ff)`,
  backgroundSize: '200% 200%',
  transition: 'all 0.4s ease-out',
  '&:hover': {
    backgroundPosition: 'right bottom',
  },
}));

const HeroImage = styled('img')(({ theme }) => ({
  width: '80%',
  height: '100%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
}));


const ProductLandingPage = () => {
  return (
    <div>
      <HeroSection container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Retro Games NFT
          </Typography>
          <Typography variant="subtitle1" paragraph>
          Welcome to our upcoming retro gaming NFT collection! Our collection features unique and highly collectible NFTs based on classic gaming from the 80s and 90s. Our team of designers and developers have painstakingly recreated iconic systems from this beloved era, and turned them into one-of-a-kind digital assets that can be owned and traded by collectors and fans around the world.
          </Typography>
          <HeroButton variant="contained" color="primary" size="large">
            <Link to ='/product' style = {{textDecoration: 'none', color: "white"}}>
            Learn More
            </Link>
          </HeroButton>
        </Grid>
        <Grid item xs={12} md={6}>
        <HeroImage src={process.env.PUBLIC_URL + '/images/product.png'} alt="Product" style={{ width: '80%', height: '100%' }} />
        </Grid>
      </HeroSection>
      <Container>
        <Typography variant="body1" paragraph>
        Each NFT in our collection is a piece of digital history, representing a specific moment or character from a classic game. They're designed to be rare and valuable, with only a limited number of each NFT available for purchase.
        In addition to their collectibility, our NFTs also have practical uses. They can be used to unlock exclusive content, gain access to events, and participate in community activities related to the games and characters represented in the collection.
        </Typography>
        <Typography variant="body1" paragraph>
        We're thrilled to be launching this collection soon, and we can't wait for you to see what we've created. Be sure to sign up for updates and be the first to know when our NFTs go on sale.
Thank you for your interest in our retro gaming NFT collection, and we look forward to sharing more with you soon!
        </Typography>
      </Container>
    </div>
  );
};

export default ProductLandingPage;