import {Card, CardContent, CardMedia, Stack, Typography} from '@mui/material'


function DestinationCard({...destinationInfo}) {
  return (
    <Card sx={{
        transition: 'scale .4s', borderRadius: '.3rem',
        '&:hover':{scale : 1.05 }
    }}>
        <CardMedia component='img' image={destinationInfo.image} alt={destinationInfo.name} height={'200px'}/>
        <CardContent>
            <Typography variant='h6' fontWeight={600} align='center' gutterBottom>
                {destinationInfo.name}
            </Typography>
            <Typography variant='subtitle1' align='center' fontSize={'1rem'} color='text.secondary'>
                {destinationInfo.description}
            </Typography>
            <Stack direction={{xs: 'column', md:"row"}} gap={2} 
            justifyContent={'center'} alignItems={'center'}
            sx={{mt: 2}}>
                <Typography variant='caption' color="primary" fontWeight={600} fontSize={'.85rem'}>
                    Group: {destinationInfo.groupPrice}
                </Typography>
                <Typography variant='caption' color="secondary" fontWeight={600} fontSize={'.85rem'}>
                    Solo: {destinationInfo.individualPrice}
                </Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default DestinationCard