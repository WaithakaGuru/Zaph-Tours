import {
  Box,
  CardMedia,
  Paper,
  Typography,
  Card,
  Container,
} from "@mui/material";
import Overlay from "./Overlay";

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
    <Container>
      <Paper
        elevation={0}
        component={"section"}
        id={tripInfo.id}
        sx={{
          p: 4,
          width: "80dvw",
          backgroundImage: `url(${tripInfo.images[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "25rem",
          my: 4,
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          color="textPrimary"
          mx={2}
          sx={{ textShadow: "0 0 2px darkorange" }}
          fontWeight={600}
          fontStyle={"italic"}
          position={"relative"}
          zIndex={2}
        >
          {tripInfo.title}
        </Typography>
        <Typography
          variant="body2"
          color="#eee"
          fontWeight={500}
          fontSize={"1rem"}
          maxWidth={"50%"}
          position={"relative"}
          zIndex={2}
        >
          {tripInfo.description} Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quos mollitia architecto consequatur voluptate saepe
          dicta nesciunt quaerat, sequi iure beatae?
        </Typography>
        <Overlay />
      </Paper>
      <Card sx={{ p: 2 }}>
        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          px={2}
          position={"relative"}
        >
          {tripInfo.title} Gallery
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          fontWeight={500}
          fontSize={"1rem"}
          px={2}
          gutterBottom
        >
          Scenic views of the {tripInfo.title} Package
        </Typography>
        <Box
          component={"div"}
          gap={2}
          width={"100%"}
          sx={{
            columns: { xs: "15rem", md: "18rem" },
          }}
        >
          {tripInfo.images.map((image, idx) => (
            <CardMedia
              component={"img"}
              image={image}
              key={idx}
              sx={{
                borderRadius: ".6rem",
                my: 1,
                mt: "1px",
                "&:hover": { scale: 1.05 },
                transition: "scale .4s",
              }}
            />
          ))}
        </Box>
      </Card>
    </Container>
  );
}

export default TripTypeCard;
