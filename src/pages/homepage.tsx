import Herosection from "../components/Herosection";
import {Typography, Box, Container, Grid} from '@mui/material';

function Homepage() {
  return (
    <Box component={'main'}>
      <Herosection />
      {/* The About Section */}
      <Grid sx={{bgcolor: '#f9f9f9', width: '100%', px: 6}}>
        <Box component={'section'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant="h2" gutterBottom fontSize={'2.5rem'}
             fontWeight={600} textTransform={'capitalize'}
             sx={{my: 3}}>
                We are the best
            </Typography>
            <Typography variant="body1" align="center" maxWidth={'700px'} gutterBottom>
                Zaph Tours is a premier travel company based in Kenya, specializing in providing the best 
                safaris and adventure tours. With a strong reputation for delivering exceptional travel 
                experiences, Zaph Tours offers a variety of packages that showcase the natural beauty 
                and cultural richness of Kenya and other destinations.
                <Typography variant="h6" align="center">Our mission is to make you dream adventure a REALITY!</Typography>
            </Typography>
        </Box>
        
        {/* The featured destinations section */}
        <Box component={'section'}>
            <Typography variant="h3" align="center"
             gutterBottom fontSize={'2.6rem'} fontWeight={600}
             color="secondary"
             sx={{mt: 3}}>
                Featured Destinations
            </Typography>
            <Grid container sx={{xs: 12, md: 6, lg: 4}}>
            </Grid>
        </Box>
      </Grid>
      </Box>
  );
}

export default Homepage;
