import { Email, LocationCity, LocationCityTwoTone, Phone, Room } from "@mui/icons-material";
import { Button, Grid, Paper, Typography, TextField, Box, Stack, Divider } from "@mui/material"

function ContactPage() {
  return (
    <Grid container columns={3} justifyContent={'center'}>
      <Paper component={'form'} elevation={2} sx={{ alignItems:'center',
        width:'25rem', p:2, m:2, display: 'flex', flexDirection: 'column'
        }} >
        <Typography variant="h5" color="primary" align="center" fontWeight={600}>
          Send us a message
        </Typography>
        <TextField type="text" variant="outlined" placeholder="Enter your name"
         label="Your Name" required  sx={{my: 1, width: '95%'}}/>
        <TextField type="text"  variant="outlined" placeholder="Enter your email addres" 
        label="Email Address"  required sx={{ my: 1,width: '95%'}} />
        <TextField type="text" variant="outlined" label="Subject" 
        sx={{ my: 1, width: '95%'}}  required />
        <TextField type="text" multiline minRows={5} label="Message" sx={{ my:1, width: '95%'}}
        placeholder="Type your message here" required/>  

        <Button type="submit" variant="contained" size="large" sx={{mt:2}}>
          Send Message
        </Button>
      </Paper>
      
      <Paper elevation={2} sx={{p:3, m:2, minWidth: '25rem', display:'flex', alignItems:'center', flexDirection:'column'}}>
        <Typography variant="h5" fontWeight={600} color="primary">
          Contact Information
        </Typography>
        <Box component={'section'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'} >
          <Button startIcon={<Email/>} href="mailto:info@zaphtours.com"  color='warning' 
          variant="text" sx={{textTransform: 'lowercase'}}>
            info@zaphtours.com
          </Button>
          <Button startIcon={<Phone/>} href="tel:0712234456" color="warning"
          sx={{textTransform: 'lowercase'}}>
           Call us on: +254-712-234-456
          </Button>
          <Typography variant="subtitle2" color="primary" gutterBottom
          sx={{display: 'flex', justifyContent:'center'}}>
            <Room/>
           Location: Nairobi, Kenya
          </Typography>
        </Box>
        <Stack mt={4}>
          <Typography variant="body1" fontWeight={600} align="center"
          color="secondary" gutterBottom>
            We are open on: 
          </Typography>
          <Typography variant="subtitle1"  color="textSecondary"gutterBottom>
              Monday-Friday: 8:00am - 6:00pm
          </Typography>
          <Typography variant="subtitle1" color="textSecondary"gutterBottom>
              Sunday: 9:00am - 5:00pm
          </Typography>
          <Typography variant="subtitle1" color="textSecondary"gutterBottom>
              Sat & Holidays: Closed
          </Typography>
        </Stack>
        <Divider orientation="horizontal" flexItem></Divider>
        <Box component={'div'} my={4} >
          <Typography variant="body1" fontWeight={500} color="primary" gutterBottom>
            Find us via the live map: 
          </Typography>
          <iframe 
            title="Zaph Tours Location Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.8219%2C-1.2921%2C36.8219%2C-1.2921&amp;layer=mapnik" 
            allowFullScreen
            loading="lazy"
            style={{border: 0, width: '100%', height: '100%'}}
          />  
        </Box>
      </Paper>
    </Grid>
  )
}

export default ContactPage;
