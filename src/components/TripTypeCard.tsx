import { SkipNextRounded, SkipPreviousRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

type TripeType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  offer: string;
};

function TripTypeCard(tripInfo: TripeType) {
  return (
    <Paper elevation={0} component={'section'} id={tripInfo.id}>
      <CardMedia component={"img"} image={tripInfo.images[0]} />
      <SkipNextRounded />
      <SkipPreviousRounded />
      <Typography variant="h6" color="primary">
        {tripInfo.title}
      </Typography>
      <Accordion>
        <AccordionSummary>
          <Alert severity="info"> LEARN MORE </Alert>
        </AccordionSummary>
        <AccordionDetails>{tripInfo.description}</AccordionDetails>
      </Accordion>
    </Paper>
  );
}

export default TripTypeCard;
