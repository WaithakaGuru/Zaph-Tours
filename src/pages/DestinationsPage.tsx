import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
  CardActions,
  Tooltip,
} from "@mui/material";

import destinations from "../utils/Destinations";
import { Group, OneK } from "@mui/icons-material";

function DestinationsPage() {
  return (
    <Box>
      <Stack direction={'column'}>
        <Typography variant="h3"align="center" my={3} fontSize={40} gutterBottom
        color="primary" textTransform="uppercase" fontWeight={600}>
          Explore the most exciting destinations
        </Typography>
        <Typography variant="h6" maxWidth={'60%'} mx={'auto'} my={3}  align="center"  gutterBottom>
          A wide listing of all the top rated destinations by our previous travellers 
              giving a full detailed explanation of the area with the cost and the experiences thereof. 
        </Typography>

        <Grid container spacing={3} p={2} width={'100%'} justifyContent={'center'} >
            {destinations.map(destination => (
            <Grid sx={{xs: 12, md: 6, lg: 12}} minWidth= {'25rem'}
               maxWidth={'30%'}> 
              <Card
                sx={{
                  transition: "scale .4s",
                  borderRadius: ".3rem",
                  "&:hover": { scale: 1.05 },
                  minHeight :'max-content',
                  position:"relative"
                }}
              >
                <CardMedia
                  component="img"
                  image={destination.image}
                  alt={destination.name}
                  height={"250px"}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600} align="center" gutterBottom>
                    {destination.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    fontSize={"1rem"}
                    color="text.secondary"
                  >
                    {destination.description}
                  </Typography>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    gap={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ mt: 2 }}
                  >
                    <Chip label= {`Group: ${destination.groupPrice}`}
                      avatar={<Group/>}
                      color="primary"
                      variant="filled"
                      size="medium"
                    />
                    
                   <Chip label= {`Solo: ${destination.individualPrice}`}
                      color="secondary"
                      variant="filled"
                      size="medium"
                      avatar={<OneK/>}
                    />
                    <CardActions 
                     sx={{position: 'absolute',
                       bottom: '50%', right: '1rem', py: 0}}
                    >
                      <Tooltip sx={ {py: 0}} arrow  
                      title={`Learn more about the ${destination.name}`} color="secondary">
                         <Button size="small" variant="contained"
                          sx={{my: 0}} href="#"
                        >
                          Learn More
                          </Button> 
                      </Tooltip>
                    </CardActions>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            ))}
        </Grid>

        {/* <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>What is MUI?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MUI (Material-UI) is a popular React UI framework based on
              Google's Material Design.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Stack>
    </Box>
  );
}

export default DestinationsPage;
