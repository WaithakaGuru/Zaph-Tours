import { Paper, Typography } from "@mui/material"

type TripeType = {
  title: string,
  description: string, 
  images: string[],
  price: string,
  offer: string 
}

function TripTypeCard(tripInfo: TripeType ) {
  return (
    <Paper >
        <Typography>
           
        </Typography>
        TripType
    </Paper>
  )
}

export default TripTypeCard