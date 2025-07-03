import tripTypes from "../utils/TripTypes";
import TripTypeCard from "../components/TripTypeCard";
import { Container, Typography, Box, Link, Chip, Stack } from "@mui/material";
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
  Restaurant
} from "@mui/icons-material";

function TripTypesPage() {
  const tourPackages = [
    { label: "Luxury Vacations", icon: <Star /> },
    { label: "Adventure", icon: <Terrain /> },
    { label: "Cultural Tours", icon: <Museum /> },
    { label: "Honeymoon", icon: <Favorite /> },
    { label: "eco-tours", icon: <Spoke /> },
    { label: "Wildlife safaris", icon: <Pets /> },
    { label: "Wellness retreats", icon: <Spa /> },
    { label: "family", icon: <FamilyRestroom /> },
    { label: "Beach Holidays", icon: <BeachAccess /> },
    { label: "Culinary tours", icon: <Restaurant /> },
  ];
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "error",
    "warning",
    "default"
  ];
  return (
    <Container sx={{ width: "100vw", justifyContent: "center" }}>
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
        mt={4}
        maxWidth={"100%"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        position={"sticky"}
        bgcolor="color-mix(in srgb, 20% white, 80%rgb(189, 249, 211) )"
        mx={"auto"}
        zIndex={5}
        sx={{
          top: {
            xs: '3.5rem', md: '6.5rem'
          },
          px:{
             sm: '5%',  md: 'auto'}
        }}
      >
        {tourPackages.map((tour, idx) => (
          <Link href="#" key={idx} order={"revert-layer"}>
            <Chip
              label={tour.label}
              sx={{ m: 1 }}
              size="medium"
              variant={(idx%2 ===0)?  'outlined' : 'filled'}
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
          </Link>
        ))}
      </Stack>

      {/*  */}

      <Box
        display={"grid"}
        gap={3}
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        sx={{ bgcolor: "#f9f9f9", p: 2 }}
      >
        {tripTypes.map((tripType) => (
          <TripTypeCard {...tripType} key={tripType.title} />
        ))}
      </Box>
    </Container>
  );
}

export default TripTypesPage;
