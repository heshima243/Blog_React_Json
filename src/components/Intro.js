import { Button, Container, Grid, Typography } from "@mui/material";

const Intro = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Zoom to The Message
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          persp iciatis iusto eaque reprehenderit voluptatem voluptatibus, quide
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="success">
                Discover
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Join Us
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
