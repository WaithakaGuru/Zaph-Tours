import { SkipNextRounded, SkipPreviousRounded } from "@mui/icons-material";
import {
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
      <SkipPreviousRounded />
      <SkipNextRounded />
      <Typography variant="h6" color="primary">
        {tripInfo.title}
      </Typography>
    </Paper>
  );
}

export default TripTypeCard;
