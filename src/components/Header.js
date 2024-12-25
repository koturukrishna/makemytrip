import * as React from "react";
import { Stack, Button, Typography } from "@mui/material";
// import NavBars from "./NavBar";

const styled = { fontSize: "13px", color: "white", textTransform: "none" };

export default function Header() {
  return (
    <Stack
      pl={4}
      pr={4}
      height="40px"
      spacing={5}
      direction="row"
      display="flex"
      justifyContent="space-between"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.svg"
        alt="Make MyTrip"
      />

      <Stack spacing={2} direction="row">
        <Button variant="text" color="secondary" sx={styled}>
          <Stack>
            <Typography variant="body1">List Your Property</Typography>
            <Typography variant="body2">Grow your business!</Typography>
          </Stack>
        </Button>

        <Button variant="text" size="small" sx={styled}>
          <Stack>
            <Typography variant="body1">Introducing myBiz</Typography>
            <Typography variant="body2">Business Travel Solution</Typography>
          </Stack>
        </Button>
        <Button variant="text" size="small" sx={styled}>
          <Stack>
            <Typography variant="body1">My Trips</Typography>
            <Typography variant="body2">Manage your bookings</Typography>
          </Stack>
        </Button>
        <Button variant="contained" size="small" sx={styled}>
          Login or Create Account
        </Button>
        <Button variant="outlined" color="white" size="small" sx={styled}>
          IN|ENG
        </Button>
        <Button variant="outlined" color="white" size="small" sx={styled}>
          INR
        </Button>
      </Stack>
    </Stack>
  );
}
