import { Avatar, Paper, Typography } from "@mui/material"


function TestimonialCard({...testimonialInfo}) {
  return (
    <>
    <Paper elevation={2} sx={{
      p: 3, alignItems:'center', display: 'flex,',
      flexDirection: 'column', width: '80%'
    }}>
        <Avatar sx={{
          bgcolor: 'orange', fontWeight: 500,
          mb: 3, mx:'auto'
        }}>
          {testimonialInfo.name[0]}</Avatar>
        <Typography variant="subtitle1" align="center">
          {testimonialInfo.quote}
        </Typography>
        <Typography variant="subtitle2" sx={{textAlign: 'center'}}>
          ~{testimonialInfo.name}
        </Typography>
    </Paper>
    </>
  )
}

export default TestimonialCard; 
