import {Typography, Box, Button, Grid} from '@mui/material'


function Herosection() {
  return (
    <Grid container sx={{sm: 12, border: "1px solid red", mt: 2}}>
        <Box component={"section"} bgcolor={"#eee"}  justifyContent={"center"} height={"100%"}
         sx={{display: "flex", flexDirection:"column", backgroundImage: 'url(./ZaphHero-image.jpeg)',  backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}}>
            <Typography variant='h2' fontWeight={800} color={'chocolate'} fontSize={"3rem"} align='center' gutterBottom>
                Best safaris and adventures
            </Typography>
            <Button variant='contained' color='secondary' size='large' sx={{width: "40%", mx: "auto", my: 1}}>
                Explore more
            </Button>
        </Box>
    </Grid>
  )
}

export default Herosection