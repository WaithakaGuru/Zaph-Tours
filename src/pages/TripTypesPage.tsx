import tripTypes from "../utils/TripTypes";
import TripTypeCard from "../components/TripTypeCard";
import { Container, Typography, Box } from "@mui/material";

function TripTypesPage() {
  return (
    <Container>
    <Typography variant="body1" my={3} color="secondary" gutterBottom 
     display={"flex"} justifyContent={'center'} fontWeight={600} fontSize={'1.6rem'} >
      Zaph Tours <Typography  variant="h4"  color="primary">
        Trip Packages
      </Typography>
    </Typography>
    <Typography variant="subtitle1" color="text.primary" align="center">
        Explore our packages in details with scenic views from the gallery of each package
          find what suits your budget: Zaph Tours has got you covered in any event be it holiday,
          family vacation or just a personal tour at pocket-friendly prices 
          <Typography variant="h6" color="secondary"> Insane Offers Available</Typography>
    </Typography>
    <Box display={'grid'} gap={3} gridTemplateColumns={{xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} 
     sx={{bgcolor: '#f9f9f9', p: 2}}>
      {tripTypes.map(tripType => (<TripTypeCard {...tripType} key={tripType.title} /> )
      )}
    </Box>
    </Container>
  ) 
}

export default TripTypesPage;
