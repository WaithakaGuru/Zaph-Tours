import tripTypes from "../utils/TripTypes";
import TripTypeCard from "../components/TripTypeCard";
import { Typography } from "@mui/material";

function TripTypesPage() {
  return (
    <>
    <Typography variant="h4" color="secondary" gutterBottom fontWeight={600} fontSize={'1.6rem'} >
      Zaph Tours <Typography  variant="h4"  color="primary">Trip Packages</Typography>
    </Typography>
      {tripTypes.map(tripType => (<TripTypeCard {...tripType} key={tripType.title} /> )
      )}
    </>
  ) 
}

export default TripTypesPage;
