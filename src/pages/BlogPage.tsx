import { Box, Container, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function BlogPage() {
  return (
    <>
      <Typography variant="h3" textTransform={'capitalize'}
       align="center" gutterBottom mt={4} fontWeight={600}>
        Zaph tours blogs
      </Typography>
      <Container sx={{my: 4}}>
        <Paper elevation={2} sx={{minHeight: '12rem', p: 4, display: 'flex', flexDirection:'column', alignItems: 'center', width: '100%'}}>
          <Typography variant="h5" textTransform={'capitalize'}  fontWeight ={500}
          gutterBottom align="center">
            Welcome to Our Blog!
          </Typography>
          <Typography variant="subtitle1" sx={{maxWidth: {
            lg: '70%'
          }}}>
            Stay tuned for travel tips, destination highlights, and inspiring
            stories from our travelers and guides. We’ll help you plan your
            next adventure and share the magic of Kenya and beyond!
          </Typography>
        </Paper>
        <Box component={'section'} my={4}  py={2} borderTop={`1px solid ${grey[700]}`} borderRadius={1}>
            <Typography variant="subtitle1" align="center">
              No blogs added yet!! Check back later :)
            </Typography>
        </Box>
      </Container>
    </>
  )
}

export default BlogPage;
