import { Typography, Box, Button, Grid } from "@mui/material";
import {grey} from '@mui/material/colors'

function Herosection() {
  return (
    <Grid
      container
      sx={{ sm: 12, width: "100%" }}
    >
      <Box
        component={"section"}
        justifyContent={"center"}
        width={"100%"}
        minHeight={"20rem"}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url(./ZaphHero-image.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          textTransform={"capitalize"}
          fontSize={"3rem"}
          align="center"
          gutterBottom
          sx={{color: grey[900], textShadow: '0 0 3px darkorange'}}
        >
          Best safaris and adventures
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#"
          color="secondary"
        //   disabled
          disableRipple
          sx={{ minWidth: "20%", mx: "auto",
             my: 1, py:2, mt: 7, '&:hover': {
                backgroundColor: 'orange'
             },
             '&:active' : {
                scale: '.95' 
             },
             transition: "scale .4s",
             '&.Mui-disabled': {
                color: grey[600],
                backgroundColor: grey[200]
             }
            }}
        >
            <Typography variant="h3" textTransform={'uppercase'}
            fontWeight={700} fontSize={"1.6rem"}
            >
                Explore more
            </Typography>
        </Button>
      </Box>
    </Grid>
  );
}

export default Herosection;
