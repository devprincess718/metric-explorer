import "./App.scss";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LeftSide from "./container/LeftSide";
import RightSide from "./container/RightSide";

function App() {
  return (
    <Container maxWidth="xl" fixed>
      <Grid container spacing={1}>
        <Grid item xl={12} md={12}>
          <Typography variant="h3" component="h3">
            Metrics explorer
          </Typography>
        </Grid>
        <Grid item xl={6} md={6}>
          <LeftSide />
        </Grid>
        <Grid item xl={6} md={6} >
          <RightSide />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
