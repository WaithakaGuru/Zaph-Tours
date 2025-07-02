import { Button, Grid, Paper, Typography, TextField, Box } from "@mui/material"

function ContactPage() {
  return (
    <>
      <Paper component={'form'} elevation={2} sx={{
        width:'30rem', p:2, m:2, display: 'flex', flexDirection: 'column'
        }} >
        <Typography variant="h5" color="primary" align="center" fontWeight={600}>
          Send us a message
        </Typography>
        <TextField type="text" variant="outlined" placeholder="Enter your name"
         label="Your Name" required  sx={{mx: 2, my: 1, width: '95%'}}/>
        <TextField type="text"  variant="outlined" placeholder="Enter your email addres" 
        label="Email Address"  required sx={{mx: 'auto', my: 1,width: '95%'}} />
        <TextField type="text" variant="outlined" label="Subject" 
        sx={{mx: 2, my: 1, width: '95%'}}  required />
        <TextField type="text" multiline minRows={5} label="Message" sx={{mx:'auto', my:1, width: '95%'}}
        placeholder="Type your message here" required/>  

        <Button type="submit" variant="contained" size="large" sx={{mx: 'auto'}}>Send Message</Button>
      </Paper>
    </>
  )
}

export default ContactPage;
