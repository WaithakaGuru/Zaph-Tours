import { grey} from "@mui/material/colors";
import Herosection from "../components/Herosection";
import {Typography, Box, Container, Fade} from '@mui/material';
import destinations from "../utils/Destinations";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../utils/Testimonials";
import { useEffect, useState } from "react";

function Homepage() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(()=> {
        const testimonyInterval = setInterval(()=> {
            setTestimonialIndex(prev =>(prev+ 1) % testimonials.length) 
        }, 5000)

        return () => clearInterval(testimonyInterval)
    }, [])

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
        <Container sx={{p: 4, bgcolor:"#f3f3f3", mt: 4}} id="featured-destinations">
            <Typography variant="h3" align="center"
            gutterBottom
            sx={{mb: 6, color: grey[800], fontSize: '2.6rem', fontWeight: 600 }}>
                Featured Destinations
            </Typography>
            <Box component={'div'} display={'grid'}
             gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'}}
             sx={{gap:3}}>
               {
                destinations.map((destination) => (
                    <DestinationCard {...destination} key={destination.name}/>
                ))
            }
            </Box>
        </Container>

        {/* Testimonials from our past travellors */}
        <Container sx={{bgcolor: 'primary.main', width: '70%',
             display: 'flex', flexDirection:'column', my: 4,
             alignItems: 'center', height: '50dvh', boxShadow: '0 0 .5rem rgba(0,0,0,0.4), -1px -1px .5rem #fff' }}>
            <Typography variant="h4" fontSize={'2rem'} fontWeight={700}
             align="center" gutterBottom sx={{my: 3}}>
                Our Travellors Say
            </Typography>
            {/* // <Fade in timeout={800} key={testimonialIndex}> */}
                <TestimonialCard {...testimonials[testimonialIndex]}/>
            {/* </Fade> */}
        </Container>
      </Box>
    </>
  );
}

export default Homepage;