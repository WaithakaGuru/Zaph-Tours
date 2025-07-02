import { CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";

function DestinationCard({ ...destinationInfo }) {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      bgcolor="#fff"
      sx={{
        minWidth: {
          xs: "25rem",
          sm: "auto",
        },
        transition: "scale .4s",
        borderRadius: ".3rem",
        "&:hover": { scale: 1.05 },
      }}
    >
      <CardMedia
        component="img"
        image={destinationInfo.image}
        alt={destinationInfo.name}
        height={"240px"}
        sx={{ borderRadius: ".3rem .3rem 0 0" }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={600} align="center" gutterBottom>
          {destinationInfo.name}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          fontSize={"1rem"}
          color="text.secondary"
          mx={"auto"}
          maxWidth={"21rem"}
        >
          {destinationInfo.description}
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ mt: 2 }}
        >
          <Typography
            variant="caption"
            color="primary"
            fontWeight={600}
            fontSize={".85rem"}
          >
            Group: {destinationInfo.groupPrice}
          </Typography>
          <Typography
            variant="caption"
            color="secondary"
            fontWeight={600}
            fontSize={".85rem"}
          >
            Solo: {destinationInfo.individualPrice}
          </Typography>
        </Stack>
      </CardContent>
    </Grid>
  );
}

export default DestinationCard;
