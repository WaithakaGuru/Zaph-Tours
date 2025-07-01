import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import DestinationCard from "../components/DestinationCard"
import destinations from "../utils/Destinations"

function DestinationsPage() {
  return (
    <Container>
        <Box>
         <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography>What is MUI?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    MUI (Material-UI) is a popular React UI framework based on Google's Material Design.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    </Container>
  )
}

export default DestinationsPage