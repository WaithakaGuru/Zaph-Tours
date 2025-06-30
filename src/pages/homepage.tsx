import { grey} from "@mui/material/colors";
import Herosection from "../components/Herosection";
import {Typography, Box, Grid, Container} from '@mui/material';

function Homepage() {
  return (
    <>
      <Herosection />
      {/* The About Section */}
      <Box component={'main'} sx={{bgcolor: '#f9f9f9', width: '100%', px: 6}}>
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
        <Container sx={{px: 6}}>
            <Typography variant="h3" align="center"
            gutterBottom
            sx={{mt: 3, color: grey[800], fontSize: '2.6rem', fontWeight: 600 }}>
                Featured Destinations
            </Typography>
            <Grid container spacing={4}>
                {/* <Grid item > 
                    <Typography variant="subtitle1">this and that</Typography>
                </Grid> */}
            </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Homepage;
