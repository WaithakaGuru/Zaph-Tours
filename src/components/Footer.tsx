import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 4, mt: 8 }}>
    <Container maxWidth="lg">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
        <Typography variant="body1" fontWeight={500}>
          © {new Date().getFullYear()} Zaph Tours. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="#" color="inherit" aria-label="Facebook"><FacebookIcon /></Link>
          <Link href="#" color="inherit" aria-label="Twitter"><TwitterIcon /></Link>
          <Link href="#" color="inherit" aria-label="Instagram"><InstagramIcon /></Link>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
