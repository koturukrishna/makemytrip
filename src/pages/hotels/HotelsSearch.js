import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { locations } from "../flights/FlightSearch";
import BasicDateRangePicker from "../flights/BasicDateRangePicker";
import { HotelRoomsGuest } from "./HotelRoomsGuest";

export const HotelsSearch = () => {
  const [hotelLocation, setHotelLocation] = useState(locations[0]);
  const [hotelCheckinDate, setHotelCheckinDate] = useState([]);

  console.log("hotelsDate kri", hotelCheckinDate);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        paddingTop={1}
        mt={3}
      >
        <Stack mt={2}>
          <Typography variant="body1" mt={-2}>
            City, Property name or Location
          </Typography>
          <Autocomplete
            fullWidth
            value={hotelLocation}
            onChange={(event, newValue) => {
              setHotelLocation(newValue);
            }}
            id="controllable-states-demo1"
            disablePortal
            options={locations}
            sx={{ width: 220 }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </Stack>
        <BasicDateRangePicker hotelCheckingSetValues={setHotelCheckinDate} />
        <HotelRoomsGuest />
      </Stack>
    </Container>
  );
};
