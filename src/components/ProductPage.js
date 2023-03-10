import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const product = {
    images: [
      {
        name: 'Virtual Sunset Boulevard',
        path: './public/product.png',
        price: 99.99,
        description: 'A retro computer system NFT project that transports viewers to a surreal world of electric hues and futuristic designs. Virtual Sunset Boulevard blends the nostalgia of the 80s with a vibrant, neon blue computer and a neon pink background to create an otherworldly ambiance.',
      },
      {
        name: 'Circuit City Nights',
        path: './public/product1.png',
        price: 109.99,
        description: 'A retro computer system NFT project that fuses classic and modern elements to create a surreal and electrifying ambiance. The Circuit City Nights project features a purple floor, two large black computer towers, and a screen with a teal color, against a hot pink backdrop that creates an energetic and futuristic atmosphere.',
      },
      {
        name: 'Neon Mirage',
        path: './public/product2.png',
        price: 89.99,
        description: 'This NFT project invites viewers into a realm of mystery and illusion. The Neon Mirage is a vaporwave-inspired retro computer system that features a dark background and a neon green computer screen, creating a surreal and dreamy atmosphere.',
      },
      {
        name: 'Digital Rainforest Symphony',
        path: './public/product3.png',
        price: 94.99,
        description: 'An NFT project that harmonizes the beauty of nature and the possibilities of technology. The Digital Rainforest Symphony features a unique looking computer tower from the 80s with a bright pink background and a screen built onto the face of the tower, evoking a sense of wonder and serenity in the viewer.',
      },
      {
        name: 'Virtual Sunset Boulevard',
        path: './public/product4.png',
        price: 119.99,
        description: 'An NFT project that takes viewers on a cinematic journey of innovation and nostalgia. The Virtual Sunset Boulevard features a retro computer system on a red floor with muted colors and accents of neon blue, set against a dark blue backdrop that evokes a sense of excitement and intrigue.',
      },
    ],
  };
  const HeroButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
    background: `linear-gradient(45deg, #00ffff, #ff00ff)`,
    backgroundSize: '200% 200%',
    transition: 'all 0.4s ease-out',
    '&:hover': {
      backgroundPosition: 'right bottom',
    },
  }));

  const handleAddToCart = () => {
    // TODO: add product to cart
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const selectedProduct = product.images[selectedImage];

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={selectedProduct.path}
              alt={product.name}
            />
            <CardContent sx={{
              backgroundImage: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              padding: '8px',
              }}>
              <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '16px',
                    padding: '8px',
                }}>
                {product.images.map((image, index) => (
                  <Box
                    key={index}
                    onClick={() => handleImageClick(index)}
                    sx={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: index === selectedImage ? '2px solid #000' : 'none',
                      margin: '0 5px',
                      cursor: 'pointer',
                    }}
                  >
                    <img src={image.path} alt={product.name} />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {selectedProduct.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {selectedProduct.price} ETH
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedProduct.description}
          </Typography>
          <HeroButton variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </HeroButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
