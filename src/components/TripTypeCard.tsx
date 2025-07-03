import {
  Box,
  CardMedia,
  Paper,
  Typography,
  Card,
  Container,
  Stack,
  Chip,
} from "@mui/material";
import Overlay from "./Overlay";
import { useEffect, useState } from "react";

type TripeType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  offer: string;
};

function TripTypeCard(tripInfo: TripeType) {
  const [bgImgIndex, setBgImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changeBgImageInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgImageIndex((idx) => (idx + 1) % tripInfo.images.length);
        setFade(true);
      }, 800);
    }, 12000);

    return () => clearInterval(changeBgImageInterval);
  }, []);

  return (
    <Container sx={{ ml: { md: "-1rem" } }}>
      <Paper
        elevation={0}
        component={"section"}
        id={tripInfo.id}
        sx={{
          transition: "background-image 0s, opacity 1s",
          opacity: fade ? 1 : 0,
          p: 4,
          width: "80dvw",
          backgroundImage: `url(${tripInfo.images[bgImgIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "25rem",
          my: 4,
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          color="textDisabled"
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
          maxWidth={
            {md: '50%', xs: '90%'}
          }
          position={"relative"}
          zIndex={2}
        >
          {tripInfo.description} Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quos mollitia architecto consequatur voluptate saepe
          dicta nesciunt quaerat, sequi iure beatae?
        </Typography>
        <Stack direction={{ xs:'column', md: "row"}} spacing={2} mt={4}>
          <Chip
            label={`Price: Kes ${tripInfo.price}`}
            variant="filled"
            color="info"
            sx={{ my: 2, fontSize: "1rem" }}
          />
          <Chip
            label={`Offer: ${tripInfo.offer}`}
            variant="filled"
            color="warning"
            sx={{ my: 2, fontSize: "1rem", fontWeight: 600 }}
          />
        </Stack>
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
