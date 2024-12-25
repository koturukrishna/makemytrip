import React from "react";
import { Typography, Paper, Stack, Button } from "@mui/material";

export const ImageCard = ({ name, url, title, desc }) => {
  return (
    <Paper elevation={3}>
      <Stack sx={{ width: "400px", height: "200px" }} direction="row">
        <Stack>
          <img src={url} alt="name" width="200px" height="height" />
        </Stack>
        <Stack>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2">{desc}</Typography>
          <Button>Book Now</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
