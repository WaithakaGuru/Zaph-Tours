import { Typography, Box, Button, Stack } from "@mui/material";
import {grey, orange} from '@mui/material/colors'

function Herosection() {
  return (
    <Stack sx={{ sm: 12, width: "100%" }}
    >
      <Box
        component={"section"}
        justifyContent={"center"}
        width={"100%"}
        minHeight={"25rem"}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url(./ZaphHero-image.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h2" align="center" fontWeight={700}
        color="#fff" gutterBottom
        sx={{textShadow: '0 0 5px #333'}}>
            Zaph Tours
        </Typography>

        <Typography
          variant="body2"
          fontWeight={600}
          textTransform={"capitalize"}
          fontSize={"2rem"}
          align="center"
          gutterBottom
          sx={{color: grey[900]}}
        >
          Best safaris and adventures
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#featured-destinations"
        //   disabled
          disableRipple
          sx={{ minWidth: "20%", mx: "auto",
            bgcolor: orange[700], color: 'InfoText',
             my: 1, py:2, mt: 7, '&:hover': {
                backgroundColor: orange[400]
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
            fontWeight={600} fontSize={"1.3rem"}
            >
                Explore destinations
            </Typography>
        </Button>
      </Box>
    </Stack>
  );
}

export default Herosection;
