import {
  Email,
  Facebook,
  LinkedIn,
  Phone,
  Room,
  WhatsApp,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
  Stack,
  Divider,
  Container,
  IconButton,
} from "@mui/material";

function ContactPage() {
  return (
    <Container sx={{ bgcolor: "#f9f9f9" }}>
      <Typography
        variant="h3"
        color="color-mix(in srgb, 30% darkgreen, 70% orange)"
        fontWeight={600}
        align="center"
        gutterBottom
        mt={2}
      >
        Let’s connect.
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={500}
        color="textSecondary"
        align="center"
      >
        We're here to help and happy to hear from you
      </Typography>

      <Paper
        sx={{
          maxWidth: {
            xs: "72%",
          },
          mx: "auto",
          p: 2,
          minWidth: {
            xs: "100%",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          fontWeight={600}
          color="primary"
        >
          Zaph's Social Links
        </Typography>
        <Stack
          component={"div"}
          direction={"row"}
          justifyContent={"center"}
          gap={2}
        >
          <IconButton color={"primary"} href="https://whatsapp.com">
            <WhatsApp />
          </IconButton>
          <IconButton href="https://x.com">
            <X sx={{ color: "black" }} />
          </IconButton>
          <IconButton href="https://linkedin.com">
            <LinkedIn sx={{ color: "rgb(0, 100, 220)" }} />
          </IconButton>
          <IconButton href="htpps://youtube.com">
            <YouTube sx={{ color: "red" }} />
          </IconButton>
          <IconButton href="https://facebook.com">
            <Facebook sx={{ color: "rgb(0, 100, 220)" }} />
          </IconButton>
        </Stack>
      </Paper>
      <Grid container columns={3} justifyContent={"center"}>
        <Paper
          component={"form"}
          elevation={2}
          sx={{
            alignItems: "center",
            width: "25rem",
            p: 2,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            minWidth: {
              xs: "100%",
            },
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            align="center"
            fontWeight={600}
          >
            Send us a message
          </Typography>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Enter your name"
            label="Your Name"
            required
            sx={{ my: 1, width: "95%" }}
          />
          <TextField
            type="email"
            variant="outlined"
            placeholder="Enter your email addres"
            label="Email Address"
            required
            sx={{ my: 1, width: "95%" }}
          />
          <TextField
            type="text"
            variant="outlined"
            label="Subject"
            sx={{ my: 1, width: "95%" }}
            required
          />
          <TextField
            type="text"
            multiline
            minRows={5}
            label="Message"
            sx={{ my: 1, width: "95%" }}
            placeholder="Type your message here"
            required
          />

          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            p: 3,
            m: 2,
            minWidth: {
              xs: "100%",
            },
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: {
              xs: "72%",
            },
          }}
        >
          <Stack
            gap={{ xs: 0, sm: 4 }}
            minWidth={{}}
            direction={{
              xs: "column",
              sm: "row",
            }}
          >
            <Box
              component={"section"}
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                color="primary"
                gutterBottom
              >
                Contact Information
              </Typography>
              <Button
                startIcon={<Email />}
                href="mailto:info@zaphtours.com"
                color="warning"
                variant="text"
                sx={{ textTransform: "lowercase" }}
              >
                info@zaphtours.com
              </Button>
              <Button
                startIcon={<Phone />}
                href="tel:0712234456"
                color="warning"
                sx={{ textTransform: "lowercase" }}
              >
                Call us on: +254-712-234-456
              </Button>
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ display: "flex", justifyContent: "center", my: 1 }}
              >
                <Room />
                Location: Nairobi, Kenya
              </Typography>
            </Box>
            <Stack mt={2}>
              <Typography
                variant="body1"
                fontWeight={600}
                align="left"
                color="secondary"
                gutterBottom
              >
                We are open on:
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Monday-Friday: 8:00am - 6:00pm
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Sunday: 9:00am - 5:00pm
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Sat & Holidays: Closed
              </Typography>
            </Stack>
          </Stack>
          <Divider orientation="horizontal" flexItem></Divider>
          <Box component={"div"} my={3}>
            <Typography
              variant="body1"
              fontWeight={500}
              color="primary"
              gutterBottom
            >
              Find us via the live map:
            </Typography>
            <iframe
              title="Zaph Tours Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.8219%2C-1.2921%2C36.8219%2C-1.2921&amp;layer=mapnik"
              allowFullScreen
              loading="lazy"
              style={{ border: 0, width: "100%", height: "100%" }}
            />
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}

export default ContactPage;
