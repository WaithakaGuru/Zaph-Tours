import { useState } from "react";
import tripTypes from "../utils/TripTypes";
import TripTypeCard from "../components/TripTypeCard";
import { Container, Typography, Box, Chip, Stack, Button } from "@mui/material";
import {
  Spoke,
  Star,
  Terrain,
  Museum,
  Favorite,
  Pets,
  Spa,
  FamilyRestroom,
  BeachAccess,
  Restaurant,
} from "@mui/icons-material";
import {orange } from "@mui/material/colors";

function TripTypesPage() {
  const [currentTripTypeIdx, setCurrentTripTypeIdx] = useState(0);
  const tourPackages = [
    { label: "Luxury Vacations", icon: <Star />, id: "luxury-vacations" },
    { label: "Adventure", icon: <Terrain />, id: "adventure" },
    { label: "Cultural Tours", icon: <Museum />, id: "cultural-tours" },
    { label: "Honeymoon", icon: <Favorite />, id: "honeymoon" },
    { label: "eco-tours", icon: <Spoke />, id: "eco-tours" },
    { label: "Wildlife safaris", icon: <Pets />, id: "wildlife-safaris" },
    { label: "Wellness retreats", icon: <Spa />, id: "wellness-retreats" },
    { label: "family", icon: <FamilyRestroom />, id: "family" },
    { label: "Beach Holidays", icon: <BeachAccess />, id: "beach-holidays" },
    { label: "Culinary tours", icon: <Restaurant />, id: "culinary-tours" },
  ];
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "error",
    "warning",
    "default",
  ];

  function handleSelectTripType(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedTriptypeIndex =  tripTypes.findIndex(tripType => tripType.id == e.currentTarget.id)
    setCurrentTripTypeIdx(selectedTriptypeIndex);
  }

  return (
    <Container sx={{ width: "100%", justifyContent: "center" }}>
      <Typography
        variant="body1"
        my={3}
        color="secondary"
        gutterBottom
        display={"flex"}
        justifyContent={"center"}
        fontWeight={600}
        fontSize={"1.6rem"}
        position={"sticky"}
        top={"3.5rem"}
        pt={1}
        zIndex={5}
        bgcolor={"#fff"}
      >
        Zaph Tours
        <Typography variant="h4" color="primary" ml={1}>
          Trip Packages
        </Typography>
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.primary"
        maxWidth={{ xs: "auto", md: "70%" }}
        mx={"auto"}
        align="center"
      >
        Explore our packages in details with scenic views from the gallery of
        each package find what suits your budget: Zaph Tours has got you covered
        in any event be it holiday, family vacation or just a personal tour at
        pocket-friendly prices
        <Typography variant="h6" color="secondary">
          Insane Offers Available
        </Typography>
      </Typography>
      <Stack
        direction={"row"}
        mb={2}
        mt={2}
        py={1}
        maxWidth={"100%"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        position={"sticky"}
        bgcolor="#f9f9f9"
        mx={"auto"}
        zIndex={5}
        top={"4rem"}
        sx={{
          transition: "scale .4s",
          boxShadow: "0 0 .5rem rgba(0, 0, 0, .2)",
          px: {
            sm: "5%",
            md: "10%",
          },
        }}
      >
        {tourPackages.map((tour, idx) => (
          <Button
            onClick={handleSelectTripType}
            id={tour.id}
            key={idx}
            sx={{
              border: (tour.id === tripTypes[currentTripTypeIdx].id) ?  `.2rem solid ${orange[600]}` : 'none' ,
              textTransform: "capitalize",
              p: '1px', m: 1,
              borderRadius: '1rem',
              "&:hover": {
                scale: 1.1,
              },
            }}
          >
            <Chip
              label={tour.label}
              size="medium"
              variant={idx % 2 === 0 ? "outlined" : "filled"}
              icon={tour.icon}
              color={
                colors[idx % colors.length] as
                  | "primary"
                  | "secondary"
                  | "success"
                  | "info"
                  | "error"
                  | "warning"
                  | "default"
              }
            />
          </Button>
        ))}
      </Stack>

      {/*  */}

      <Box
        display={"grid"}
        gap={3}
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        sx={{ bgcolor: "#f9f9f9", p: 2 }}
      >
        <TripTypeCard {...tripTypes[currentTripTypeIdx]} />
      </Box>
    </Container>
  );
}

export default TripTypesPage;
