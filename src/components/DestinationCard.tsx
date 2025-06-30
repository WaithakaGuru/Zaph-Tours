import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'


function DestinationCard({...destinationInfo}) {
  return (
    <Card>
        <CardMedia component='img' image={destinationInfo.path} alt={destinationInfo.title} height={'200px'}/>
        <CardContent>
            <Typography variant='h4'>
                ehwirjfnw
            </Typography>
        </CardContent>
    </Card>
  )
}

export default DestinationCard