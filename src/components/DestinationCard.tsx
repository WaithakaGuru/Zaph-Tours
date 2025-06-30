import {Card, CardContent, CardMedia, Typography} from '@mui/material'


function DestinationCard({...destinationInfo}) {
  return (
    <Card>
        <CardMedia component='img' image={destinationInfo.image} alt={destinationInfo.name} height={'200px'}/>
        <CardContent>
            <Typography variant='h4'>
                {destinationInfo.name}
            </Typography>
            <Typography variant='subtitle1' align='center'>
                {destinationInfo.description}
            </Typography>
            <Typography variant='caption'>
                {destinationInfo.groupPrice}
            </Typography>
            <Typography variant='caption'>
                {destinationInfo.individualPrice}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default DestinationCard